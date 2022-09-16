const tabNotYetElem = document.getElementById("not-yet");
const tabDoneElem = document.getElementById("done");
const linkTabNotYetElem = document.querySelector("#not-yet a");
const linkTabDoneElem = document.querySelector("#done a");

const btnAddElem = document.querySelector(".btn-add");
const btnCloseElem = document.querySelector(".close");
const wrapperOverlayElem = document.querySelector(".wrapper-overlay");

const titlePageElem = document.querySelector(".title-page");
let tabActive = "not-yet";

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
  setTabActive("not-yet");
  tabNotYetElem.classList.add("active");
  tabDoneElem.classList.remove("active");
  renderPage({ tabActive: "not-yet" });
});

linkTabDoneElem.addEventListener("click", function () {
  setTabActive("done");
  tabDoneElem.classList.add("active");
  tabNotYetElem.classList.remove("active");
  renderPage({ tabActive: "done" });
});

const renderPage = ({ tabActive = null }) => {
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
