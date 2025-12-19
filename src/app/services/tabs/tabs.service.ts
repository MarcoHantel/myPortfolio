// Importiert Injectable (für den DI-Container), signal (reaktiver State) und computed (reaktives Derivat)
import { Injectable, signal, computed } from '@angular/core';

// Definiert das Datenmodell eines Tabs (starke Typisierung für deine Views)
export interface TabData {
  key: 'pollo' | 'join' | 'pokedex' | 'soon'; // stabile ID, z. B. für track/Wechsel
  label: string;        // Beschriftung des Tab-Buttons
  title: string;        // Überschrift im Content
  duration: string;     // Projektdauer
  about: string;        // Abschnitt: About the project
  workProcess: string;  // Abschnitt: How I organized my work process
  learned: string;      // Abschnitt: What I have learned
  imageShape: string;   // Pfad zu einem Deko-/Hero-Bild
  techImage: string[];  // Liste von Icon-/Bildpfaden (oder Strings) zu Technologien
  github?: string;      // optionaler GitHub-Link
  livetest?: string;    // optionaler Live-Demo-Link
  projectImage: string; // Pfad zu einem Projektbild/Screenshot

}

// Service als Singleton im Root-Injector verfügbar
@Injectable({ providedIn: 'root' })
export class TabsService {

  // Reaktiver State: alle Tabs als Array. Jede Änderung an tabs() triggert abhängige computed()s/Templates.
  readonly tabs = signal<TabData[]>([
    {
      key: 'pollo',
      label: 'El Pollo Loco',
      title: 'El Pollo Loco',
      duration: 'Durattion 5 Weeks',
      about:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie…',
      workProcess:
        'Clean architecture, reusable modules/components, naming & testing focus…',
      learned:
        'Deep dive into canvas rendering, collision systems, asset pipelines…',
      imageShape: 'assets/img/shapes/ellipse 8.png', // ⚠️ Leerzeichen im Dateinamen sind möglich, aber fehleranfällig
      techImage: [
        'assets/img/icons/proj_html.png',
        'assets/img/icons/proj_css.png',
        'assets/img/icons/proj_javascript.png'
      ],
      projectImage: 'assets/img/projects/ellpolloloco.png',
      github: 'https://github.com/MarcoHantel/El-Pollo-Loco',
      livetest: 'https://marco-hantel.developerakademie.net/EL_POLLO_LOCO/index.html'
    },
    {
      key: 'join',
      label: 'Join',
      title: 'Join Project',
      duration: 'Durattion 5 Weeks',
      about: 'Task manager inspired by Kanban to organize your projects in a simple way',
      workProcess: 'Services, DI, state handling, routing…',
      learned: 'Forms, validation, accessibility…',
      imageShape: 'assets/img/shapes/ellipse 8.png',
      techImage: ['assets/img/icons/proj_html.png',
                  'assets/img/icons/proj_css.png',
                  'assets/img/icons/proj_firebase.png'], // geht, wenn du nur Texte anzeigen willst
      projectImage: 'assets/img/projects/join.png',
      github: 'https://github.com/MarcoHantel/Join-App',
      livetest: 'https://marco-hantel.developerakademie.net/Join-406/index.html'
    },
    {
      key: 'pokedex',
      label: 'Pokedex',
      title: 'Pokedex App',
      duration: 'Durattion 5 Weeks',
      about: 'getting data from a public API and displaying it in an user-friendly way',
      workProcess: 'Services, DI, state handling, routing lorem kjgfh laksh dlashd aoisdhlahdahsd…',
      learned: 'connecting to APIs, async data handling…aisdhgkjahsd asjhd kashd akd',
      imageShape: 'assets/img/shapes/ellipse 8.png',
      techImage: ['assets/img/icons/proj_html.png',
                  'assets/img/icons/proj_css.png',
                  'assets/img/icons/proj_restAPI.png'],
      projectImage: 'assets/img/projects/pokedex.png',
      github: 'https://github.com/…',
      livetest: 'https://marco-hantel.developerakademie.net/modul09-PokeDex/index.html'
    },
    {
      key: 'soon',
      label: 'Soon Project',
      title: 'Soon Project',
      duration: 'Durattion 5 Weeks',
      about: 'Task manager inspired by Kanban…',
      workProcess: 'Services, DI, state handling, routing…',
      learned: 'Forms, validation, accessibility…',
      imageShape: 'assets/img/shapes/ellipse 8.png',
      techImage: ['Angular', 'SCSS', 'Signals'],
      projectImage: '',
      github: 'https://github.com/…',
      livetest: 'https://test.com/...'
    },
  ]);

  // Reaktiver State: welcher Tab ist aktiv (Start mit 'pollo')
  readonly activeKey = signal<TabData['key']>('pollo');
  readonly activeIndex = signal<number>(0);


  // Aktion: aktiven Tab wechseln (wird z. B. beim Button-Klick aufgerufen)
  setActive(key: TabData['key'], index: number) {
    this.activeKey.set(key);
    this.activeIndex.set(index);
  }

  // REAKTIVES DERIVAT: aktiver Tab-Datensatz
  // computed() wird automatisch neu berechnet, wenn tabs() ODER activeKey() sich ändern.
  // Templates, die active() lesen, werden dadurch zuverlässig aktualisiert.
  readonly active = computed(() =>
    this.tabs().find(t => t.key === this.activeKey())
  );

  // (Optionaler) Helper für Abwärtskompatibilität: gibt einfach das computed zurück
  // So kannst du in bestehendem Code weiterhin tabsSvc.activeData() schreiben.
  activeData(): TabData | undefined {
    return this.active();
  }
}


