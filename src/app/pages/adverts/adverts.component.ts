import { Component, HostListener } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss'],
})
export class AdvertsComponent {
  cards: [number] = [0];
  sortStatus: boolean = false;
  filterStatus: boolean = false;
  lastViewedStatus: boolean = false;
  isLoading: boolean = true;
  constructor(private popupService: PopupService) {
    this.cards.push(1);
    this.cards.push(2);
    this.cards.push(3);
    this.cards.push(4);
  }



  switchSort() {
    if (this.sortStatus == false) {
      this.filterStatus = false;
      this.lastViewedStatus = false;
    }
    this.sortStatus = !this.sortStatus;
  }
  switchFilter() {
    if (this.filterStatus == false) {
      this.sortStatus = false;
      this.lastViewedStatus = false;
    }
    this.filterStatus = !this.filterStatus;
  }
  switchLastViewed() {
    if (this.lastViewedStatus == false) {
      this.sortStatus = false;
      this.filterStatus = false;
    }
    this.lastViewedStatus = !this.lastViewedStatus;
  }

  ngAfterViewInit() {

      this.isLoading = false;

  }

  // Close the dropdown menu if the user clicks outside of it
}
