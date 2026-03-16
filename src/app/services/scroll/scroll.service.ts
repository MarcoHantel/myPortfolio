// // src/app/services/scroll/scroll.service.ts
// import { Injectable } from '@angular/core';
// import gsap from 'gsap';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollToPlugin);

// @Injectable({ providedIn: 'root' })
// export class ScrollService {

//   private resolveTargetY(selector: string, offsetY: number): number {
//     const el = document.querySelector(selector) as HTMLElement | null;
//     if (!el) return 0;
//     const rect = el.getBoundingClientRect();
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return rect.top + scrollTop - offsetY;
//   }
// }
