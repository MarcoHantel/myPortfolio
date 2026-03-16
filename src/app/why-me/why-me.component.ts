import { Component } from '@angular/core';
// import { ScrollService } from '../services/scroll/scroll.service';
import { LanguageService } from '../services/language/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  constructor(
    // private scrollSvc: ScrollService,
    public langSvc: LanguageService
  ) { }

}
