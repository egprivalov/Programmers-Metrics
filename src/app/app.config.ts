import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { GITLAB_API_URL } from './core/tokens/gitlab-api-url.token';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(),
        provideRouter(routes),
        { provide: GITLAB_API_URL, useValue: 'https://gitlab.com/api/v4' }
    ]
};
