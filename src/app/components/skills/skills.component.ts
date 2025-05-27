import { Component, OnInit, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Skill } from '../../models/skill';
import { staggerAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [staggerAnimation]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { id: '1', name: 'Angular', icon: 'web', category: 'frontend' },
    { id: '2', name: 'TypeScript', icon: 'code', category: 'frontend' },
    { id: '3', name: 'JavaScript', icon: 'javascript', category: 'frontend' },
    { id: '4', name: 'HTML', icon: 'html', category: 'frontend' },
    { id: '5', name: 'CSS', icon: 'css', category: 'frontend' },
    { id: '6', name: 'REST API', icon: 'api', category: 'backend' },
    { id: '7', name: 'Firebase', icon: 'cloud', category: 'backend' },
    { id: '8', name: 'Git', icon: 'source', category: 'tools' },
    { id: '9', name: 'Scrum', icon: 'groups', category: 'other' },
    { id: '10', name: 'Material Design', icon: 'design_services', category: 'frontend' },
    { id: '11', name: 'Challenge Me', icon: 'emoji_events', category: 'other' }
  ];
  trackBySkillId!: TrackByFunction<Skill>;

  ngOnInit(): void {
    // Skills are initialized above
  }
}