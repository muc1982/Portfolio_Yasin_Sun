import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateY(50px)', opacity: 0 }),
    animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.8s ease-in', style({ opacity: 1 }))
  ])
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger(100, [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const scaleInAnimation = trigger('scaleIn', [
  transition(':enter', [
    style({ transform: 'scale(0.8)', opacity: 0 }),
    animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ])
]);