'use strict';


const serchFields = document.getElementsByClassName('field');

for (const oneFild of serchFields) {
  const input = oneFild.querySelector('input');
  let placeholderName = input.name;
  let inputId = input.id;

  placeholderName = placeholderName.toLocaleLowerCase();

  placeholderName =
    placeholderName.charAt(0).toUpperCase() + placeholderName.slice(1);
  input.placeholder = placeholderName;

  const newLabel = document.createElement('label');

  oneFild.prepend(newLabel);
  newLabel.textContent = placeholderName;
  newLabel.classList.add('field-label');

  if (!inputId) {
    inputId = input.name + 'suffix';
  }
  newLabel.setAttribute('for', inputId);
}
