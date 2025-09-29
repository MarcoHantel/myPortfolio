import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss', 
})
export class LandingPageComponent {
hovered = false;
hoveredLogo = false;

}

