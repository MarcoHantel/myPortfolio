import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LandingPageComponent,
    NavbarComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    TeamplayerComponent,
    ContactMeComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
