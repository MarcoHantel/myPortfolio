import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public langSvc: LanguageService,
    private scrollSvc: ScrollService,

  ) { }

  isMobileMenuOpen: boolean = false;

    setLang(lang: 'de' | 'en') {
    this.langSvc.set(lang);
  }

  scrollToLocation(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#whyMe', 180);
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#contactMe', 180);
  }

  scrollToSkills(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#skills', 180);
  }

  scrollToProjects(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#myProjects', 180);
  }

  toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav-bar');
    mobileNav?.classList.toggle('active');
  }


}
