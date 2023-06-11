let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');

function popupToToggle() {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

editButton.addEventListener('click', () => popupToToggle());

closePopupButton.addEventListener('click', () => popupToToggle());

function closePopup() {
    popup.classList.remove('popup_opened');
}

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup()
    }
})

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);


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

const gallery = document.querySelector('.elements');
const addCardButton = document.querySelector('.profile__add-button');

const picturePopup = document.getElementById('picture-popup');
const closePicturePopupButton = document.getElementById('picture-popup-close-button');

const pictureFormElement = document.getElementById('picture-popup-form');

const pictureNameInput = document.getElementById('img-name');
const pictureLinkInput = document.getElementById('img-link');

function picturePopupToToggle() {
    picturePopup.classList.toggle('popup_opened');
}

addCardButton.addEventListener('click', () => {
    picturePopupToToggle();
})

closePicturePopupButton.addEventListener('click', () => picturePopupToToggle());


picturePopup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        picturePopupToToggle()
    }
})

function addCard(name, link) {
    const cardTemplate = document.getElementById('template').content;
    const card = cardTemplate.querySelector('.element').cloneNode(true);

    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__image').src = link;
    card.querySelector('.element__image').alt = name;

    const likeButton = card.querySelector('.element__like-button');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like-button_black');
    });

    const deleteButton = card.querySelector(".element__delete-button");
    deleteButton.addEventListener("click", () => {
        card.remove();
    });

    card.querySelector('.element__image').addEventListener('click', () => {
        openPicturePopup(name, link);
    });

    gallery.prepend(card);
}

initialCards.forEach(item => {
    addCard(item.name, item.link);
})

function handlePictureFormSubmit(evt) {
    evt.preventDefault();
    const name = pictureNameInput.value;
    const link = pictureLinkInput.value;
    addCard(name, link);
    picturePopupToToggle();
    pictureFormElement.reset();
}
  
pictureFormElement.addEventListener('submit', handlePictureFormSubmit);

const bigPicturePopup = document.querySelector('.big-picture-popup');
const bigPictureName = document.querySelector('.big-picture-popup__name');
const bigPictureImage = document.querySelector('.big-picture-popup__picture');

function openPicturePopup(name, link) {

    bigPictureName.textContent = name;
    bigPictureImage.src = link;

    bigPicturePopup.classList.add('big-picture-popup_opened');
}

const bigPictureCloseButton = document.querySelector('.big-picture-popup__close-button');

function closeBigPicturePopup() {
    bigPicturePopup.classList.remove('big-picture-popup_opened');
}

bigPictureCloseButton.addEventListener('click', () => closeBigPicturePopup());

bigPicturePopup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeBigPicturePopup()
    }
})