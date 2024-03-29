import { Component, Input } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { SuccessMessageToggleService } from 'src/app/services/success-message-toggle.service';

@Component({
  selector: 'app-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrls: ['./advert-card.component.scss'],
})
export class AdvertCardComponent {
  showInfoStatus: boolean = false;
  bookmarkStatus: boolean = false;
  @Input() advert!: {
    id: string;
    header: string;
    description: string;
    createdDate: Date;
    location: {
      id: string;
      city: string;
      district: string;
      neighbourhood: string;
    };
    user: {
      email: string;
      firstName: string;
      gender: string;
      id: string;
      lastName: string;
      photoUrl: string;
      userName: string;
    };
    floorArea: number;
    rooms: number;
    price: number;
  };
  constructor(
    private popupService: PopupService,
    private successMessageToggleService: SuccessMessageToggleService
  ) {
  
  }
  showInfo() {
    this.showInfoStatus = !this.showInfoStatus;
  }
  switchBookmark(e: Event) {
    e.stopPropagation();
    this.successMessageToggleService.openMessageBox(
      'The advert saved successfully!'
    );
    this.bookmarkStatus = !this.bookmarkStatus;
  }
  openPopup() {
    this.popupService.changePopupStatus(true, 'show', 'advert');
  }
  editAdvert(e: Event) {
    e.stopPropagation();
    this.popupService.changePopupStatus(true, 'update', 'advert');
  }

  removeAdvert(e: Event) {
    e.stopPropagation();
  }
}
