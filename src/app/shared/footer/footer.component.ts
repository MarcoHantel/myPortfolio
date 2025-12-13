import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  hoveredSocialMail = false;
  hoveredSocialGit = false;
  hoveredSocialLin = false;

}
