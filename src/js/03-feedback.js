import throttle from 'lodash.throttle';
import { saveToLS, loadFromLS } from './helpers';
// ========================================================================

const STORAGE_KEY = 'feedback-form-state';

let obj = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

// ========================================================================
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
// ========================================================================

function onFormSubmit(e) {
  e.preventDefault();
  console.log(obj);
  obj = {};
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  const value = e.target.value;
  const key = e.target.name;
  obj[key] = value;
  saveToLS(STORAGE_KEY, obj);
}

function onPageLoad() {
  let formData = loadFromLS(STORAGE_KEY) || {};
  console.log(formData);
  obj = formData;
  refs.email.value = obj?.email || '';
  refs.message.value = obj?.message || '';
}
onPageLoad();
