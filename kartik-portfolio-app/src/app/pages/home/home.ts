import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class HomeComponent implements AfterViewInit {
  lightboxOpen = false;
  lightboxImg = '';
  lightboxAlt = '';
  lightboxCaption = '';

  galleryItems = [
    {
      src: 'https://drive.google.com/uc?export=view&id=13po0kVe0qd587v6E4Au7wwLPODv8mENn',
      alt: 'With CEO of ESI',
      caption: 'With CEO of ESI & CMO of EPBL India',
    },
    {
      src: 'https://drive.google.com/uc?export=view&id=1mepMxeJ6QKPbydhiaxFgbHlbpE6Zn5o3',
      alt: 'Presenting at Championship',
      caption: 'Presenting at Might West Championship',
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const reveals = this.el.nativeElement.querySelectorAll('.reveal');

    reveals.forEach((el: HTMLElement) => {
      el.classList.add('js-reveal');
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('js-reveal');
              entry.target.classList.add('visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
      );

      reveals.forEach((el: HTMLElement) => io.observe(el));
    }
  }

  openLightbox(src: string, alt: string, caption: string) {
    this.lightboxImg = src;
    this.lightboxAlt = alt;
    this.lightboxCaption = caption;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }
}
