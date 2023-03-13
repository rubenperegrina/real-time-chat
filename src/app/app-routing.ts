import { Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: 'signin',
    title: 'Sign in',
    loadComponent: () =>
      import('../app/features/auth/sign-in/sign-in.component').then((c) => c.SignInComponent),
    ...canActivate(() => redirectLoggedInTo(['chat']))
  },
  {
    path: 'signup',
    title: 'Sign up',
    loadComponent: () =>
      import('../app/features/auth/sign-up/sign-up.component').then((c) => c.SignUpComponent),
      ...canActivate(() => redirectLoggedInTo(['chat']))
  },
  {
    path: 'chat',
    title: 'Chat',
    loadComponent: () =>
      import('../app/features/chat/chat-page/chat-page.component').then((c) => c.ChatPageComponent),
      ...canActivate(() => redirectUnauthorizedTo(['signin']))
  },
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  }
];