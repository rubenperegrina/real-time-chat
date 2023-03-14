import { Component, inject } from '@angular/core';
import { AuthService } from './features/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule]
})
export class AppComponent {
  title = 'real-time-chat';
  public auth = inject(AuthService);
  private router = inject(Router);

  signOut() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['signin'])
    });
  }
}
