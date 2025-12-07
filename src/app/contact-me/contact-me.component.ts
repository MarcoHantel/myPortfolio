import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

  hoveredPhone: boolean = false;
  hoveredMail: boolean = false;


  togglePrivacy() {
    this.confirmPrivacyPolicy = !this.confirmPrivacyPolicy;
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }

  }
// hier muss ich dann die library noch einbinden oder?

  //   scrollToTopWithBounce(event: Event) {
  //   event.preventDefault();
  //   gsap.to(window, {
  //     duration: 1,
  //     scrollTo: { y: 0 },
  //     ease: 'bounce.out'
  //   });
  // }

}
