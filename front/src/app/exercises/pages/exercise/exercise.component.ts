import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../shared/interfaces/Exercise.interface';
import { ButtonModule } from 'primeng/button';
import { CommonModule, Location } from '@angular/common';
import confetti from 'canvas-confetti';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ExerciseService } from '../../exercise.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [ButtonModule, CommonModule, ToastModule],
  templateUrl: 'exercise.component.html',
  styleUrls: ['exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  public exercise: Exercise | null = null;

  // For tracking if the answer is correct
  public isCorrect: boolean = false;
  public isSubmitted: boolean = false;
  public isImageHovered: boolean = false;
  public isCodeVisible: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private exerciseService: ExerciseService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.exerciseService
          .getExerciseById(params['id'])
          .subscribe((exercise) => {
            this.exercise = exercise;
            this.isCodeVisible = false;
          });
    });

  }

  openCode(): void {
    this.isCodeVisible = !this.isCodeVisible;
  }

  goBack(): void {
    this.location.back();
  }
  goNextExercise(): void {
    if (this.exercise) this.exerciseService.goToNextExercise(this.exercise);
    this.isSubmitted = false;
    this.isCorrect = false;
  }

  submitAnswer() {
    this.isSubmitted = true;
  }

  handleCorrectAnswer() {
    this.isCorrect = true;
    confetti({
      particleCount: 300,
      spread: 70,
      origin: { y: 0.6 },
    });

    this.messageService.add({
      severity: 'success',
      summary: 'Correct!',
      detail: 'Great job! Lets move to the next exercise!',
      life: 4500,
    });
  }

  closeDialog() {
    setTimeout(() => {
      this.isSubmitted = false;
    }, 4000);
  }

  handleBadAnswer() {
    this.messageService.add({
      severity: 'info',
      summary: "Don't Worry!",
      detail: "You'll get it next time!",
      life: 3000,
    });
  }
}
