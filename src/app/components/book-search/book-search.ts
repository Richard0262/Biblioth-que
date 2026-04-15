import { Component, inject, signal } from '@angular/core';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './book-search.html',
  styleUrl: './book-search.css',
})

export class BookSearch {
  bookService = inject(BookService);
  query = signal('');
  results = signal<Book[]>([]);

  search() {
    if (this.query().length > 2) {
      this.bookService.searchBooks(this.query()).subscribe(books => {
        this.results.set(books);
      });
    }
  }

  addToLibrary(book: Book) {
    this.bookService.addBook(book);
    this.results.set([]); 
    this.query.set('');
  }
}
