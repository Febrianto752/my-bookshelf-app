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
  renderPage({
    tabActive: "not-yet",
    tabActiveElem: tabNotYetElem,
    anotherTabElem: tabDoneElem,
  });
});

linkTabDoneElem.addEventListener("click", function () {
  renderPage({
    tabActive: "done",
    tabActiveElem: tabDoneElem,
    anotherTabElem: tabNotYetElem,
  });
});

const renderPage = ({
  tabActive = "not-yet",
  tabActiveElem,
  anotherTabElem,
}) => {
  setTabActive(tabActive);
  tabActiveElem.classList.add("active");
  anotherTabElem.classList.remove("active");

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
