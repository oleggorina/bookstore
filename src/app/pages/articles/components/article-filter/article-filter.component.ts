import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { IArticle } from 'src/app/shared/interface';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss']
})
export class ArticleFilterComponent implements OnInit {
  articles: IArticle[] = [];
  articlesSubscription!: Subscription;
  isClassic: boolean = true;
  isMystery: boolean = false;
  isIdeology: boolean = false;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesSubscription = this.articlesService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }

  ngOnDestroy(): void {
    if(this.articlesSubscription) this.articlesSubscription.unsubscribe();
  }

  activateClassic() {
    this.isClassic = true;
    this.isMystery = false;
    this.isIdeology = false;
  }

  activateMystery() {
    this.isClassic = false;
    this.isMystery = true;
    this.isIdeology = false;
  }

  activateIdeology() {
    this.isClassic = false;
    this.isMystery = false;
    this.isIdeology = true;
  }
}
