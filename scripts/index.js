let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let nameInput = document.querySelectorAll('.popup__input')[0];
let jobInput = document.querySelectorAll('.popup__input')[1];

function popupToToggle() {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

editButton.addEventListener('click', () => popupToToggle(popup));

closePopupButton.addEventListener('click', () => popupToToggle(popup));

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popupToToggle(popup)
    }
})

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);