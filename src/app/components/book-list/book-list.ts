import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book';
import { BookItem } from '../book-item/book-item';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookItem],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  bookService = inject(BookService);

  myBooks = this.bookService.books;

}
