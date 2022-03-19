// ██╗   ██╗██╗    ████████╗███████╗███████╗████████╗
// ██║   ██║██║    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
// ██║   ██║██║       ██║   █████╗  ███████╗   ██║
// ██║   ██║██║       ██║   ██╔══╝  ╚════██║   ██║
// ╚██████╔╝██║       ██║   ███████╗███████║   ██║
//  ╚═════╝ ╚═╝       ╚═╝   ╚══════╝╚══════╝   ╚═╝

const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".content");
const windowUi = document.querySelector(".ui__bar");
const windowBtns = document.querySelectorAll(".window__ui");

const windowUiFunc = function (e) {
  if (e.target.id === "minimizar") {
    // console.log("minimize");
  }
  if (e.target.id === "maximizar") {
    // console.log("maximize");
  }
  if (e.target.id === "fechar") {
    // console.log("close");
  }
};

windowBtns.forEach(function (el) {
  el.addEventListener("click", windowUiFunc);
});

const windowDrag = function ({ movementX, movementY }) {
  const getStyle = window.getComputedStyle(wrapper);
  const left = parseInt(getStyle.left);
  const top = parseInt(getStyle.top);

  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${top + movementY}px`;
};

windowUi.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("window__ui")) return;
  window.addEventListener("mousemove", windowDrag);
});

windowUi.addEventListener("mouseup", function (e) {
  if (e.target.classList.contains("window__ui")) return;
  window.removeEventListener("mousemove", windowDrag);
});
