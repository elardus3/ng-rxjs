import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  readonly IMAGE_PLACEHOLDER_URL: string = 'https://abh.ai/nature/180/120';

  private http: HttpClient = inject(HttpClient);

  fetchRandomImage(): Observable<Blob> {
    return this.http.get(this.IMAGE_PLACEHOLDER_URL, {responseType: 'blob'});
  }
}
