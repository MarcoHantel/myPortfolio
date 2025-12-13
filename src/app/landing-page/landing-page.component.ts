import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { ScrollService } from '../services/scroll/scroll.service';
import { HoverServiceService } from '../services/hover/hover.service.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {

  hoveredLogo = false;
  hoveredSocialMail = false;
  hoveredSocialGit = false;
  hoveredSocialLin = false;

  shapeHoverKey = 'shape-landing-page';
  arrowHoverKey = 'arrow-landing-page';

  constructor(
    private scrollSvc: ScrollService,
    public hoverSvc: HoverServiceService
  ) { }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#contactMe', 180);
  }
}
