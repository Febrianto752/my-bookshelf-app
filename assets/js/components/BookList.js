const data = [
  {
    id: 3657848524,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    year: 1997,
    isComplete: false,
  },
  {
    id: 3657848525,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    year: 2097,
    isComplete: false,
  },
];

const BookList = {
  init({ books = [], type = "not-yet", container }) {
    this.books = books;
    this.type = type === "not-yet" ? false : true;
    this.container = container;

    this.render(books.filter((book) => book.isComplete === this.type));
  },
  add(book) {
    this.books.unshift(book);
  },
  deleteBookById(id) {
    this.books = this.books.filter((book) => book.id !== id);
  },
  setType(type = "") {
    this.type = type;
    this.render(books.filter((book) => book.isComplete === this.type));
  },

  render(booksByType = []) {
    booksByType.forEach((book) => {
      this.container.appendChild(BookItem.init({ book: book }));
    });
  },
};

// BookList.init({
//   books: data,
//   type: "not-yet",
//   container: document.querySelector(".book-list"),
// });
