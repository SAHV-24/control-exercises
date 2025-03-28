import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from './shared/bar/bar.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarComponent],
  providers: [MessageService],
  schemas: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
