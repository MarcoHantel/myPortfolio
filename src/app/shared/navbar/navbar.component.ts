import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public langSvc: LanguageService) {}

  scrollToSection(event: Event, targetId: string) {
  event.preventDefault();

  const target = document.querySelector(targetId) as HTMLElement;
  if (!target) return;

  const offset = 180;
  const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

  const tl = gsap.timeline();

// 1. Normales smooth scrollen
tl.to(window, {
  scrollTo: targetY,
  duration: 0.7,
  ease: "power2.out",
});

// 2. Kleine, weiche Überbewegung
tl.to(window, {
  scrollTo: targetY + 20,  // deutlich softerer Overshoot
  duration: 0.25,          // langsamer → smoother Gefühl
  ease: "power1.out",
});

// 3. Weiches Zurückfedern
tl.to(window, {
  scrollTo: targetY,
  duration: 0.55,           // länger → weicher
  ease: "back.out(1.8)",    // DIE perfekte weiche Bounce-Kurve
});

}

}
