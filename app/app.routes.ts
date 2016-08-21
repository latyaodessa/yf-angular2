import { provideRouter, RouterConfig } from '@angular/router';
import { NativeListComponent } from './ts/components/lists/native-list.component';
import { SetsListComponent } from './ts/components/lists/sets-list.component';
import { PostlistComponent } from './ts/components/postlist.component';
import { PostDetailsComponent } from './ts/components/post.details.component';

// Route Configuration
export const routes: RouterConfig = [
    {
        path: '',
        component: PostlistComponent
    },
    { path: '', component: PostlistComponent },
    { path: 'native', component: NativeListComponent },
    { path: 'sets', component: SetsListComponent },
    {path: 'yf-post/:id', component: PostDetailsComponent }
];
// Export routes
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];