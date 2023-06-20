import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about-author',
  templateUrl: './about-author.component.html',
  styleUrls: ['./about-author.component.scss']
})
export class AboutAuthorComponent {
  facebook = faFacebookF;
  twitter = faTwitter;
  linkedin = faLinkedinIn;
}
