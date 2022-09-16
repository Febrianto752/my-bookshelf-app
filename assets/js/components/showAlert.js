const showAlertSuccess = (message = "") => {
  const alertSuccessElem = document.createElement("div");
  alertSuccessElem.setAttribute(
    "class",
    `alert-success ${tabActive === "not-yet" ? "bg-primary" : "bg-secondary"}`
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

const showAlertAskForDelete = ({
  messageSuccessDelete = "",
  bookTitle = "",
  bookId = 0,
  elementToBeDeleted,
}) => {
  const alertAskElem = document.createElement("div");
  const wrapperOverlayTransparent = document.createElement("div");
  wrapperOverlayTransparent.setAttribute("class", "wrapper-overlay");
  alertAskElem.setAttribute("class", "alert-ask");
  alertAskElem.innerHTML = `
  <img
      src="./assets/images/icons/question.png"
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
    BookList.deleteBookById(bookId);
    showAlertSuccess(messageSuccessDelete);
    alertAskElem.classList.remove("show-alert-ask");
    wrapperOverlayTransparent.classList.remove("show-modal");
    elementToBeDeleted.remove();
  });

  wrapperOverlayTransparent.appendChild(alertAskElem);

  document.body.appendChild(wrapperOverlayTransparent);

  setTimeout(() => {
    alertAskElem.classList.add("show-alert-ask");
    wrapperOverlayTransparent.classList.add("show-modal");
  }, 0);
};
