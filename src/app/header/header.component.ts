import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  facebook = faFacebookF;
  twitter = faTwitter;
  linkedin = faLinkedinIn;

  isDropDownOpen: boolean = false;

  openDropdown(): void {
    this.isDropDownOpen = true;
  }

  closeDropdown(): void {
    this.isDropDownOpen = false;
  }
}
