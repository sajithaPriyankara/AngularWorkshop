import {Injectable} from '@angular/core';
import {Article} from '../models/article';
import {ARTICLES} from './articles.mock';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() {
  }

  getArticles(): Article[] {
    return ARTICLES;
  }
}
