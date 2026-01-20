// tab-content.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importiert das Typ-Interface für starke Typisierung des Inputs
import type { TabData } from '../../services/tabs/tabs.service';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent {
  // Der Parent übergibt hier die Daten des aktuell aktiven Tabs hinein
  @Input({ required: true }) data!: TabData;

  constructor(
    public langSvc: LanguageService
  ) { }
}




