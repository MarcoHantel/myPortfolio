import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../services/scroll/scroll.service';
import { HoverServiceService } from '../services/hover/hover.service.service';
import { LanguageService } from '../services/language/language.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  hoveredPrivacyPolicy: boolean = false;
  confirmPrivacyPolicy: boolean = false;
  mailSent: boolean = false;

  mailHoverKey = 'contact-mail-icon';
  phoneHoverKey = 'contact-phone-icon';
  arrowHoverKey = 'contact-arrow-icon';


  constructor(
    public scrollSvc: ScrollService,
    public hoverSvc: HoverServiceService,
    public langSvc: LanguageService,
  ) { }

  togglePrivacy() {
    this.confirmPrivacyPolicy = !this.confirmPrivacyPolicy;
  }

onSubmit(ngForm: NgForm) {
  this.mailSent = false;

  if (ngForm.invalid || !this.confirmPrivacyPolicy) {
    ngForm.control.markAllAsTouched();
    return;
  }

  this.mailSent = true;

  const formData = { ...this.contactData };

  this.contactData = {
    name: '',
    email: '',
    message: ''
  };

  this.confirmPrivacyPolicy = false;
  ngForm.resetForm();

  this.http.post('/sendMail.php', formData, {
    headers: { 'Content-Type': 'application/json' }
  }).subscribe();
}
}
