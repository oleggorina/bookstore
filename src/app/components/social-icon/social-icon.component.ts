import { Component, Input } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent {
  @Input() icon = faFacebookF;
  @Input() position: string =  '';
}
