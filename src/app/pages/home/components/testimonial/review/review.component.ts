import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() rating: boolean[] = [];
}
