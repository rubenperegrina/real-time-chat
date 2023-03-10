import { Component } from '@angular/core';
import { AuthService } from './features/auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule]
})
export class AppComponent {
  title = 'real-time-chat';
  constructor(public auth: AuthService) {}
}
