import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileViewService } from '../services/mobile/mobile-view.service';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LanguageService } from '../services/language/language.service';

type Lang = 'de' | 'en';

interface TeamItem {
  headline: string;
  project: string;
  text: Record<Lang, string>;
  linkLabel: Record<Lang, string>;
  linkUrl: string;
  imageShape1: string;
  imageShape2: string;
}

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teamplayer.component.html',
  styleUrls: ['./teamplayer.component.scss'],
})

export class TeamplayerComponent {
  hoverIndex: number | null = null;

  constructor(
    public bp: MobileViewService,
    public langSvc: LanguageService) { }

  onHoverEnter(i: number) {
    if (this.bp.isMobile()) return;   // ✅ im Mobile deaktiviert
    this.hoverIndex = i;
  }

  onHoverLeave() {
    if (this.bp.isMobile()) return;
    this.hoverIndex = null;
  }

  teamData: TeamItem[] = [
    {
      headline: 'Nathalie',
      project: 'Join',
      text: {
        en: 'Marco is reliable, friendly, and highly structured in his work. His code is clean and easy to understand. I fully recommend him as a colleague.',
        de: 'Marco ist zuverlässig, freundlich und sehr strukturiert in seiner Arbeit. Sein Code ist sauber und einfach zu verstehen.'
      },
      linkLabel: { en: 'LinkedIn Profile', de: 'LinkedIn Profil' },
      linkUrl: 'https://www.linkedin.com/in/nathalie-d-721069186/',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    },

    {
      headline: 'Felix',
      project: 'Join',
      text: {
        en: 'I did work with Marco on the Join project. He is very organized and helpful. His explanations are clear, and his programming skills are strong.',
        de: 'Ich habe mit Marco im Projekt Join zusammengearbeitet. Er ist sehr organisiert und hilfsbereit. Seine Erklärungen sind klar und seine Programmierfähigkeiten sind stark.'
      },
      linkLabel: { en: 'LinkedIn Profile', de: 'LinkedIn Profil' },
      linkUrl: '',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    },

    {
      headline: 'Simeon',
      project: 'Join',
      text: {
        en: 'Marco is a very organized and team-minded person who contributes positively to any group dynamic. He combines strong interpersonal skills with the ability to write clear, reliable, and maintainable code.',
        de: 'Marco ist eine sehr strukturierte und teamorientierte Person. Er verbindet starke personelle Fähigkeiten mit der Fähigkeit, klaren, zuverlässigen und einfachen lesbaren Code zu schreiben.'
      },
      linkLabel: { en: 'LinkedIn Profile', de: 'LinkedIn Profil' },
      linkUrl: '',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    }
  ];
}
