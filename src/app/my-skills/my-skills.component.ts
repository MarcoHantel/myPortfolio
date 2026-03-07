
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverServiceService } from '../services/hover/hover.service.service';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  // Key, unter dem wir den Hover-State im Service speichern
  readonly shapeHoverKey = 'my-skills-shape';

  skillsImg = [
    'angular_skill_Icons.svg',
    'typescript_skill_Icons.svg',
    'javascript_skill_Icons.svg',
    'html_skill_Icons.svg',
    'css_skill_Icons.svg',
    'restapi_skill_Icons.svg',
    'git_skill_Icons.svg',
    'scrum_skill_Icons.svg',
    'materiald_skill_Icons.svg'
  ];

  skillsText =[
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'REST API',
    'Git',
    'Scrum',
    'Material Design'
  ]

  constructor(
    public hoverSvc: HoverServiceService,
    public langSvc: LanguageService) { }

  /**
   * Helfer-Methode für das Template:
   * Fragt den aktuellen Hover-Status für das Shape ab.
   */
  isShapeHovered(): boolean {
    return this.hoverSvc.getHover(this.shapeHoverKey);
  }
}
