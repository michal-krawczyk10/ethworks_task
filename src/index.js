import _ from "lodash";
import "./style.scss";

const playBtn = document.querySelector(".play--js");
const modal = document.querySelector(".modal");
const modalVid = document.querySelector(".modal__vid");
const body = document.querySelector(".body--js");
const video = document.querySelector(".video--js");
const tM1 = document.querySelector(".tm1--js");
// const tM2 = document.querySelector(".tm2--js");
// const tM3 = document.querySelector(".tm3--js");
// const tM4 = document.querySelector(".tm4--js");
const modalTM1 = document.querySelector(".modal__tm1--js");
// const modalTM2 = document.querySelector(".modal__tm2--js");
// const modalTM3 = document.querySelector(".modal__tm4--js");
// const modalTM4 = document.querySelector(".modal__tm4--js");

playBtn.addEventListener("click", () => {
	modalVid.classList.add("show");
	video.play();
});

modal.addEventListener("click", () => {
	video.pause();
	modal.classList.remove("show");
});

tM1.addEventListener("click", () => {
	modalTM1.classList.add("show");
});
