import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'imprint', component: ImprintComponent },
//   { path: '**', redirectTo: '' }
];
