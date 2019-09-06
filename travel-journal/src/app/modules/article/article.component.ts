import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }
}
