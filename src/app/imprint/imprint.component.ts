import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public langSvc: LanguageService) { }

}
