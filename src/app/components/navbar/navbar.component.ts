import { Component, HostListener, Input } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import * as $ from "jquery";
import { PopupService } from 'src/app/services/popup.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private popupService: PopupService) {

  }

  onLogout() {
    //this.authService.logout();
  }
  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {

    if (element.classList.contains('ddown')) {

      if (!$('.navbar-dropdown').hasClass('show')) {
        $('.navbar-dropdown').addClass('show');
        $('.dropdown-wrapper').addClass('show-hover');
      } else {
        $('.navbar-dropdown').removeClass('show');
        $('.dropdown-wrapper').removeClass('show-hover');
      }
    } else {
      $('.navbar-dropdown').removeClass('show');
      $('.dropdown-wrapper').removeClass('show-hover');
    }
    /*for small size dropdown on navbar*/ 


    if($('.navbar-small-size-dropdown').hasClass('show')){
      $('.navbar-small-size-dropdown').removeClass('show')
      $('.fa-bars').removeClass('d-none');
      $('.fa-xmark').addClass('d-none')
    }else{
      if (element.classList.contains('fa-bars')) {
        $('.fa-bars').addClass('d-none');
        $('.fa-xmark').removeClass('d-none')
        $('.navbar-small-size-dropdown').addClass('show');
        
      } 
      if (element.classList.contains('fa-xmark')) {
        $('.fa-xmark').addClass('d-none');
        $('.fa-bars').removeClass('d-none')
        
      } 
    }

  }

  openPopup(){
this.popupService.changePopupStatus(true,'create','advert')
  }
}