import { Injectable } from '@angular/core';
import { ContactForm } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {}

  async submitContactForm(formData: ContactForm): Promise<void> {
    try {
      console.log('Contact form submitted:', formData);
      // Simuliere API Call für jetzt
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }
}