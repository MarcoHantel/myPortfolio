// Importiert Injectable, um einen Service bereitzustellen, und signal für reaktiven State (Angular Signals)
import { Injectable, signal } from '@angular/core';

// Das Datenmodell für einen Tab: so sehen die Inhalte aus, die deine View rendert
export interface TabData {
  key: 'pollo' | 'join' | 'pokedex' | 'soon'; // stabile ID/Key je Tab (für Track & State)
  label: string;        // Label, das im Tab-Button steht
  title: string;        // z. B. Überschrift im Content
  about: string;        // Abschnitt "About the project"
  workProcess: string;  // Abschnitt "How I organized my work process"
  learned: string;      // Abschnitt "What I have learned"
  imageHero: string;    // Pfad zu einem Bild
  tech: string[];       // Liste verwendeter Technologien
  github?: string;      // optionaler Link
}

// @Injectable macht den Service injizierbar; providedIn: 'root' = App-weit als Singleton verfügbar
@Injectable({ providedIn: 'root' })
export class TabsService {
  // Signal mit allen Tabs (Array). Signals sind reaktiv: wenn sich der Wert ändert, reagiert das Template.
  readonly tabs = signal<TabData[]>([
    {
      key: 'pollo',
      label: 'el pollo loco',
      title: 'El Pollo Loco',
      about:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie…',
      workProcess:
        'Clean architecture, reusable modules/components, naming & testing focus…',
      learned:
        'Deep dive into canvas rendering, collision systems, asset pipelines…',
      imageHero: 'assets/images/el-pollo-loco.png',
      tech: ['HTML5', 'SCSS', 'TypeScript'],
      github: 'https://github.com/…'
    },
    {
      key: 'join',
      label: 'Join',
      title: 'Join Project',
      about: 'Task manager inspired by Kanban…',
      workProcess: 'Services, DI, state handling, routing…',
      learned: 'Forms, validation, accessibility…',
      imageHero: 'assets/images/join.png',
      tech: ['HTML', 'CSS', 'Google Firebase']
    },
        {
      key: 'pokedex',
      label: 'Pokedex',
      title: 'Pokedex App',
      about: 'getting data from a public API and displaying it…',
      workProcess: 'Services, DI, state handling, routing…',
      learned: 'connecting to APIs, async data handling…',
      imageHero: 'assets/images/pokedex.png',
      tech: ['HTML', 'CSS']
    },
        {
      key: 'soon',
      label: 'soon',
      title: 'soon Project',
      about: 'Task manager inspired by Kanban…',
      workProcess: 'Services, DI, state handling, routing…',
      learned: 'Forms, validation, accessibility…',
      imageHero: 'assets/images/join.png',
      tech: ['Angular', 'SCSS', 'Signals']
    },
  ]);

  // Aktiver Tab als Signal (startet mit 'pollo')
  readonly activeKey = signal<TabData['key']>('pollo');

  // Setter-Funktion, um den aktiven Tab zu wechseln (wird aus dem Template aufgerufen)
  setActive(key: TabData['key']) { 
    this.activeKey.set(key);
  }

  // Helper: gibt die aktuellen Daten des aktiven Tabs zurück (oder undefined, falls nicht gefunden)
  activeData(): TabData | undefined {
    return this.tabs().find(t => t.key === this.activeKey());
  }
}

