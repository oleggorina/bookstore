import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url: string = "https://bookstore-2b138-default-rtdb.europe-west1.firebasedatabase.app/Articles";
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<IArticle[]>(`${this.url}.json`);
  }

  getArticle(id: number) {
    return this.http.get<IArticle>(`${this.url}/${id}.json`);
  }
}
