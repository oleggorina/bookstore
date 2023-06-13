import { Component } from '@angular/core';
import { IReviewCard } from 'src/app/shared/review-card.class';
import { REVIEWCARD_DATA } from 'src/app/shared/review-card.const';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  stars: boolean[] = [true, true, true, true, false];
  reviewData: IReviewCard[] = REVIEWCARD_DATA;
}
