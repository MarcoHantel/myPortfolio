import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { ScrollService } from '../../services/scroll/scroll.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public langSvc: LanguageService,
    private scrollSvc: ScrollService,

  ) { }

  isMobileMenuOpen = false;

  setLang(lang: 'de' | 'en') {
    this.langSvc.set(lang);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    const mobileNav = document.querySelector('.mobile-nav-bar');
    mobileNav?.classList.toggle('active', this.isMobileMenuOpen);

    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }
}
