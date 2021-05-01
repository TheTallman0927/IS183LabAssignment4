import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {},
        data: {
           name: 'Home' 
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            name: 'About' 
         }
    },
    {
        path:'artist',
        component: ArtistComponent,
        data: {
            name: 'Artist' 
         }
    },
    {
        path:'artworks',
        component: ArtworksComponent,
        data: {
            name: 'Art works' 
         }
    },
    
];
  
export const routerModule = RouterModule.forRoot(routes);