import { Component, HostListener, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  facebook = faFacebookF;
  twitter = faTwitter;
  linkedin = faLinkedinIn;

  screenWidth: number = 0;

  isDropDownOpen: boolean = false;

  ngOnInit() {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
  }

  openDropdown(): void {
    this.isDropDownOpen = true;
  }

  closeDropdown(): void {
    this.isDropDownOpen = false;
  }
}
