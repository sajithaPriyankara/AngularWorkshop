import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://vzztalks.com:3000/articles');
  }
}
