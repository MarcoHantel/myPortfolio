import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoverServiceService {
  
  /**
   * Hier speichern wir für beliebige "Keys" (z.B. 'my-skills-shape', 'contact-mail')
   * ob sie gerade gehovt werden (true/false).
   */
  private hoverStates = new Map<string, boolean>();

  /**
   * Setzt den Hover-Status für einen bestimmten Key.
   * Beispiel-Aufruf: setHover('my-skills-shape', true)
   */
  setHover(key: string, isHovered: boolean): void {
    this.hoverStates.set(key, isHovered);
  }

  /**
   * Liefert den Hover-Status für einen Key zurück.
   * Wenn nichts gesetzt ist → false.
   */
  getHover(key: string): boolean {
    return this.hoverStates.get(key) ?? false;
  }


}
