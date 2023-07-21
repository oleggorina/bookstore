import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { IArticle } from 'src/app/shared/interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [];
  articlesSubscription!: Subscription;

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesSubscription = this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    })
  }

  ngOnDestroy(): void {
    if(this.articlesSubscription) this.articlesSubscription.unsubscribe();
  }
}
