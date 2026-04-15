import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http = inject(HttpClient);
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
   
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

  searchBooks(query: string) {
  return this.http.get<any>(`${this.apiUrl}?q=${query}`).pipe(
    map(response => response.items.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors || ['Auteur inconnu'],
      thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
      description: item.volumeInfo.description,
      status: 'to-read'
    } as Book)))
  );
}
}
