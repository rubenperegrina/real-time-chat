import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FormContainerComponent } from '../form-container/form-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormContainerComponent, MatFormFieldModule, MatSnackBarModule],
})
export class SignInComponent {
  form!: FormGroup;

  private auth = inject(AuthService);
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    })
  }

  signIn() {
    this.auth.signIn(this.form.value).subscribe({
      next: () => this.router.navigate(['chat']),
      error: (error) => this.snackbar.open(error.message)
    });
  }
}
