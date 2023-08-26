function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscPress);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscPress);
}

function handleEscPress(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

export { openPopup, closePopup, handleEscPress };