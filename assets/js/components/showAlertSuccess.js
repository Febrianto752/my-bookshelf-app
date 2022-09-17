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
