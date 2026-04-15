import { Component, signal } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { BookSearch } from './components/book-search/book-search';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [ BookSearch, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-tracker');
}


