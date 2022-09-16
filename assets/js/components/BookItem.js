const BookItem = {
  init({ book = [] }) {
    this.book = book;

    return this.render();
  },
  render() {
    const bookItemElem = document.createElement("div");

    bookItemElem.setAttribute(
      "class",
      "book-item column-12 column-lg-3 column-md-4 column-sm-6"
    );

    bookItemElem.innerHTML = `<h2 class="line-clamp ${
      this.book.isComplete === false ? "text-primary" : "text-secondary"
    }  title">
    ${this.book.title}
  </h2>

  <div class="author line-clamp fw-5">${this.book.author}</div>
  <div class="year fw-4">${this.book.year}</div>

  <div class="action">
    <img
      src="./assets/images/icons/checked.png"
      alt="checked icon"
      width="30"
      class="icon"
    />
    <img
      src="./assets/images/icons/trash.png"
      alt="trash"
      width="30"
      class="icon"
    />
  </div>`;

    bookItemElem
      .querySelector("img:last-child")
      .addEventListener("click", function () {
        bookItemElem.remove();
      });

    return bookItemElem;
  },
};
