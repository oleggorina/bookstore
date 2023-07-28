import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { IArticle } from 'src/app/shared/interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  articles: IArticle[] = [];
  articlesSubscription!: Subscription;

  constructor(private articleService: ArticlesService,
    private titleService: Title) {}

  ngOnInit(): void {
    this.articlesSubscription = this.articleService.getArticles().subscribe((data) => {
      this.articles = data;
    });
    this.titleService.setTitle('Articles')
  }

  ngOnDestroy(): void {
    if(this.articlesSubscription) this.articlesSubscription.unsubscribe();
  }
}
