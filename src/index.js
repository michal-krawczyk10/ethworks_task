import _ from "lodash";
import "./style.scss";

const playBtn = document.querySelector(".play--js");
const modal = document.querySelector(".modal__vid");
const body = document.querySelector(".body--js");
const video = document.querySelector(".video--js");

playBtn.addEventListener("click", () => {
	modal.classList.add("show");
	video.play();
});

modal.addEventListener("click", () => {
	video.pause();
	modal.classList.remove("show");
});
