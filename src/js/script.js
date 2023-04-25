"use strict";

////LETS FLY BUTTON

const letsFlyBtn = document.querySelector(".navbar-list__button");
const modalLetsFly = document.querySelector(".modal");
const closeModal = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");
const body = document.body;

letsFlyBtn.addEventListener("click", function () {
  modalLetsFly.classList.toggle("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("noscroll");
});

closeModal.addEventListener("click", function () {
  modalLetsFly.classList.add("hidden");
  overlay.classList.add("hidden");
});

////HAMBURGER
const hamb = document.querySelector(".hamburger");
const hambActive = document.querySelector(".hamburger_active");
const closeHamb = document.querySelector(".close_link");

hamb.addEventListener("click", function () {
  hambActive.classList.toggle("hidden");
  body.classList.add("noscroll");
});

closeHamb.addEventListener("click", function () {
  hambActive.classList.toggle("hidden");
});

///tabs
const tablinks = document.querySelectorAll(".tablinks");
const mainContent = document.querySelectorAll(".main-content");

for (let item of tablinks) {
  item.addEventListener("click", function () {
    for (let elem of mainContent) {
      elem.classList.add("hidden");
    }
    const content = document.querySelector("#" + item.dataset.tab);
    content.classList.remove("hidden");
  });
}
