import { provideRouter, RouterConfig } from '@angular/router';
import { NativeListComponent } from './ts/components/lists/native-list.component';
import { ArtListComponent } from './ts/components/lists/art.list.component';
import { SetsListComponent } from './ts/components/lists/sets-list.component';
import { SilhouettesListComponent } from './ts/components/lists/silhouettes-list.component';
import { PostlistComponent } from './ts/components/postlist.component';
import { PostDetailsComponent } from './ts/components/post.details.component';
import { SearchComponent } from './ts/components/search.component';
import { SocialAuthorizationComponent } from './ts/components/core/soical.authorization.component';
import { LoginComponent } from './ts/components/core/login.component';
import {UserDashboardComponent} from './ts/components/user/user.dashboard.component'
import {InfoPage} from './ts/components/pages/info.page.component'




// Route Configuration
export const routes = [
    {
        path: '',
        component: PostlistComponent
    },
    { path: '', component: PostlistComponent},
    { path: '#', component: PostlistComponent},
    { path: 'native', component: NativeListComponent },
    { path: 'art', component: ArtListComponent },
    { path: 'art/:page', component: ArtListComponent },
    { path: 'native/:page', component: NativeListComponent },
    { path: 'sets', component: SetsListComponent },
    { path: 'sets/:page', component: SetsListComponent },
    { path: 'silhouettes', component: SilhouettesListComponent },
    { path: 'silhouettes/:page', component: SilhouettesListComponent },
    {path: 'post/:id', component: PostDetailsComponent},
    {path: 'search/:query', component: SearchComponent },
    {path: 'search', component: SearchComponent },
    {path: 'auth/:from/', component: SocialAuthorizationComponent },
    {path: 'login', component: LoginComponent },
    {path: 'dashboard', component: UserDashboardComponent },

    {path: 'info/:type', component: InfoPage }
];
// Export routes
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];