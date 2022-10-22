/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BookItem.js":
/*!************************************!*\
  !*** ./src/components/BookItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showAlertAskForDelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAlertAskForDelete */ "./src/components/showAlertAskForDelete.js");


const BookItem = {
  init({ book = {}, bookList = {} }) {
    this.book = book;
    this.bookList = bookList;
    return this.render();
  },
  render() {
    const bookList = this.bookList;
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
      ? '<img src="./src/images/icons/checked.png" alt="checked icon" width="30" class="icon" />'
      : '<img src="./src/images/icons/undo.png" alt="undo icon" width="30" class="icon" />'
  }
    
    <img
      src="./src/images/icons/trash.png"
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
        (0,_showAlertAskForDelete__WEBPACK_IMPORTED_MODULE_0__["default"])({
          messageSuccessDelete: `Buku berjudul "${bookTitle}" berhasil dihapus!!`,
          bookTitle,
          bookId,
          bookList,
        });
      });

    bookItemElem
      .querySelector("img:first-child")
      .addEventListener("click", () => {
        bookList.updateIsCompleteBookById(bookId);
        bookItemElem.remove();
      });

    return bookItemElem;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookItem);


/***/ }),

/***/ "./src/components/BookList.js":
/*!************************************!*\
  !*** ./src/components/BookList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookItem */ "./src/components/BookItem.js");
/* harmony import */ var _config_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/storage */ "./src/config/storage.js");
/* harmony import */ var _config_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/dom */ "./src/config/dom.js");





const BookList = {
  init({ books = [], type = "not-yet", container }) {
    this.books = books;
    this.type = type === "not-yet" ? false : true;
    this.container = container;

    this.render(books.filter((book) => book.isComplete === this.type));
  },
  add(book) {
    this.books.unshift(book);
    localStorage.setItem(_config_storage__WEBPACK_IMPORTED_MODULE_1__.KEY_NAME, JSON.stringify(this.books));
    _config_dom__WEBPACK_IMPORTED_MODULE_2__["default"].value = "";
    this.render(this.books.filter((book) => book.isComplete === this.type));
  },
  deleteBookById(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem(_config_storage__WEBPACK_IMPORTED_MODULE_1__.KEY_NAME, JSON.stringify(this.books));
    this.render(this.books.filter((book) => book.isComplete === this.type));
  },
  updateIsCompleteBookById(id) {
    this.books = this.books.map((book) => {
      if (book.id === id) book.isComplete = !book.isComplete;
      return book;
    });
    localStorage.setItem(_config_storage__WEBPACK_IMPORTED_MODULE_1__.KEY_NAME, JSON.stringify(this.books));
  },
  setType(type = "not-yet") {
    this.type = type === "not-yet" ? false : true;
    this.render(this.books.filter((book) => book.isComplete === this.type));
  },

  search(keyword = "") {
    this.render(
      this.books.filter((book) => {
        return book.title.toLowerCase().includes(keyword.toLowerCase()) &&
          book.isComplete === this.type
          ? book
          : false;
      })
    );
  },

  render(booksByType = []) {
    this.container.innerHTML = "";

    if (booksByType.length !== 0 && booksByType) {
      booksByType.forEach((book) => {
        this.container.appendChild(
          _BookItem__WEBPACK_IMPORTED_MODULE_0__["default"].init({ book: book, bookList: this })
        );
      });
    } else {
      this.container.innerHTML = `<div class="column-12 text-center">Data Buku Tidak Ditemukan</div>`;
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookList);


/***/ }),

/***/ "./src/components/showAlertAskForDelete.js":
/*!*************************************************!*\
  !*** ./src/components/showAlertAskForDelete.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showAlertSuccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAlertSuccess */ "./src/components/showAlertSuccess.js");

// const BookList = require("./BookList");

const showAlertAskForDelete = ({
  messageSuccessDelete = "",
  bookTitle = "",
  bookId = 0,
  bookList,
}) => {
  const alertAskElem = document.createElement("div");
  const wrapperOverlayTransparent = document.createElement("div");
  wrapperOverlayTransparent.setAttribute("class", "wrapper-overlay");
  alertAskElem.setAttribute("class", "alert-ask");
  alertAskElem.innerHTML = `
  <img
      src="./src/images/icons/question.png"
      alt="question icon"
      width="30"
      class="mb-1"
    />
    <div class="ask-message mb-1">
      Apakah anda yakin ingin menghapus data buku berjudul "${bookTitle}" ini ?
    </div>
    <div class="btn-group mb-1">
      <button class="btn-submit">Ya</button>
      <button class="btn-danger">Tidak</button>
    </div>
  `;

  alertAskElem.querySelector(".btn-danger").addEventListener("click", () => {
    alertAskElem.classList.remove("show-alert-ask");
    wrapperOverlayTransparent.classList.remove("show-modal");
  });

  alertAskElem.querySelector(".btn-submit").addEventListener("click", () => {
    bookList.deleteBookById(bookId);
    (0,_showAlertSuccess__WEBPACK_IMPORTED_MODULE_0__["default"])(messageSuccessDelete);
    alertAskElem.classList.remove("show-alert-ask");
    wrapperOverlayTransparent.classList.remove("show-modal");
  });

  wrapperOverlayTransparent.appendChild(alertAskElem);

  document.body.appendChild(wrapperOverlayTransparent);

  setTimeout(() => {
    alertAskElem.classList.add("show-alert-ask");
    wrapperOverlayTransparent.classList.add("show-modal");
  }, 0);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAlertAskForDelete);


/***/ }),

/***/ "./src/components/showAlertSuccess.js":
/*!********************************************!*\
  !*** ./src/components/showAlertSuccess.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/storage */ "./src/config/storage.js");


