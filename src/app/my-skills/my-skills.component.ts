import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillsImg = ['angular.png', 'type_script.png', 'java_script.png', 'html.png',
    'css.png', 'rest_api.png', 'firebase.png', 'git.png', 'material_design.png', 'scrum.png'];

}
