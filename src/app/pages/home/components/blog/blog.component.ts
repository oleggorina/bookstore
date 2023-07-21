import { Component } from '@angular/core';
import { IArticleCard } from 'src/app/shared/interface';
import { ARTICLECARD_DATA } from 'src/app/shared/article-card.const';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  articleData: IArticleCard[] = ARTICLECARD_DATA;
}
