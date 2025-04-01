import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { routes } from './app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

/*
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};*/
export const appConfig = {
  providers: [
    provideRouter(routes, withHashLocation()) // Enables hash-based routing
  ]
};