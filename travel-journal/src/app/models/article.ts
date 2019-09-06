import {Comment} from './comment';
import {Author} from './author';

export class Article {
  id: string;
  author: Author;
  type: string;
  tags: string[];

  title: string;
  content: string;
  image: string;

  comments: Comment[];
}
