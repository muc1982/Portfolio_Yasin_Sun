import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss', // Änderung: .css zu .scss
})
export class LegalNoticeComponent {
  currentDate = new Date();

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['']);
  }
}