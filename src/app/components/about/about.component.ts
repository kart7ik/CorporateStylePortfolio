import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE_ITEMS } from '../../data/portfolio.data';
import { ExperienceItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experience: ExperienceItem[] = EXPERIENCE_ITEMS;
}
