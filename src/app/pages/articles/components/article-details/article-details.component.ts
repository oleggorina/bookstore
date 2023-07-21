import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IArticle } from 'src/app/shared/interface';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article!: IArticle;
  articleSubscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.articleSubscription = this.activatedRoute.data.subscribe((data) => {
      this.article = data['data'];
    })
    console.log(this.article.descr.list)
  }

  ngOnDestroy(): void {
    if(this.articleSubscription) this.articleSubscription.unsubscribe();
  }
}
