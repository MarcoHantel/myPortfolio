import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgStyle, NgClass, RouterLink ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  hoveredSocialMail = false;
  hoveredSocialGit = false;
  hoveredSocialLin = false;

}
