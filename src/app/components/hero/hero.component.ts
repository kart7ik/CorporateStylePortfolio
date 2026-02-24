import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  profilePhoto = 'https://res.cloudinary.com/dkwiquxyb/image/upload/v1771954364/MyPicWithout_BG_vsnsog.png';

  stats = [
    { value: '2Cr', sup: '+', label: 'Monthly Instagram reach' },
    { value: '328K', sup: '+', label: 'Organic YouTube views' },
    { value: '350', sup: '+', label: 'Event sign-ups driven' },
    { value: '10K', sup: '+', label: 'Genuine followers added' },
  ];
}
