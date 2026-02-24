import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../data/portfolio.data';
import { SkillCategory } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = SKILL_CATEGORIES;
}
