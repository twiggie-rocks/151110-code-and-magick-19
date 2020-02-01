'use strict';

// показать блок .setup

document.querySelector('.setup').classList.remove('hidden');

// сгенерировать случайные данные

var generateRandom = function (arr) {
  var min = 0;
  var max = arr.length - 1;

  var random = Math.floor(Math.random() * (max - min + 1) + min);

  return arr[random];
};

// создать массив, описывающий персонажей

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: generateRandom(firstNames) + ' ' + generateRandom(lastNames),
    coatColor: generateRandom(coatColors),
    eyeColor: generateRandom(eyesColors)
  },
  {
    name: generateRandom(firstNames) + ' ' + generateRandom(lastNames),
    coatColor: generateRandom(coatColors),
    eyeColor: generateRandom(eyesColors)
  },
  {
    name: generateRandom(firstNames) + ' ' + generateRandom(lastNames),
    coatColor: generateRandom(coatColors),
    eyeColor: generateRandom(eyesColors)
  },
  {
    name: generateRandom(firstNames) + ' ' + generateRandom(lastNames),
    coatColor: generateRandom(coatColors),
    eyeColor: generateRandom(eyesColors)
  }
];

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
