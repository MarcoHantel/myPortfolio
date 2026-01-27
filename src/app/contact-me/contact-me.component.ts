import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../services/scroll/scroll.service';
import { HoverServiceService } from '../services/hover/hover.service.service';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  hoveredPrivacyPolicy: boolean = false;
  confirmPrivacyPolicy: boolean = false;

  mailHoverKey = 'contact-mail-icon';
  phoneHoverKey = 'contact-phone-icon';
  arrowHoverKey = 'contact-arrow-icon';


  constructor(
    public scrollSvc: ScrollService,
    public hoverSvc: HoverServiceService,
    public langSvc: LanguageService,
  ) { }

  scrollToTop(event: Event) {
    event.preventDefault();
    this.scrollSvc.scrollToWithBounce('#top', 180);
  }

  togglePrivacy() {
    this.confirmPrivacyPolicy = !this.confirmPrivacyPolicy;
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }

  }


}
