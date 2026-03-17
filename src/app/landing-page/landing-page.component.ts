import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle, NgClass } from '@angular/common';
import { HoverServiceService } from '../services/hover/hover.service.service';
import { MobileViewService } from '../services/mobile/mobile-view.service';
import { LanguageService } from '../services/language/language.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgStyle, NgClass, RouterLink, RouterModule],
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
    public hoverSvc: HoverServiceService,
    public bp: MobileViewService,
    public langSvc: LanguageService 
  ) { }

hoveredShape = false;

onShapeEnter() {
  if (this.bp.isMobile()) return;   // im Mobile keine Reaktion
  this.hoveredShape = true;
}

onShapeLeave() {
  if (this.bp.isMobile()) return;
  this.hoveredShape = false;
}

  shapeImages = [
    'assets/img/shapes/BG_shape_2.png', 'assets/img/shapes/BG_shape_1.png'
  ];

}
