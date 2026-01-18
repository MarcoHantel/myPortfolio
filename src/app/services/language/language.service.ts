import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../../translation/translation';

export type Language = 'de' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {

    t = TRANSLATIONS;

  private readonly _lang = signal<Language>('en');

  lang = this._lang.asReadonly();

  toggle() {
    this._lang.set(this._lang() === 'en' ? 'de' : 'en');
  }

  set(lang: Language) {
    this._lang.set(lang);
  }

  is(lang: Language) {
    return this._lang() === lang;
  }
}
