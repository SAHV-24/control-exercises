import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Exercise } from '../shared/interfaces/Exercise.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  public exercises: BehaviorSubject<Exercise[]> = new BehaviorSubject<
    Exercise[]
  >([]);
  public $exercises = this.exercises.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  public getExercises(): void {
    this.http
      .get<Exercise[]>(environment.BASE_URL + '/exercises')
      .subscribe((exercises: Exercise[]) => {
        this.exercises.next(exercises);
      });
  }

  public getExerciseById(id: string): Observable<Exercise> {
    return this.http.get<Exercise>(environment.BASE_URL + `/exercises/${id}`);
  }

  public goToNextExercise(exercise: Exercise): void {
    if (this.exercises.value.length === 0) {
      this.getExercises();
    }

    const exerciseIndex = this.exercises.value.findIndex(
      (ex) => ex._id === exercise._id
    );

    if (exerciseIndex === this.exercises.value.length - 1) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigate([
        '/exercises',
        this.exercises.value[exerciseIndex + 1]._id,
      ]);
    }
  }
}
