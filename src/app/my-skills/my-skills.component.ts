
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverServiceService } from '../services/hover/hover.service.service';

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
    'angular.png',
    'type_script.png',
    'java_script.png',
    'html.png',
    'css.png',
    'rest_api.png',
    'firebase.png',
    'git.png',
    'material_design.png',
    'scrum.png'
  ];

  constructor(public hoverSvc: HoverServiceService) {}

  /**
   * Helfer-Methode für das Template:
   * Fragt den aktuellen Hover-Status für das Shape ab.
   */
   isShapeHovered(): boolean {
    return this.hoverSvc.getHover(this.shapeHoverKey);
  }
}
