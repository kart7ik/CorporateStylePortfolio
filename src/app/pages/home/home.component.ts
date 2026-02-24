import { Component, AfterViewInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { WorkComponent } from '../../components/work/work.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    WorkComponent,
    SkillsComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <div class="full-rule"></div>
    <app-work />
    <div class="full-rule"></div>
    <app-skills />
    <div class="full-rule"></div>
    <app-about />
    <div class="full-rule"></div>
    <app-gallery />
    <div class="full-rule"></div>
    <app-contact />
  `
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initReveal();
  }

  private initReveal(): void {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => el.classList.add('js-reveal'));

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('js-reveal');
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(el => io.observe(el));
    } else {
      reveals.forEach(el => {
        el.classList.remove('js-reveal');
        el.classList.add('visible');
      });
    }
  }
}
