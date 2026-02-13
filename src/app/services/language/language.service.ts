// 
import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../../translation/translation';

export type Language = 'de' | 'en';

const STORAGE_KEY = 'mh_lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  t = TRANSLATIONS;

  private readonly _lang = signal<Language>(this.loadInitialLang());
  lang = this._lang.asReadonly();

  toggle() {
    this.set(this._lang() === 'en' ? 'de' : 'en');
  }

  set(lang: Language) {
    this._lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang); // ✅ speichern
  }

  is(lang: Language) {
    return this._lang() === lang;
  }

  private loadInitialLang(): Language {
    // 1) gespeicherte Sprache
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'de' || saved === 'en') return saved;

    // 2) Fallback: Browser-Sprache
    const browser = navigator.language?.toLowerCase() ?? '';
    return browser.startsWith('de') ? 'de' : 'en';
  }
}
