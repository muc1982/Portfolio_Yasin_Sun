import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('de');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Set available languages
    this.translate.addLangs(['de', 'en']);
    
    // Set default language
    this.translate.setDefaultLang('de');
    
    // Get saved language or use browser language
    const savedLanguage = localStorage.getItem('preferred-language');
    const browserLanguage = this.translate.getBrowserLang();
    const languageToUse = savedLanguage || (browserLanguage?.match(/de|en/) ? browserLanguage : 'de');
    
    this.setLanguage(languageToUse);
  }

  setLanguage(language: string): void {
    if (['de', 'en'].includes(language)) {
      this.translate.use(language);
      this.currentLanguageSubject.next(language);
      localStorage.setItem('preferred-language', language);
      
      // Update document language
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.setLanguage(newLang);
  }
}