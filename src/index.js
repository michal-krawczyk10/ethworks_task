import _ from "lodash";
import "./style.scss";

const playBtn = document.querySelector(".play--js");
const modal = document.querySelector(".modal__vid");
const body = document.querySelector(".body--js");

playBtn.addEventListener("click", () => {
	console.log("test");
	modal.classList.add("show");
	body.classList.add("noscroll");
});
