import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   
  private booksSignal = signal<Book[]>(this.loadFromStorage());
  
  books = this.booksSignal.asReadonly();

  constructor() {}

  addBook(book: Book) {
    this.booksSignal.update(currentBooks => [...currentBooks, book]);
    this.saveToStorage();
  }

  private saveToStorage() {
    localStorage.setItem('my_books', JSON.stringify(this.booksSignal()));
  }

  private loadFromStorage(): Book[] {
    const saved = localStorage.getItem('my_books');
    return saved ? JSON.parse(saved) : [];
  }
}