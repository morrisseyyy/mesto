import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupProfile = document.querySelector(".popup_profile");
const popupNewPicture = document.querySelector(".popup_add-picture");
const popupBigPicture = document.querySelector(".popup_big-picture");

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

const popupList = [popupProfile, popupNewPicture, popupBigPicture];

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach((item) => {
  const card = new Card({name: item.name, link: item.link}, "#template");
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
  const card = new Card({name, link}, "#template");
  const cardElement = card.generateCard();
  addCardToGallery(cardElement);
  closePopup(popupNewPicture);
  pictureFormElement.reset();
}

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileFormValidator = new FormValidator(validationSettings, profileFormElement);
const pictureFormValidator = new FormValidator(validationSettings, pictureFormElement);

profileFormElement.addEventListener("submit", handleFormProfile);
pictureFormElement.addEventListener("submit", handleFormNewPicture);

profileFormValidator.enableValidation();
pictureFormValidator.enableValidation();

addCardButton.addEventListener("click", () => {
  openPopup(popupNewPicture);
});