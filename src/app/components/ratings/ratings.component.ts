import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {
  @Input() filled: boolean = false;
  icon = faStar;
}
