import { Component } from '@angular/core';

import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'app-part2',
  templateUrl: '../base/base.component.html',
  styleUrl: '../base/base.component.css',
})
export class Part2Component extends BaseComponent {
  constructor() {
    super(BaseComponent.DISPLAY_FASTEST_FIRST);
  }
}
