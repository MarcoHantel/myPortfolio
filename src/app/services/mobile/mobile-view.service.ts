import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileViewService {
  // true wenn <= 768px
  readonly isMobile = signal<boolean>(window.innerWidth <= 768);

  constructor() {
    // globaler Resize Listener
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth <= 768);
    });
  }
}
