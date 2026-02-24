import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WORK_ITEMS } from '../../data/portfolio.data';
import { WorkItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  workItems: WorkItem[] = WORK_ITEMS;
}
