import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-bar',
  imports: [MenubarModule, CommonModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {
  items: MenuItem[] = [];
  logo: boolean = true; // Establece en false si no quieres mostrar logo

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',  
      },
      {
        label: 'Exercises',
        icon: 'pi pi-star',
        routerLink: '/exercises',
      },
    ];
  }
}
