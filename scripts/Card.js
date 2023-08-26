import { popupBigPicture, bigPicture, bigPictureName } from './utils/constants.js';
import { openPopup } from "./utils/utils.js";

class Card {
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this.openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleLikeButtonClick();
      });

    this._element
      .querySelector(".element__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButtonClick();
      });

    this._imageElement.addEventListener("click", () => {
      this._handleCardImageClick();
    });
  }

  _handleLikeButtonClick() {
    this._element
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_black");
  }

  _handleDeleteButtonClick() {
    this._element.remove();
  }

  _handleCardImageClick() {
    bigPictureName.textContent = this._name;
    bigPicture.src = this._link;
    bigPicture.alt = this._name;
    openPopup(popupBigPicture);
  }

  static createCard(name, link) {
    return new Card({name, link}, "#template");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(".element__image");
    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;

    return this._element;
  }
}

export default Card;