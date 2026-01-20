// my-projects.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsService } from '../services/tabs/tabs.service';
import { TabContentComponent } from './tab-content/tab-content.component';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, TabContentComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})


export class MyProjectsComponent {
  tabsSvc = inject(TabsService);
  langSvc = inject(LanguageService);

}



