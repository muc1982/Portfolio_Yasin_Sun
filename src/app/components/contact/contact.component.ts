import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { ContactService } from '../../services/contact.service';
import { ContactForm } from '../../models/contact';
import { slideInAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    TranslateModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [slideInAnimation]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacyAccepted: [false, Validators.requiredTrue]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const formData: ContactForm = this.contactForm.value;
      
      try {
        const success = await this.contactService.submitContactForm(formData);
        
        if (success) {
          this.snackBar.open('Message sent successfully!', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.contactForm.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        this.snackBar.open('Failed to send message. Please try again.', 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return `${fieldName} is required`;
    }
    
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (field?.hasError('minlength')) {
      const requiredLength = field.errors?.['minlength']?.requiredLength;
      return `${fieldName} must be at least ${requiredLength} characters long`;
    }
    
    return '';
  }
}