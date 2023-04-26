import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TreCorte';

  reservations!:any;

// @ViewChild('reservations', { static: true }) reservations: ElementRef;

//   scrollToReservations() {
//     this.reservations.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }

footerHeight = 100;

// Calculate the body padding-bottom value based on the footer height
bodyPaddingBottom = this.footerHeight + 'px';
}
