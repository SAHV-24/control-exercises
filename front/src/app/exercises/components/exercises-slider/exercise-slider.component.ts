import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Exercise } from '../../../shared/interfaces/Exercise.interface';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ExerciseService } from '../../exercise.service';

register();
@Component({
  selector: 'exercise-slider',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ButtonModule, CardModule, CommonModule, RippleModule],
  templateUrl: './exercise-slider.component.html',
  styleUrl: './exercise-slider.component.scss',
})
export class ExerciseSliderComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.exerciseService.getExercises();

    this.exerciseService.$exercises
      .subscribe((exercises: Exercise[]) => {
        this.exercises = exercises;
      });

  }

  public goToExercise(id: string) {
    this.router.navigate(['/exercises', id]);
  }
}
