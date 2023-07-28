import { Component, OnDestroy, OnInit } from '@angular/core';
import { IArticle, IArticleCard } from 'src/app/shared/interface';
import { ARTICLECARD_DATA } from 'src/app/shared/article-card.const';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  articles: IArticle[] = [];
  articlesSubscription!: Subscription;

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesSubscription = this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    })
  }

  ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }
}
