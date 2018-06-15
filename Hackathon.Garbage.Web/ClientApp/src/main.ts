import 'hammerjs';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
export function getBaseUrl() {
  return "http://localhost:60464";
  
}
const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
