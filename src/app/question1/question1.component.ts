import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-question1',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './question1.component.html',
})
export class Question1Component {}
