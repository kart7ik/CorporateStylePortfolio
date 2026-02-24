import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rxn-case-study',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="case-placeholder section-wrap">
      <p class="section-count">Case Study</p>
      <h1 class="section-title" style="font-size:2.5rem;margin:16px 0 24px;">RXN Sports</h1>
      <p style="color:var(--ink2);margin-bottom:32px;">
        Full case study content — migrate from rxn-casestudy.html into this component.
      </p>
      <a routerLink="/" class="btn-solid" style="text-decoration:none;display:inline-block;padding:12px 24px;">← Back to Portfolio</a>
    </div>
  `,
  styles: [`.case-placeholder { padding: 140px 60px 80px; max-width:1200px; margin:0 auto; }`]
})
export class RxnCaseStudyComponent {}
