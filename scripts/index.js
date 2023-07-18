const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupNewPicture = document.querySelector('.popup_add-picture');
const popupBigPicture = document.querySelector('.popup_big-picture');

const buttonEdit = document.querySelector('.profile__edit-button');

const buttonClosePopupEdit = document.getElementById('popup-profile-edit-close-button');
const buttonClosePopupNewPicture = document.getElementById('popup-new-picture-close-button');
const buttonClosePopupBigPicture = document.getElementById('popup-big-picture-close-button');

const profileFormElement = document.getElementById('profile-popup-form');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');

const bigPicture = document.querySelector('.popup__opened-picture');
const bigPictureName = document.querySelector('.popup__picture-name');


function openPopup(item, name, link) {
    item.classList.add('popup_opened');
}

function closePopup(item) {
    item.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(popupProfile)}
    );

buttonClosePopupEdit.addEventListener('click', () => closePopup(popupProfile));
buttonClosePopupNewPicture.addEventListener('click', () => closePopup(popupNewPicture));

popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popup);
    }
});

function handleFormProfile(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popup);
}

profileFormElement.addEventListener('submit', handleFormProfile);

const gallery = document.querySelector('.elements');
const addCardButton = document.querySelector('.profile__add-button');

const picturePopup = document.getElementById('picture-popup');

const pictureFormElement = document.getElementById('picture-popup-form');

const pictureNameInput = document.getElementById('img-name');
const pictureLinkInput = document.getElementById('img-link');

addCardButton.addEventListener('click', () => {
    openPopup(popupNewPicture);
});

popupNewPicture.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupNewPicture);
    }
});

const galleryElement = document.querySelector('.element__image');
const galleryElementName = document.querySelector('.element__title');

function createCard(name, link) {
    const cardTemplate = document.getElementById('template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__title').textContent = name;
    cardElement.querySelector('.element__image').src = link;
    cardElement.querySelector('.element__image').alt = name;

    const likeButton = cardElement.querySelector('.element__like-button');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like-button_black');
    });

    const deleteButton = cardElement.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

    cardElement.querySelector('.element__image').addEventListener('click', () => {
        bigPictureName.textContent = name;
        bigPicture.src = link;
        bigPicture.alt = name;
        openPopup(popupBigPicture, name, link);
    });

    return cardElement;
}

function addCardToGallery(cardElement) {
    gallery.prepend(cardElement);
}

initialCards.forEach(item => {
    const cardElement = createCard(item.name, item.link);
    addCardToGallery(cardElement);
});

function handleFormNewPicture(event) {
    event.preventDefault();
    const name = pictureNameInput.value;
    const link = pictureLinkInput.value;
    const cardElement = createCard(name, link);
    addCardToGallery(cardElement);
    closePopup(popupNewPicture);
    pictureFormElement.reset();
}

pictureFormElement.addEventListener('submit', handleFormNewPicture);

buttonClosePopupBigPicture.addEventListener('click', () => closePopup(popupBigPicture));

popupBigPicture.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupBigPicture);
    }
});