const showAlertSuccess = (message = "") => {
  const alertSuccessElem = document.createElement("div");
  alertSuccessElem.setAttribute(
    "class",
    `alert-success ${_config_storage__WEBPACK_IMPORTED_MODULE_0__.tabActive === "not-yet" ? "bg-primary" : "bg-secondary"}`
  );
  alertSuccessElem.innerText = message;

  document.body.appendChild(alertSuccessElem);

  setTimeout(() => {
    alertSuccessElem.classList.add("show-alert-success");
  }, 0);

  setTimeout(() => {
    alertSuccessElem.remove();
  }, 2000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAlertSuccess);


/***/ }),

/***/ "./src/config/dom.js":
/*!***************************!*\
  !*** ./src/config/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const inputSearchElem = document.querySelector(".input-search");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputSearchElem);


/***/ }),

/***/ "./src/config/storage.js":
/*!*******************************!*\
  !*** ./src/config/storage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY_NAME": () => (/* binding */ KEY_NAME),
/* harmony export */   "tabActive": () => (/* binding */ tabActive)
/* harmony export */ });
const KEY_NAME = "bookList";
let tabActive = "not-yet";




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/BookList */ "./src/components/BookList.js");
/* harmony import */ var _config_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/storage */ "./src/config/storage.js");
/* harmony import */ var _config_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/dom */ "./src/config/dom.js");





const tabNotYetElem = document.getElementById("not-yet");
const tabDoneElem = document.getElementById("done");
const linkTabNotYetElem = document.querySelector("#not-yet a");
const linkTabDoneElem = document.querySelector("#done a");

const btnAddElem = document.querySelector(".btn-add");
const btnCloseElem = document.querySelector(".close");
const wrapperOverlayElem = document.querySelector(".wrapper-overlay");

const bookListElem = document.querySelector(".book-list");
const titlePageElem = document.querySelector(".title-page");

if (typeof Storage !== undefined) {
  if (!localStorage.getItem(_config_storage__WEBPACK_IMPORTED_MODULE_1__.KEY_NAME)) {
    localStorage.setItem(_config_storage__WEBPACK_IMPORTED_MODULE_1__.KEY_NAME, JSON.stringify([]));

    _components_BookList__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      books: [],
      type: "not-yet",
      container: bookListElem,
    });
  } else {
    const books = JSON.parse(localStorage.getItem(_config_storage__WEBPACK_IMPORTED_MODULE_1__.KEY_NAME));
    _components_BookList__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      books: books,
      type: "not-yet",
      container: bookListElem,
    });
  }
} else {
  alert("your browser is not support web storage, this app will not run!!");
}

_config_dom__WEBPACK_IMPORTED_MODULE_2__["default"].addEventListener("keyup", (event) => {
  _components_BookList__WEBPACK_IMPORTED_MODULE_0__["default"].search(event.target.value);
});

const setTabActive = (value) => {
  _config_storage__WEBPACK_IMPORTED_MODULE_1__.tabActive = value;
};

btnAddElem.addEventListener("click", () => {
  wrapperOverlayElem.classList.add("show-modal");
});

btnCloseElem.addEventListener("click", () => {
  wrapperOverlayElem.classList.remove("show-modal");
});

linkTabNotYetElem.addEventListener("click", function () {
  renderPage({
    tabActive: "not-yet",
    tabActiveElem: tabNotYetElem,
    anotherTabElem: tabDoneElem,
    inputSearchElem: _config_dom__WEBPACK_IMPORTED_MODULE_2__["default"],
  });
});

linkTabDoneElem.addEventListener("click", function () {
  renderPage({
    tabActive: "done",
    tabActiveElem: tabDoneElem,
    anotherTabElem: tabNotYetElem,
    inputSearchElem: _config_dom__WEBPACK_IMPORTED_MODULE_2__["default"],
  });
});

const renderPage = ({
  tabActive = "not-yet",
  tabActiveElem,
  anotherTabElem,
  inputSearchElem,
}) => {
  setTabActive(tabActive);
  tabActiveElem.classList.add("active");
  anotherTabElem.classList.remove("active");
  inputSearchElem.value = "";
  _components_BookList__WEBPACK_IMPORTED_MODULE_0__["default"].setType(tabActive);

  if (tabActive === "done") {
    modifyTitlePage("Daftar Buku Yang Sudah Selesai Dibaca", "text-secondary");
  } else if (tabActive === "not-yet") {
    modifyTitlePage("Daftar Buku Yang Belum Selesai Dibaca", "text-primary");
  }
};

const modifyTitlePage = (text, colorClass) => {
  titlePageElem.innerText = text;
  titlePageElem.setAttribute("class", `title-page ${colorClass}`);
};

btnAddElem.addEventListener("click", () => {
  wrapperOverlayElem.classList.add("show-modal");
});

const titleElem = document.getElementById("judul");
const authorElem = document.getElementById("penulis");
const yearElem = document.getElementById("tahun");
const isCompleteElem = document.getElementById("isComplete");
const formAddBookElem = document.getElementById("form-add-book");

formAddBookElem.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = titleElem.value;
  const author = authorElem.value;
  const year = yearElem.value;
  const isComplete = isCompleteElem.checked;
  console.log(typeof isComplete);

  const newBook = {
    id: +new Date(),
    title,
    author,
    year,
    isComplete,
  };

  _components_BookList__WEBPACK_IMPORTED_MODULE_0__["default"].add(newBook);

  alert("Buku baru berhasil di tambahkan");

  titleElem.value = "";
  authorElem.value = "";
  yearElem.value = 2016;
  isCompleteElem.checked = false;
});

})();

/******/ })()
;