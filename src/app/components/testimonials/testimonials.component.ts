import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { staggerAnimation } from '../../shared/animations/animations';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  animations: [staggerAnimation]
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Max Mustermann',
      role: 'Project Manager',
      comment: 'Yasin is an excellent developer with strong Angular skills and great attention to detail.',
      rating: 5
    },
    {
      id: '2',
      name: 'Anna Schmidt',
      role: 'Team Lead',
      comment: 'Working with Yasin was a pleasure. His TypeScript expertise really helped our project.',
      rating: 5
    },
    {
      id: '3',
      name: 'John Developer',
      role: 'Senior Developer',
      comment: 'Yasin brings modern development practices and is always eager to learn new technologies.',
      rating: 5
    }
  ];

  ngOnInit(): void {
    // Testimonials are initialized above
  }

  trackByTestimonialId(index: number, testimonial: Testimonial): string {
    return testimonial.id;
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}