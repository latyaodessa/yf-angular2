import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent }   from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { XHRBackend } from '@angular/http';
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';




bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}])
    .catch(err => console.error(err));


