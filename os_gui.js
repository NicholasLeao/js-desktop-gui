// ██╗   ██╗██╗    ████████╗███████╗███████╗████████╗
// ██║   ██║██║    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
// ██║   ██║██║       ██║   █████╗  ███████╗   ██║
// ██║   ██║██║       ██║   ██╔══╝  ╚════██║   ██║
// ╚██████╔╝██║       ██║   ███████╗███████║   ██║
//  ╚═════╝ ╚═╝       ╚═╝   ╚══════╝╚══════╝   ╚═╝

//      ===== OBJECTS AND NODE LISTS
const wrapper = document.querySelector(".wrapper");
const content = document.querySelector(".content");
const windowUi = document.querySelector(".ui__bar");
const windowBtns = document.querySelectorAll(".window__ui");
const iconBar = document.querySelector(".icon__bar");

const wrapperList = document.querySelectorAll(".wrapper");
//      ===== UTIL VARIABLES
const iconBarIds = [];
//      ===== AUX FUNCTION FOR WINDOW BUTTONS
const windowUiFunc = function (e) {
  if (e.target.id === "minimizar") {
    console.log(e.target);
    e.target.closest(".wrapper").classList.add("hidden");
    iconBarIds.push(e.target.closest(".wrapper").dataset.id);
    updateIconBar(iconBarIds);
  }
  if (e.target.id === "maximizar") {
  }
  if (e.target.id === "fechar") {
  }
};

//      ===== ADD EVENT LISTENER TO WINDOW BUTTONS
windowBtns.forEach(function (el) {
  el.addEventListener("click", windowUiFunc);
});

//      ===== WRAPPER DIV CSS DRAG IMPLEMENTATION
const windowDrag = function ({ movementX, movementY }) {
  const getStyle = window.getComputedStyle(wrapper);
  const left = parseInt(getStyle.left);
  const top = parseInt(getStyle.top);

  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${top + movementY}px`;
};
//            ===== MOUSE DOWN EVENT LISTENER
windowUi.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("window__ui")) return;
  window.addEventListener("mousemove", windowDrag);
});
//            ===== MOUSE DOWN REMOVE EVENT LISTENER
windowUi.addEventListener("mouseup", function (e) {
  if (e.target.classList.contains("window__ui")) return;
  window.removeEventListener("mousemove", windowDrag);
});

//            ===== UPDATE ICONS ON TASK BAR
const updateIconBar = function (iconArray) {
  iconBar.innerHTML = "";

  iconArray.forEach((icon, idx) => {
    iconBar.insertAdjacentHTML(
      "beforeend",
      `<div class="icon" data-id=${iconArray[idx]}></div>`
    );
    console.log(icon);
  });
};

/////////////////////////////////////////////////////////////////
// ATTEMPT AT IMPLEMENTING NODE LIST DRAG

// //      ===== NODE LIST --- WRAPPER DIV CSS DRAG IMPLEMENTATION
// const windowDrag_new = function ({ movementX, movementY }) {
//   const getStyle = window.getComputedStyle(wrapper);
//   const left = parseInt(getStyle.left);
//   const top = parseInt(getStyle.top);

//   this.style.left = `${left + movementX}px`;
//   this.style.top = `${top + movementY}px`;
// };
// //            ===== NODE LIST --- MOUSE DOWN EVENT LISTENER
// wrapperList.forEach((wrapper) => {
//   windowUi.addEventListener("mousedown", function (e) {
//     if (e.target.classList.contains("window__ui")) return;
//     window.addEventListener("mousemove", windowDrag_new.bind(e.target));
//   });
// });

// //            ===== NODE LIST --- MOUSE DOWN REMOVE EVENT LISTENER
// windowUi.addEventListener("mouseup", function (e) {
//   if (e.target.classList.contains("window__ui")) return;
//   window.removeEventListener("mousemove", windowDrag);
// });
