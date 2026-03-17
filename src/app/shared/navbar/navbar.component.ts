// import { Component } from '@angular/core';
// import { LanguageService } from '../../services/language/language.service';
// // import { ScrollService } from '../../services/scroll/scroll.service';
// import { RouterLink } from "@angular/router";

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss'],
// })
// export class NavbarComponent {
//   constructor(
//     public langSvc: LanguageService,
//     // private scrollSvc: ScrollService,

//   ) { }

//   isMobileMenuOpen = false;

//   setLang(lang: 'de' | 'en') {
//     this.langSvc.set(lang);
//   }

//   toggleMobileMenu() {
//     this.isMobileMenuOpen = !this.isMobileMenuOpen;

//     const mobileNav = document.querySelector('.mobile-nav-bar');
//     mobileNav?.classList.toggle('active', this.isMobileMenuOpen);

//     document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
//   }
// }
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
   imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public langSvc: LanguageService,
    private router: Router
  ) {}

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

  async scrollToSection(event: Event, sectionId: string) {
  event.preventDefault();

  if (this.isMobileMenuOpen) {
    this.toggleMobileMenu();
  }

  await this.router.navigate(['/']);

  requestAnimationFrame(() => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 130;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  });
}
}
