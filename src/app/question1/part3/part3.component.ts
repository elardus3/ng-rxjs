import { Component } from '@angular/core';

import { BaseComponent } from "../base/base.component";

@Component({
  selector: 'app-part3',
  templateUrl: '../base/base.component.html',
  styleUrl: '../base/base.component.css',
})
export class Part3Component extends BaseComponent {
  constructor() {
    super(BaseComponent.DISPLAY_IN_ORDER, true);
  }
}
