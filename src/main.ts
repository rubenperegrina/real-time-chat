import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/app-routing';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: 'outline'},
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase))
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideAnimations()
  ]
}).catch(err => console.error(err));
