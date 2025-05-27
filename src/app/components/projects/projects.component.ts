import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../models/project';
import { slideInAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [slideInAnimation]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: '1',
      title: 'Join',
      description: 'A comprehensive project management tool built with Angular',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Material Design'],
      githubUrl: 'https://github.com/yasin/join',
      liveUrl: 'https://join-yasin.web.app'
    },
    {
      id: '2', 
      title: 'Poco',
      description: 'A modern web application showcasing frontend skills',
      technologies: ['Angular', 'HTML', 'CSS', 'TypeScript'],
      githubUrl: 'https://github.com/yasin/poco',
      liveUrl: 'https://poco-yasin.web.app'
    }
  ];

  ngOnInit(): void {
    // Projects are initialized above
  }

  trackByProjectId(index: number, project: Project): string {
    return project.id;
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}