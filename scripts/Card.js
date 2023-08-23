class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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

    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
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
    const bigPicture = document.querySelector(".popup__opened-picture");
    const bigPictureName = document.querySelector(".popup__picture-name");
    bigPictureName.textContent = this._name;
    bigPicture.src = this._link;
    bigPicture.alt = this._name;
    document.querySelector(".popup_big-picture").classList.add("popup_opened");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;

    return this._element;
  }
}

export default Card;