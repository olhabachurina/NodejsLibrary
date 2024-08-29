"use strict";
//������� 1
//interface Book {
//    title: string;
//    author: string;
//    publishedYear: number;
//    genre: string;
//    isAvailable: boolean;
//}
Object.defineProperty(exports, "__esModule", { value: true });
//class LibraryBook implements Book {
//    title: string;
//    author: string;
//    publishedYear: number;
//    genre: string;
//    isAvailable: boolean;
//    constructor(title: string, author: string, publishedYear: number, genre: string) {
//        this.title = title;
//        this.author = author;
//        this.publishedYear = publishedYear;
//        this.genre = genre;
//        this.isAvailable = true;
//    }
//    borrowBook(): void {
//        if (this.isAvailable) {
//            this.isAvailable = false;
//            console.log(`The book "${this.title}" is now borrowed.`);
//        } else {
//            console.log(`The book "${this.title}" is currently unavailable.`);
//        }
//    }
//    returnBook(): void {
//        if (!this.isAvailable) {
//            this.isAvailable = true;
//            console.log(`The book "${this.title}" has been returned and is now available.`);
//        } else {
//            console.log(`The book "${this.title}" was not borrowed.`);
//        }
//    }
//}
//interface User {
//    id: number;
//    name: string;
//    borrowedBooks: Book[];
//}
//class LibraryUser implements User {
//    id: number;
//    name: string;
//    borrowedBooks: Book[] = [];
//    constructor(id: number, name: string) {
//        this.id = id;
//        this.name = name;
//    }
//    borrow(book: LibraryBook): void {
//        if (book.isAvailable) {
//            book.borrowBook();
//            this.borrowedBooks.push(book);
//            console.log(`${this.name} borrowed the book "${book.title}".`);
//        } else {
//            console.log(`The book "${book.title}" is not available for borrowing.`);
//        }
//    }
//    return(book: LibraryBook): void {
//        const index = this.borrowedBooks.indexOf(book);
//        if (index !== -1) {
//            book.returnBook();
//            this.borrowedBooks.splice(index, 1);
//            console.log(`${this.name} returned the book "${book.title}".`);
//        } else {
//            console.log(`The book "${book.title}" was not borrowed by ${this.name}.`);
//        }
//    }
//}
//class Library {
//    books: LibraryBook[] = [];
//    users: LibraryUser[] = [];
//    addBook(book: LibraryBook): void {
//        this.books.push(book);
//        console.log(`The book "${book.title}" has been added to the library.`);
//    }
//    registerUser(user: LibraryUser): void {
//        this.users.push(user);
//        console.log(`User "${user.name}" has been registered with ID: ${user.id}.`);
//    }
//    findBooksByAuthor(author: string): LibraryBook[] {
//        return this.books.filter(book => book.author === author);
//    }
//    findAvailableBooks(): LibraryBook[] {
//        return this.books.filter(book => book.isAvailable);
//    }
//}
//// Example usage
//const library = new Library();
//const book1 = new LibraryBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel");
//const book2 = new LibraryBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
//const book3 = new LibraryBook("1984", "George Orwell", 1949, "Dystopian");
//const book4 = new LibraryBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasy");
//const book5 = new LibraryBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Fantasy");
//const book6 = new LibraryBook("The Alchemist", "Paulo Coelho", 1988, "Adventure");
//const book7 = new LibraryBook("The Little Prince", "Antoine de Saint-Exup?ry", 1943, "Fantasy");
//const book8 = new LibraryBook("Pride and Prejudice", "Jane Austen", 1813, "Romance");
//const book9 = new LibraryBook("Moby-Dick", "Herman Melville", 1851, "Adventure");
//const book10 = new LibraryBook("Brave New World", "Aldous Huxley", 1932, "Dystopian");
//library.addBook(book1);
//library.addBook(book2);
//library.addBook(book3);
//library.addBook(book4);
//library.addBook(book5);
//library.addBook(book6);
//library.addBook(book7);
//library.addBook(book8);
//library.addBook(book9);
//library.addBook(book10);
//const user1 = new LibraryUser(1, "Alice");
//const user2 = new LibraryUser(2, "Bob");
//library.registerUser(user1);
//library.registerUser(user2);
//user1.borrow(book1);
//user2.borrow(book2);
//console.log("Books by F. Scott Fitzgerald:", library.findBooksByAuthor("F. Scott Fitzgerald"));
//console.log("Available books:", library.findAvailableBooks());
//user1.return(book1);
//console.log("Available books after return:", library.findAvailableBooks());
//�������������� � ������������� ����� �������
const readline = require("readline");
class LibraryBook {
    constructor(title, author, publishedYear, genre) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.genre = genre;
        this.isAvailable = true;
    }
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`The book "${this.title}" is now borrowed.`);
        }
        else {
            console.log(`The book "${this.title}" is currently unavailable.`);
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`The book "${this.title}" has been returned and is now available.`);
        }
        else {
            console.log(`The book "${this.title}" was not borrowed.`);
        }
    }
}
class LibraryUser {
    constructor(id, name) {
        this.borrowedBooks = [];
        this.id = id;
        this.name = name;
    }
    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed the book "${book.title}".`);
        }
        else {
            console.log(`The book "${book.title}" is not available for borrowing.`);
        }
    }
    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned the book "${book.title}".`);
        }
        else {
            console.log(`The book "${book.title}" was not borrowed by ${this.name}.`);
        }
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`The book "${book.title}" has been added to the library.`);
    }
    registerUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" has been registered with ID: ${user.id}.`);
    }
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    findAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const library = new Library();
const books = [
    new LibraryBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel"),
    new LibraryBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"),
    new LibraryBook("1984", "George Orwell", 1949, "Dystopian"),
    new LibraryBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasy"),
    new LibraryBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Fantasy"),
    new LibraryBook("The Alchemist", "Paulo Coelho", 1988, "Adventure"),
    new LibraryBook("The Little Prince", "Antoine de Saint-Exup?ry", 1943, "Fantasy"),
    new LibraryBook("Pride and Prejudice", "Jane Austen", 1813, "Romance"),
    new LibraryBook("Moby-Dick", "Herman Melville", 1851, "Adventure"),
    new LibraryBook("Brave New World", "Aldous Huxley", 1932, "Dystopian"),
];
books.forEach(book => library.addBook(book));
let userIdCounter = 1;
const showMenu = () => {
    console.log(`
    Menu:
    1. Register a user
    2. Borrow a book
    3. Return a book
    4. Find books by author
    5. Show available books
    6. Exit
    `);
    handleUserInput();
};
const handleUserInput = () => {
    rl.question('Choose an action (1-6): ', (choice) => {
        switch (choice.trim()) {
            case '1':
                rl.question('Enter user name: ', (name) => {
                    const user = new LibraryUser(userIdCounter++, name);
                    library.registerUser(user);
                    showMenu();
                });
                break;
            case '2':
                rl.question('Enter user ID: ', (userId) => {
                    const user = library.users.find(u => u.id === parseInt(userId));
                    if (user) {
                        rl.question('Enter book title: ', (title) => {
                            const book = library.books.find(b => b.title === title);
                            if (book) {
                                user.borrow(book);
                            }
                            else {
                                console.log('Book not found.');
                            }
                            showMenu();
                        });
                    }
                    else {
                        console.log('User not found.');
                        showMenu();
                    }
                });
                break;
            case '3':
                rl.question('Enter user ID: ', (userId) => {
                    const user = library.users.find(u => u.id === parseInt(userId));
                    if (user) {
                        rl.question('Enter book title: ', (title) => {
                            const book = library.books.find(b => b.title === title);
                            if (book) {
                                user.return(book);
                            }
                            else {
                                console.log('Book not found.');
                            }
                            showMenu();
                        });
                    }
                    else {
                        console.log('User not found.');
                        showMenu();
                    }
                });
                break;
            case '4':
                rl.question('Enter author name: ', (author) => {
                    const booksByAuthor = library.findBooksByAuthor(author);
                    if (booksByAuthor.length > 0) {
                        console.log(`Books by ${author}:`, booksByAuthor);
                    }
                    else {
                        console.log(`No books found by ${author}.`);
                    }
                    showMenu();
                });
                break;
            case '5':
                console.log("Available books:", library.findAvailableBooks());
                showMenu();
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Invalid choice, please try again.');
                showMenu();
                break;
        }
    });
};
showMenu();
//# sourceMappingURL=app.js.map