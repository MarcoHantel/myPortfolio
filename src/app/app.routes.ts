import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LegalNoticeComponent } from './legal-notice/legalnotice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
