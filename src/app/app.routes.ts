import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { RatingComponent } from './engagement/pages/rating/rating.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'engagement/ratings/new', component: RatingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }  // Esta es la ruta para "Page Not Found"
];
