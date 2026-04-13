import { Component, input } from '@angular/core';
import { Book } from '../../models/book.models';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.html',
  styleUrl: './book-item.css',
})
export class BookItem {
  book = input.required<Book>();

}
