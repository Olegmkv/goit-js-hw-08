import throttle from "lodash.throttle";
// var throttle = require('lodash.throttle');

const STOR_KEY = "feedback-form-state";
const form = {};

const refer = {
    form: document.querySelector(".feedback-form"),
}

refer.form.addEventListener("input", throttle(onModifyForm,500));
refer.form.addEventListener("submit", onSubmitForm);

readForm();

//обробка введення даних в формі
function onModifyForm(evt) {
    const { elements: { email, message } } = evt.currentTarget;
    form.email = email.value;
    form.message = message.value;
    saveForm(form);
};

//обробка слухача submit
function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(form);
    initForm(form);
    saveForm(form);
}

//зчитування зі сховища обєкта форми та ініціалізація обєкту
function readForm() {
    try {
        const form = JSON.parse(localStorage.getItem(STOR_KEY));
    } catch (error) {
        initForm(form);
    }
    return;
};

//запис у сховище об'єкта форми
function saveForm(obj) {
    localStorage.setItem(STOR_KEY, JSON.stringify(obj));   
};

//очистка форми та об'єкта
function initForm(obj) {
    obj.email = "";
    obj.message = "";
    refer.form.reset();
}