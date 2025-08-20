import { Routes } from '@angular/router';

import { Part1Component } from "./question1/part1/part1.component";
import { Part2Component } from "./question1/part2/part2.component";
import { Part3Component } from "./question1/part3/part3.component";
import { Question1Component } from "./question1/question1.component";
import { Question2Component } from "./question2/question2.component";
import { Question3Component } from "./question3/question3.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'q1/p1',
  },
  {
    path: 'q1',
    component: Question1Component,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'p1',
      },
      {
        path: 'p1',
        component: Part1Component,
      },
      {
        path: 'p2',
        component: Part2Component,
      },
      {
        path: 'p3',
        component: Part3Component,
      },
    ],
  },
  {
    path: 'q2',
    component: Question2Component,
  },
  {
    path: 'q3',
    component: Question3Component,
  },
];
