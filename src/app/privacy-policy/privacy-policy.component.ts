import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {


  constructor(public langSvc: LanguageService) { }
}
