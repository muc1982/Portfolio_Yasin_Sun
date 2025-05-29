import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.css',
})
export class LegalNoticeComponent {
  currentDate = new Date();

  constructor(
    private router: Router,
    private location: Location
  ) {}

  goBack(): void {
    this.router.navigate(['']);
  }
}