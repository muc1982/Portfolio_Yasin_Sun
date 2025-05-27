import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { WhyMeComponent } from '../../components/why-me/why-me.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LanguageService } from '../../services/language.service';
import { fadeInAnimation, slideInAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WhyMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInAnimation, slideInAnimation]
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLanguage = 'de';
  isLoading = true;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.initializeComponent();
    this.subscribeToLanguageChanges();
    this.handleInitialLoad();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeComponent(): void {
    // Smooth scrolling für die gesamte Seite
    this.enableSmoothScrolling();
    
    // SEO Meta Tags setzen
    this.updateMetaTags();
  }

  private subscribeToLanguageChanges(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(language => {
        this.currentLanguage = language;
        this.updateMetaTags();
      });
  }

  private handleInitialLoad(): void {
    // Kurze Verzögerung für bessere UX bei Animationen
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }

  private enableSmoothScrolling(): void {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }

  private updateMetaTags(): void {
    if (typeof document !== 'undefined') {
      const title = this.currentLanguage === 'de' 
        ? 'Yasin Sun - Frontend Developer | Angular & TypeScript' 
        : 'Yasin Sun - Frontend Developer | Angular & TypeScript';
      
      const description = this.currentLanguage === 'de'
        ? 'Frontend Developer in München spezialisiert auf Angular, TypeScript und moderne Webtechnologien. Portfolio mit Projekten und Kontaktmöglichkeiten.'
        : 'Frontend Developer in Munich specializing in Angular, TypeScript and modern web technologies. Portfolio with projects and contact options.';

      document.title = title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }

  // Scroll-zu-Sektion Methode (falls von anderen Komponenten benötigt)
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Navbar Höhe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Intersection Observer für Scroll-Animationen (optional)
  private setupScrollAnimations(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Alle Sektionen beobachten
      const sections = document.querySelectorAll('section');
      sections.forEach(section => observer.observe(section));
    }
  }
}