import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_IMAGES } from '../../data/portfolio.data';
import { GalleryImage } from '../../models/portfolio.models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: GalleryImage[] = GALLERY_IMAGES;
  lightboxOpen = false;
  activeImage: GalleryImage | null = null;

  openLightbox(image: GalleryImage): void {
    this.activeImage = image;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.activeImage = null;
    document.body.style.overflow = '';
  }

  onLightboxClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('img') || target.tagName !== 'IMG') {
      this.closeLightbox();
    }
  }
}
