'use strict';

// открытие и закрытие блока .setup

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupName = setup.querySelector('input[name=username]');

var popupEscHandler = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupName.addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscHandler);
});

setupName.addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscHandler);
});

// функция генерации случайных данных

var generateRandom = function (arr) {
  var min = 0;
  var max = arr.length - 1;

  var random = Math.floor(Math.random() * (max - min + 1) + min);

  return arr[random];
};

// данные для отрисовки персонажей

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// смена цвета мантии, глаз и фаербола по нажатию

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var wizardCoatInput = setup.querySelector('input[name=coat-color]');
var wizardEyesInput = setup.querySelector('input[name=eyes-color]');
var wizardFireballInput = setup.querySelector('input[name=fireball-color]');

var changeFill = function (element, color, input) {
  element.style.fill = color;
  input.value = color;
};

var changeBackground = function (element, color, input) {
  element.style.background = color;
  input.value = color;
};

wizardCoat.addEventListener('click', function () {
  changeFill(wizardCoat, generateRandom(coatColors), wizardCoatInput);
});

wizardEyes.addEventListener('click', function () {
  changeFill(wizardEyes, generateRandom(eyesColors), wizardEyesInput);
});

wizardFireball.addEventListener('click', function () {
  changeBackground(wizardFireball, generateRandom(fireballColors), wizardFireballInput);
});

// создать массив, описывающий персонажей

var wizardsNumber = 4;
var wizards = [];

for (var j = 0; j < wizardsNumber; j++) {
  var newWizard = {
    name: generateRandom(firstNames) + ' ' + generateRandom(lastNames),
    coatColor: generateRandom(coatColors),
    eyeColor: generateRandom(eyesColors)
  };
  wizards.push(newWizard);
}

// создать DOM-элементы для волшебников

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

// отрисовать волшебников

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

// показать блок .setup-similar

document.querySelector('.setup-similar').classList.remove('hidden');
