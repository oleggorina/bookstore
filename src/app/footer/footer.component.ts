import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  facebook = faFacebookF;
  twitter = faTwitter;
  linkedin = faLinkedinIn;
  instagram =  faInstagram;
}
