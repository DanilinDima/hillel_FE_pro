class Book {
    #isAvailable = true;
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  borrowBook() {
    if (this.#isAvailable) {
      this.#isAvailable = false;
      console.log(`You borrowed "${this.title}"`);
    } else {
      console.log(`Sorry, "${this.title}" is not available`);
    }
  }
  returnBook() {
    if (this.#isAvailable) {
      console.log(`"${this.title}" is already available`);
      return;
    }
    this.#isAvailable = true;
    console.log(`You returned "${this.title}"`);
  }
    isAvailable() {
        return this.#isAvailable;
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable()) {
            book.borrowBook();
            this.borrowedBooks.push(book);
        } else {
            console.log(`Sorry, "${book.title}" is not available`);
        }
    }
    returnBook(book) {
        if (this.borrowedBooks.includes(book)) {
            book.returnBook();
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
        } else {
            console.log(`You haven't borrowed "${book.title}"`);
        }
    }
    getBorrowedBooks() {
        return this.borrowedBooks;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    registerUser(user) {
        this.users.push(user);
    }
    findAvailableBooks() {
        return this.books.filter(book => book.isAvailable());
    }
    getUserBooks(userName) {
        const user = this.users.find(user => user.name === userName);
        if (!user) {
            console.log(`User "${userName}" not found`);
            return [];
        }
        return user.getBorrowedBooks();
    }
}

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

const user1 = new User("Alice");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.registerUser(user1);

user1.borrowBook(book1);
console.log(library.findAvailableBooks()); 