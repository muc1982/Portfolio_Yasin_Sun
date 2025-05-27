import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { ContactForm } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private firebaseService: FirebaseService) {}

  async submitContactForm(formData: ContactForm): Promise<boolean> {
    try {
      await this.firebaseService.submitContactForm(formData);
      return true;
    } catch (error) {
      console.error('Contact form submission failed:', error);
      return false;
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
