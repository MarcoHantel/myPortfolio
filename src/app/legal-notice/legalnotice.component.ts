import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss'
})
export class LegalNoticeComponent {

  constructor(public langSvc: LanguageService) { }

}
