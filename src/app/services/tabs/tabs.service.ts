// Importiert Injectable (für den DI-Container), signal (reaktiver State) und computed (reaktives Derivat)
import { Injectable, signal, computed } from '@angular/core';
import type { Language } from '../language/language.service';


// Definiert das Datenmodell eines Tabs (starke Typisierung für deine Views)
export interface TabData {
  key: 'pollo' | 'join' | 'pokedex' | 'soon'; // stabile ID, z. B. für track/Wechsel
  label: string;        // Beschriftung des Tab-Buttons
  title: string;        // Überschrift im Content
  duration: string;     // Projektdauer
  about: Record<Language, string>;        // Abschnitt: About the project
  workProcess: Record<Language, string>;  // Abschnitt: How I organized my work process
  learned: Record<Language, string>;      // Abschnitt: What I have learned
  imageShape: string;   // Pfad zu einem Deko-/Hero-Bild
  techImage: string[];  // Liste von Icon-/Bildpfaden (oder Strings) zu Technologien
  github?: string;      // optionaler GitHub-Link
  livetest?: string;    // optionaler Live-Demo-Link
  projectImage: string; // Pfad zu einem Projektbild/Screenshot
  technology: string; // Technologien als String
  mobileLabel: string; // Beschriftung des Tab-Buttons für Mobile
}

// Service als Singleton im Root-Injector verfügbar
@Injectable({ providedIn: 'root' })
export class TabsService {

  // Reaktiver State: alle Tabs als Array. Jede Änderung an tabs() triggert abhängige computed()s/Templates.
  readonly tabs = signal<TabData[]>([
    {
      key: 'pollo',
      label: 'El Pollo Loco',
      mobileLabel:'Project',
      title: 'El Pollo Loco',
      duration: 'Durattion 5 Weeks',
      about: {
        en: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie…',
        de: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie…'},
      workProcess: {
        en: 'Clean architecture, reusable modules/components, naming & testing focus…',
        de: 'Reinigung der Architektur, wiederverwendbare Module/Komponenten, Benennung & Tests…'
      },
      learned: {
        en: 'Deep dive into canvas rendering, collision systems, asset pipelines…',
        de: 'Tiefgang in die Canvas-Darstellung, Kollisionsysteme und Asset-Pipelines…'
      },
      imageShape: 'assets/img/shapes/ellipse 8.png', // ⚠️ Leerzeichen im Dateinamen sind möglich, aber fehleranfällig
      technology: 'HTML, CSS, JavaScript',
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
      mobileLabel:'Project',
      title: 'Join Project',
      duration: 'Durattion 5 Weeks',
      about: {
        en: 'Task manager inspired by Kanban to organize your projects in a simple way',
        de: 'Aufgabenmanager inspiriert von Kanban, um deine Projekte auf einfache Weise zu organisieren'
      },
      workProcess: {
        en: 'Services, DI, state handling, routing…',
        de: 'Services, DI, Zustandsverwaltung, Routing…'
      },
      learned: {
        en: 'Forms, validation, accessibility…',
        de: 'Formulare, Validierung, Barrierefreiheit…'
      },
      imageShape: 'assets/img/shapes/ellipse 8.png',
      technology: 'HTML, CSS, Firebase',
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
      mobileLabel:'Project',
      title: 'Pokedex App',
      duration: 'Durattion 5 Weeks',
      about: {
        en: 'getting data from a public API and displaying it in an user-friendly way',
        de: 'Daten von einer öffentlichen API abrufen und in einer benutzerfreundlichen Art anzeigen'
      },
      workProcess: {
        en: 'Services, DI, state handling, routing ',
        de: 'Services, DI, Zustandsverwaltung, Routing'
      },
      learned: {
        en: 'connecting to APIs, async data handling…aisdhgkjahsd asjhd kashd akd',
        de: 'Verbindung zu APIs herstellen, asynchrone Datenverarbeitung…aisdhgkjahsd asjhd kashd akd'
      },
      imageShape: 'assets/img/shapes/ellipse 8.png',
      technology: 'HTML, CSS, restAPI',
      techImage: ['assets/img/icons/proj_html.png',
        'assets/img/icons/proj_css.png',
        'assets/img/icons/proj_restAPI.png'],
      projectImage: 'assets/img/projects/pokedex.png',
      github: 'https://github.com/MarcoHantel/PokeDex',
      livetest: 'https://marco-hantel.developerakademie.net/modul09-PokeDex/index.html'
    },
    {
      key: 'soon',
      label: 'Aesparel',
      title: 'Aesparel',
      mobileLabel:'Project',
      duration: 'on going',
      about: {
        en: 'This is my own fashion brand which I founded with friends. I handle the CMS and do the designs',
        de: 'Das ist mein eigenes Modebrand was ich mit freunden gegründet habe. Ich bereue das CMS und mache die Designs'
      },
      workProcess: {
        en: 'Shopify, Illustrator, Photoshop',
        de: 'Shopify, Illustrator, Photoshop'
      },
      learned: {
        en: 'validation, APIs, accessibility, SEO optimization',
        de: 'Validierung, APIs, Barrierefreiheit, SEO optimierung '
      },
      imageShape: 'assets/img/shapes/ellipse 8.png',
      technology: 'Shopify, Photoshop, Illustrator',
      techImage: ['assets/img/icons/proj_shopify.png', 'assets/img/icons/proj_photoshop.png', 'assets/img/icons/proj_illustrator.png'],
      projectImage: 'assets/img/projects/aesparel.png',
      github: 'https://github.com/',
      livetest: 'https://aesparel.com/'
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


