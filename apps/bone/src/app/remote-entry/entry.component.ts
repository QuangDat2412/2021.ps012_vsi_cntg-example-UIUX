import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutFacade } from '@bidv-auth/layout';
import { BidvAuthModule } from '@bidv-auth/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent,BidvAuthModule],
  selector: 'app-bone-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor( layoutFacade: LayoutFacade) {
    layoutFacade.setShowApps(true);
    layoutFacade.setApp('BONE');
    layoutFacade.setLogoUrl('bone/assets/logo.png');
  }
}
