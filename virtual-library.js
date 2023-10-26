The following is a JavaScript code that demonstrates an elaborate and complex example of a virtual library management system. It includes various actions such as adding books, searching for books, checking availability, borrowing, returning, and managing library members. 

```javascript
// Filename: virtual-library.js
// Description: A virtual library management system

// Defining classes
class Book {
  constructor(title, author, genre, availability = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = availability;
  }
}

class Member {
  constructor(name, id, books = []) {
    this.name = name;
    this.id = id;
    this.books = books;
  }
}

class Library {
  constructor(name, books = [], members = []) {
    this.name = name;
    this.books = books;
    this.members = members;
  }

  // Adding a book to the library
  addBook(title, author, genre) {
    const book = new Book(title, author, genre);
    this.books.push(book);
    console.log(`Book "${title}" successfully added to the library.`);
  }

  // Searching for books by title or author
  searchBooks(query) {
    const results = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );

    console.log(`Search results for '${query}':`);
    if (results.length === 0) {
      console.log("No books found.");
    } else {
      results.forEach((book) => {
        console.log(
          `"${book.title}" by ${book.author} [Genre: ${book.genre}]`
        );
      });
    }
  }

  // Checking book availability
  checkAvailability(title) {
    const book = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );

    if (!book) {
      console.log(`Book "${title}" not found in the library.`);
    } else if (book.availability) {
      console.log(`Book "${title}" is currently available.`);
    } else {
      console.log(`Book "${title}" is currently unavailable.`);
    }
  }

  // Borrowing a book
  borrowBook(title, memberId) {
    const bookIndex = this.books.findIndex(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );

    if (bookIndex === -1) {
      console.log(`Book "${title}" not found in the library.`);
      return;
    }

    const member = this.members.find((member) => member.id === memberId);

    if (!member) {
      console.log(`Member with ID "${memberId}" not found.`);
      return;
    }

    if (this.books[bookIndex].availability) {
      member.books.push(this.books[bookIndex]);
      this.books[bookIndex].availability = false;
      console.log(
        `Book "${title}" has been borrowed by ${member.name}. Return by:`,
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      );
    } else {
      console.log(`Book "${title}" is currently unavailable.`);
    }
  }

  // Returning a book
  returnBook(title, memberId) {
    const memberIndex = this.members.findIndex(
      (member) => member.id === memberId
    );

    if (memberIndex === -1) {
      console.log(`Member with ID "${memberId}" not found.`);
      return;
    }

    const bookIndex = this.members[memberIndex].books.findIndex(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );

    if (bookIndex === -1) {
      console.log(
        `Member with ID "${memberId}" does not have book "${title}".`
      );
      return;
    }

    this.members[memberIndex].books.splice(bookIndex, 1);
    const book = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    book.availability = true;
    console.log(`Book "${title}" has been successfully returned.`);
  }
}

// Creating a library instance
const library = new Library("My Virtual Library");

// Adding sample books
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
library.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
library.addBook("1984", "George Orwell", "Sci-Fi");

// Adding sample members
const member1 = new Member("John Doe", 1);
const member2 = new Member("Jane Smith", 2);
library.members.push(member1, member2);

// Searching for books
library.searchBooks("kill");

// Checking book availability
library.checkAvailability("1984");

// Borrowing books
library.borrowBook("To Kill a Mockingbird", 1);

// Returning books
library.returnBook("To Kill a Mockingbird", 1);
```

Please note that this is just an example code to demonstrate a virtual library management system and does not implement persistence or database functionality.