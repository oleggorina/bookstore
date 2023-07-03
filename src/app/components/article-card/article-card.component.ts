import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() summary: string = '';
  @Input() author: string = '';
  @Input() date: string = '';
  @Input() id: number = 0;
}
