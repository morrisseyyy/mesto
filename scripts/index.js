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