import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, popupBigPicture }  from "./utils/constants.js";
import { openPopup, closePopup, handleEscPress } from "./utils/utils.js";

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const popupProfile = document.querySelector(".popup_profile");
const popupNewPicture = document.querySelector(".popup_add-picture");

const buttonEdit = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const nameInput = document.getElementById("name-input");
const jobInput = document.getElementById("job-input");

const profileFormElement = document.getElementById("profile-popup-form");
const pictureFormElement = document.getElementById("picture-popup-form");
const pictureNameInput = document.getElementById("img-name");
const pictureLinkInput = document.getElementById("img-link");

const gallery = document.querySelector(".elements");
const addCardButton = document.querySelector(".profile__add-button");

const buttonClosePopupEdit = document.getElementById("popup-profile-edit-close-button");
const buttonClosePopupNewPicture = document.getElementById("popup-new-picture-close-button");
const buttonClosePopupBigPicture = document.getElementById("popup-big-picture-close-button");

const inputList = Array.from(
  pictureFormElement.querySelectorAll(validationSettings.inputSelector)
);
const buttonElement = pictureFormElement.querySelector(
  validationSettings.submitButtonSelector
);

const popupList = [popupProfile, popupNewPicture, popupBigPicture];

buttonEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfile);
});

buttonClosePopupEdit.addEventListener("click", () => closePopup(popupProfile));
buttonClosePopupNewPicture.addEventListener("click", () => closePopup(popupNewPicture));
buttonClosePopupBigPicture.addEventListener("click", () => closePopup(popupBigPicture));

popupList.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

function addCardToGallery(cardElement) {
  gallery.prepend(cardElement);
}

initialCards.forEach((item) => {
  const card = Card.createCard(item.name, item.link);
  const cardElement = card.generateCard();
  addCardToGallery(cardElement);
});

function handleFormProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleFormNewPicture(event) {
  event.preventDefault();
  const name = pictureNameInput.value;
  const link = pictureLinkInput.value;
  const card = Card.createCard(name, link);
  const cardElement = card.generateCard();
  addCardToGallery(cardElement);
  closePopup(popupNewPicture);
  pictureFormElement.reset();
}

const profileFormValidator = new FormValidator(validationSettings, profileFormElement);
const pictureFormValidator = new FormValidator(validationSettings, pictureFormElement);

profileFormElement.addEventListener("submit", handleFormProfile);
pictureFormElement.addEventListener("submit", handleFormNewPicture);

profileFormValidator.enableValidation();
pictureFormValidator.enableValidation();

addCardButton.addEventListener("click", () => {
  openPopup(popupNewPicture);
  pictureFormValidator.toggleButtonState(inputList, buttonElement);
});