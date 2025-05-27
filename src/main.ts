import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

// EINFACHE ROUTES FÜR TEST
const routes = [
  { path: '', component: () => import('./app/pages/home/home.component').then(m => m.HomeComponent) },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
