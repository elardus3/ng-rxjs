import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { SafeUrl } from "@angular/platform-browser";
import { concat, delay, merge, ReplaySubject, Subject } from "rxjs";

import { ImageService } from "../image.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css',
})
export class BaseComponent implements OnInit, OnDestroy {
  static readonly DISPLAY_FASTEST_FIRST = 0;
  static readonly DISPLAY_IN_ORDER = 1;

  readonly DEFAULT_IMAGE_COUNT = 6;
  readonly MISSING = 'missing.svg';

  protected images: SafeUrl[] = new Array(this.DEFAULT_IMAGE_COUNT);
  protected received: boolean[] = new Array(this.DEFAULT_IMAGE_COUNT);
  protected displayOrder: 0 | 1;
  protected isCancellable: boolean;
  protected isCancelled = false;

  private readonly requests: Subject<number>[] = new Array(this.DEFAULT_IMAGE_COUNT);
  private readonly cache: SafeUrl[] = new Array(this.DEFAULT_IMAGE_COUNT);
  private imageService: ImageService = inject(ImageService);

  constructor(@Inject('DISPLAY_ORDER') displayOrder: 0 | 1,
              @Inject('IS_CANCELLABLE') isCancellable = false) {
    this.displayOrder = displayOrder;
    this.isCancellable = isCancellable;
  }

  ngOnInit(): void {
    this.images.fill('loading.svg');
    this.received.fill(false);
    this.showRandomImages();
  }

  private showRandomImages() {
    for (let idx = 0; idx < this.DEFAULT_IMAGE_COUNT; idx++) {
      this.requests[idx] = new ReplaySubject<number>();
      this.requests[idx].subscribe((val: number) => console.log('cache image', val));
      this.parseRandomImage(idx);
    }

    const observer = {
      next: (idx: number) => {
        console.log('show image', idx);
        this.images[idx] = this.cache[idx];
        this.received[idx] = true;
      },
      complete: () => this.isCancelled = true
    }

    if (this.displayOrder === BaseComponent.DISPLAY_IN_ORDER) {
      concat(...this.requests).subscribe(observer);
    } else {
      merge(...this.requests).subscribe(observer);
    }
  }

  // NOTE delay even numbered image parsing to help simulate parallel caching and in-order image rendering
  private parseRandomImage(idx: number) {
    console.log('fetch image', idx);
    this.imageService.fetchRandomImage().pipe(delay(idx % 2 === 0 ? 2000 : 0)).subscribe({
      next: (blob: Blob) => {
        if (this.requests[idx].observed) {
          let reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = data => {
            this.cache[idx] = data.target?.result || this.MISSING;
            this.requests[idx].next(idx);
            this.requests[idx].complete();
          };
        } else {
          this.images[idx] = this.MISSING;
        }
      },
      error: () => this.images[idx] = this.MISSING
    });
  }

  onCancel() {
    console.log('cancelling image requests...');
    this.isCancelled = true;
    for (let idx = 0; idx < this.DEFAULT_IMAGE_COUNT; idx++) {
      if (!this.requests[idx].observed && !this.received[idx]) {
        console.log('show cached image', idx);
        this.images[idx] = this.cache[idx];
        this.received[idx] = true;
      } else if (this.requests[idx].observed) {
        console.log('cancel image request', idx);
        this.requests[idx].unsubscribe();
        this.images[idx] = this.MISSING;
      }
    }
  }

  ngOnDestroy(): void {
    this.requests.forEach(request => request.unsubscribe());
  }
}
