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
      headline: 'Nathalie Dorendorf',
      project: 'Join',
      text: {
        en: 'Marco is reliable, friendly, and highly structured in his work. His code is clean and easy to understand. I fully recommend him as a colleague.',
        de: 'Marco ist zuverlässig, freundlich und sehr strukturiert in seiner Arbeit. Sein Code ist sauber und einfach zu verstehen.'
      },
      linkLabel: { en: 'LinkedIn Profile', de: 'LinkedIn Profil' },
      linkUrl: 'Linked In Profile',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    },

    {
      headline: 'Felix',
      project: 'PokeDex',
      text: {
        en: 'I haven\'t collaborated with Marco on a project, but he has helped me several times with my Pokédex work. He\'s very organized, easy to talk to, and always willing to support others. His explanations are clear, and his coding skills are strong.',
        de: 'Ich habe nicht mit Marco in einem Projekt gearbeitet, aber er hat mir bei meiner Pokédex-Arbeit geholfen. Er ist sehr organisiert und hilfsbereit. Seine Erklärungen sind klar und seine Programmierfähigkeiten sind stark.'
      },
      linkLabel: { en: 'LinkedIn Profile', de: 'LinkedIn Profil' },
      linkUrl: 'Linked In Profile',
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
      linkUrl: 'Linked In Profile',
      imageShape1: 'ellipse_ref_01.png',
      imageShape2: 'ellipse_ref_02.png'
    }
  ];
}
