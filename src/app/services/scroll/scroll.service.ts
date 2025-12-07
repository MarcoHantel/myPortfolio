// src/app/services/scroll/scroll.service.ts
import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Injectable({ providedIn: 'root' })
export class ScrollService {

  scrollToWithBounce(target: string | number, offsetY = 180) {
    const tl = gsap.timeline();

    const targetY =
      typeof target === 'number'
        ? target
        : this.resolveTargetY(target, offsetY);

    tl.to(window, {
      scrollTo: targetY,
      duration: 0.8,
      ease: 'power2.out',
    });

    tl.to(window, {
      scrollTo: targetY + 35,
      duration: 0.25,
      ease: 'power1.out',
    });

    tl.to(window, {
      scrollTo: targetY,
      duration: 0.45,
      ease: 'power2.out',
    });
  }

  private resolveTargetY(selector: string, offsetY: number): number {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop - offsetY;
  }
}
