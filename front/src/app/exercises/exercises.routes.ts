import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/exercises-page.component/exercise-page.component').then(
        (m) => m.ExercisesPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/exercise/exercise.component').then((m) => m.ExerciseComponent),
  },
];
