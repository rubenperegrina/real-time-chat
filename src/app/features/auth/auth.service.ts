import { inject, Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { BehaviorSubject, from, switchMap } from 'rxjs';
import { SignInCredentials, SignUpCredentials } from './interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState = new BehaviorSubject<Object | null>(null);
  readonly isLoggedIn$ = authState(this.auth);

  constructor(private auth: Auth) { }

  signIn({ email, password }: SignInCredentials) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp({ email, password, displayName }: SignUpCredentials) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName }))
    )
  }

  signOut() {
    return from(this.auth.signOut());
  }
}