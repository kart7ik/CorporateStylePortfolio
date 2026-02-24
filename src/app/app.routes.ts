import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'rxn-case-study',
    loadComponent: () =>
      import('./pages/rxn-case-study/rxn-case-study.component').then(m => m.RxnCaseStudyComponent)
  },
  { path: '**', redirectTo: '' }
];
