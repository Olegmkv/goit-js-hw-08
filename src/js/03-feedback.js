import throttle from "lodash.throttle";

const STOR_KEY = "feedback-form-state";
let form = {};

const refer = {
    input: document.querySelector(".feedback-form"),
}

refer.input.addEventListener("input", throttle(onModifyForm,500));
refer.input.addEventListener("submit", onSubmitForm);

readForm();

//обробка події введення даних в формі
function onModifyForm(e) {
    form[e.target.name]=e.target.value
    saveForm(form);
};

//обробка слухача submit
function onSubmitForm(e) {
    e.preventDefault();
    const { elements: { email, message } } = e.currentTarget;
    if (email.value === "" || message.value === "") {
        alert("Заповніть пусті поля");
        return;
    }
    console.log(form);
    initForm(form);
    saveForm(form);
}

//зчитування зі сховища обєкта форми та ініціалізація обєкту
function readForm() {
    try {
        form = JSON.parse(localStorage.getItem(STOR_KEY));
        refer.input.elements.email.value = form.email;
        refer.input.elements.message.value = form.message;
    } catch (error) {
        console.log("error read storage form!");
        form = {};
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
    refer.input.reset();
}