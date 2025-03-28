import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ExerciseSliderComponent } from '../../components/exercises-slider/exercise-slider.component';

@Component({
  selector: 'exercise-page',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, CardModule, ButtonModule, ExerciseSliderComponent],
  templateUrl: './exercise-page.component.html',
  styleUrl: './exercise-page.component.scss',
})
export class ExercisesPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
