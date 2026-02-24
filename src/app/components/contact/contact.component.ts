import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_LINKS } from '../../data/portfolio.data';
import { ContactLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  links: ContactLink[] = CONTACT_LINKS;
}
