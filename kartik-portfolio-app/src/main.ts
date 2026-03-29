import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({ mode: isDevMode() ? 'development' : 'production' });

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
