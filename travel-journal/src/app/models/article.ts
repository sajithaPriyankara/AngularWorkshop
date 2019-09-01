import {Comment} from './comment';

export class Article {
  author: string;
  type: string;
  tags: string[];

  title: string;
  content: string;
  image: string;

  comments: Comment[];
}
