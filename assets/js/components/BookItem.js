const BookItem = {
  init({ book = {} }) {
    this.book = book;
    return this.render();
  },
  render() {
    const bookItemElem = document.createElement("div");

    bookItemElem.setAttribute(
      "class",
      `book-item column-12 column-sm-6 column-lg-4 column-xxl-3   ${
        this.book.isComplete === false ? "shadow-primary" : "shadow-secondary"
      }`
    );

    bookItemElem.innerHTML = `<h2 class="line-clamp ${
      this.book.isComplete === false ? "text-primary" : "text-secondary"
    }  title" title="${this.book.title}">
    ${this.book.title}
  </h2>

  <div class="author line-clamp fw-5">${this.book.author}</div>
  <div class="year fw-4">${this.book.year}</div>

  <div class="action">
  ${
    this.book.isComplete === false
      ? '<img src="./assets/images/icons/checked.png" alt="checked icon" width="30" class="icon" />'
      : '<img src="./assets/images/icons/undo.png" alt="undo icon" width="30" class="icon" />'
  }
    
    <img
      src="./assets/images/icons/trash.png"
      alt="trash"
      width="30"
      class="icon"
    />
  </div>`;
    const bookTitle = this.book.title;
    const bookId = this.book.id;
    bookItemElem
      .querySelector("img:last-child")
      .addEventListener("click", () => {
        showAlertAskForDelete({
          messageSuccessDelete: `Buku berjudul "${bookTitle}" berhasil dihapus!!`,
          bookTitle,
          bookId,
        });
      });

    bookItemElem
      .querySelector("img:first-child")
      .addEventListener("click", () => {
        BookList.updateIsCompleteBookById(bookId);
        bookItemElem.remove();
      });

    return bookItemElem;
  },
};
