import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-left">© 2025 Kartik Joshi · Chandigarh, India</div>
      <a class="footer-right" href="#home">Back to top ↑</a>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--ink); border-top: 1px solid rgba(255,255,255,0.06);
      padding: 24px 60px; display: flex; justify-content: space-between; align-items: center;
    }
    .footer-left { font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.04em; }
    .footer-right {
      font-size: 11px; color: rgba(255,255,255,0.25); text-decoration: none;
      transition: color 0.2s; letter-spacing: 0.04em;
      &:hover { color: rgba(255,255,255,0.6); }
    }
    @media (max-width: 600px) {
      footer { padding: 20px; flex-direction: column; gap: 8px; text-align: center; }
    }
  `]
})
export class FooterComponent {}
