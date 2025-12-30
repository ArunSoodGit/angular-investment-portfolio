import {ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryPortfoliosService} from './core/services/api/in-memory-portfolios.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(
      InMemoryPortfoliosService, {
        delay: 100,
        dataEncapsulation: false
      })),
  ]
};
