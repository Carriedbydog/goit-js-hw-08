import throttle from 'lodash.throttle';
import { saveToLS, loadFromLS } from './helpers';
// ========================================================================

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';

let obj = {};

// ========================================================================
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
// ========================================================================

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.email.value.trim() === '' || refs.message.name.trim() === '') {
    alert('Please fill all fields');
  } else {
    console.log('Form has been submitted', obj);
    obj = {};
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onFormInput(e) {
  const value = e.target.value;
  const key = e.target.name;
  obj[key] = value;
  saveToLS(STORAGE_KEY, obj);
}

function savePageLoad() {
  let formData = loadFromLS(STORAGE_KEY) || {};
  obj = formData;
  refs.email.value = obj?.email || '';
  refs.message.value = obj?.message || '';
}
savePageLoad();
