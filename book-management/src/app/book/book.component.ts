import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBookTitle: string = '';
  newBookAuthor: string = '';
  books: Book[] = [];

  ngOnInit(): void {
    // Retrieve saved books from local storage on component initialization
    let savedBooks = localStorage.getItem('books')
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook(): void {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      // Add the new book to the list
      let newBook: Book = {
        id: Date.now(), // Unique ID based on timestamp
        title: this.newBookTitle,
        author: this.newBookAuthor
      };
      // Add new book to the list
      this.books.push(newBook);

      // Clear input fields
      this.newBookTitle = '';
      this.newBookAuthor = '';

      // Save updated book list to local storage
      localStorage.setItem('books', JSON.stringify(this.books))
      }
  }
  deleteBook(index: number): void {
    // Remove the book at the specified index
    this.books.splice(index, 1);
    // Update local storage after deletion
    localStorage.setItem('books', JSON.stringify(this.books))
  }

}
