import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  constructor(
    private scrollSvc: ScrollService
  ) { }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#contactMe', 180);
  }
}
