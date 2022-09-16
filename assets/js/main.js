const tabNotYetElem = document.getElementById("not-yet");
const tabDoneElem = document.getElementById("done");
const linkTabNotYetElem = document.querySelector("#not-yet a");
const linkTabDoneElem = document.querySelector("#done a");

const btnAddElem = document.querySelector(".btn-add");
const btnCloseElem = document.querySelector(".close");
const wrapperOverlayElem = document.querySelector(".wrapper-overlay");

const titlePageElem = document.querySelector(".title-page");
let tabActive = "not-yet";
const KEY_NAME = "bookList";
const bookListElem = document.querySelector(".book-list");
const inputSearchElem = document.querySelector(".input-search");

if (typeof Storage !== undefined) {
  if (!localStorage.getItem(KEY_NAME)) {
    localStorage.setItem(KEY_NAME, JSON.stringify([]));
    bookListElem.innerText = "Tidak ada daftar buku yang ingin di baca!";
  } else {
    const books = JSON.parse(localStorage.getItem(KEY_NAME));
    BookList.init({
      books: books,
      type: "not-yet",
      container: bookListElem,
    });
  }
} else {
  alert("your browser is not support web storage, this app will not run!!");
}

inputSearchElem.addEventListener("keyup", (event) => {
  BookList.search(event.target.value);
});

const setTabActive = (value) => {
  tabActive = value;
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
    inputSearchElem: inputSearchElem,
  });
});

linkTabDoneElem.addEventListener("click", function () {
  renderPage({
    tabActive: "done",
    tabActiveElem: tabDoneElem,
    anotherTabElem: tabNotYetElem,
    inputSearchElem: inputSearchElem,
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
  BookList.setType(tabActive);

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

  BookList.add(newBook);

  alert("Buku baru berhasil di tambahkan");

  titleElem.value = "";
  authorElem.value = "";
  yearElem.value = 2016;
  isComplete.checked = false;

  if ((tabActive === "not-yet" ? false : true) === isComplete) {
    bookListElem.prepend(BookItem.init({ book: newBook }));
  }
});
