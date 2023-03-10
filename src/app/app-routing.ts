import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signin',
    title: 'Sign in',
    loadComponent: () =>
      import('../app/features/auth/sign-in/sign-in.component').then((c) => c.SignInComponent)
  },
  {
    path: 'signup',
    title: 'Sign up',
    loadComponent: () =>
      import('../app/features/auth/sign-up/sign-up.component').then((c) => c.SignUpComponent)
  },
  {
    path: 'chat',
    title: 'Chat',
    loadComponent: () =>
      import('../app/features/chat/chat-page/chat-page.component').then((c) => c.ChatPageComponent)
  },
];