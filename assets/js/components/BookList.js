const BookList = {
  init({ books = [], type = "not-yet", container }) {
    this.books = books;
    this.type = type === "not-yet" ? false : true;
    this.container = container;

    this.render(books.filter((book) => book.isComplete === this.type));
  },
  add(book) {
    this.books.unshift(book);
    localStorage.setItem(KEY_NAME, JSON.stringify(this.books));
  },
  deleteBookById(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem(KEY_NAME, JSON.stringify(this.books));
  },
  updateIsCompleteBookById(id) {
    this.books = this.books.map((book) => {
      if (book.id === id) book.isComplete = !book.isComplete;
      return book;
    });
    localStorage.setItem(KEY_NAME, JSON.stringify(this.books));
  },
  setType(type = "") {
    this.type = type === "not-yet" ? false : true;
    this.render(this.books.filter((book) => book.isComplete === this.type));
  },

  search(keyword = "") {
    this.render(
      this.books.filter((book) => {
        return book.title.includes(keyword) && book.isComplete === this.type
          ? book
          : false;
      })
    );
  },

  render(booksByType = []) {
    this.container.innerHTML = "";
    console.log(booksByType);
    if (booksByType.length !== 0 && booksByType) {
      booksByType.forEach((book) => {
        this.container.appendChild(BookItem.init({ book: book }));
      });
    } else {
      this.container.innerHTML = `<div class="column-12 text-center">Data Buku Tidak Ditemukan</div>`;
    }
  },
};
