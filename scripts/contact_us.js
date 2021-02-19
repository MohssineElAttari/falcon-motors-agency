// smooth scroll function :
import { smoothScroll } from "./functions.js";

// smooth scrolling elements :
let to = document.querySelector(".section-local");
let from = document.querySelector(".btn-header--location");
from.addEventListener("click", function () {
  smoothScroll(to, 1000);
});
let to1 = document.querySelector(".footer");
let from1 = document.querySelector(".local-addresses .btn.submit-form");
from1.addEventListener("click", function () {
  smoothScroll(to1, 1000);
});

// to hidden elements by display :
const hidden = function (current, want_to_hide) {
  current.addEventListener("click", () => {
    want_to_hide.style.visibility = "hidden";
  });
};

// to show elements by display :
const show = function (current, want_to_show) {
  current.addEventListener("click", () => {
    want_to_show.style.visibility = "visible";
  });
};

// getting contact us submit :
let submit_btn = document.querySelector(".form-contact .submit-form");

//getting popUp :
let popUp = document.querySelector(".popup");
let popUp_box = document.querySelector(".popup-box");
let form_popUp = document.forms.form_popUp;
let contact_form = document.forms.contact_form;

// block submitting form refreshing :
contact_form.addEventListener("submit", (event) => event.preventDefault());
form_popUp.addEventListener("submit", (event) => event.preventDefault());

// show popup when click to btn and fill inputs in popup :
submit_btn.addEventListener("click", () => {
  if (contact_form.checkValidity()) {
    popUp.style.visibility = "visible";
    popUp.style.backdropFilter = "blur(1.5rem)";
    document.querySelector(
      ".fullname"
    ).innerHTML = `${contact_form.name.value} ${contact_form.Lname.value} `;
    form_popUp.name.value = contact_form.name.value;
    form_popUp.Lname.value = contact_form.Lname.value;
    form_popUp.email.value = contact_form.email.value;
    form_popUp.phone.value = contact_form.phone.value;
    form_popUp.message.value = contact_form.message.value;
    popUp_box.style.visibility = "visible";
  } else {
    alert("re-Enter your information");
  }
});

// getting popUp buttons:
let confirm_btn = document.querySelector(".popUp-form .confirm-btn");
let cancel_btn = document.querySelector(".popUp-form .cancel-btn");
let edit_btn = document.querySelector(".popUp-form .edit-btn");
let thank__page = document.querySelector(".thank__page");
let return_btn = document.querySelector(".thank__page .submit-form");

// turn on buttons in popUp form :
//// turn on confirm button:
show(confirm_btn, thank__page);
confirm_btn.addEventListener("click", () => {
  popUp_box.style.visibility = "hidden";
});

////// hidden thank you page :
hidden(return_btn, thank__page);
hidden(return_btn, popUp);
return_btn.addEventListener("click", () => {
  popUp.style.backdropFilter = "unset";
  contact_form.name.value = null;
  contact_form.Lname.value = null;
  contact_form.email.value = null;
  contact_form.phone.value = null;
  contact_form.message.value = null;
});
//// turn on edit button:

hidden(cancel_btn, popUp_box);
cancel_btn.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
  popUp.style.backdropFilter = "unset";
  contact_form.name.value = null;
  contact_form.Lname.value = null;
  contact_form.email.value = null;
  contact_form.phone.value = null;
  contact_form.message.value = null;
});
hidden(edit_btn, popUp_box);
edit_btn.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
  popUp.style.backdropFilter = "unset";
});
