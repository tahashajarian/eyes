const flies = document.getElementById("flies");
const body = document.getElementById("body");
const eyes = document.getElementById("eyes");
const eyeL = document.getElementById("eyeL");
const eyeR = document.getElementById("eyeR");

let eyeLeftPosition = [
  eyeL.getBoundingClientRect().left + eyeL.clientWidth / 2,
  eyeL.getBoundingClientRect().top + eyeL.clientHeight / 2,
];
let eyeRightPosition = [
  eyeR.getBoundingClientRect().left + eyeR.clientWidth / 2,
  eyeR.getBoundingClientRect().top + eyeR.clientHeight / 2,
];

window.onmousemove = (e) => {
  body.style.cursor = "none";
  const x = e.x;
  const y = e.y;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const ballL = document.getElementById("ballL");
  const eyeLH = eyeL.clientHeight;
  const eyeLW = eyeL.clientWidth;
  const ballLH = ballL.clientHeight;
  const ballLW = ballL.clientWidth;
  const ballLT =
    ((y - eyeLeftPosition[1]) / height) * eyeLH + eyeLH / 2 - ballLH / 2;
  const ballLL =
    ((x - eyeLeftPosition[0]) / width) * eyeLW + eyeLW / 2 - ballLW / 2;
  ballL.style.top = ballLT + "px";
  ballL.style.left = ballLL + "px";

  const ballR = document.getElementById("ballR");
  const eyeRH = eyeR.clientHeight;
  const eyeRW = eyeR.clientWidth;
  const ballRH = ballR.clientHeight;
  const ballRW = ballR.clientWidth;
  const ballRT =
    ((y - eyeRightPosition[1]) / height) * eyeRH + eyeRH / 2 - ballRH / 2;
  const ballRL =
    ((x - eyeRightPosition[0]) / width) * eyeRW + eyeRW / 2 - ballRW / 2;
  ballR.style.top = ballRT + "px";
  ballR.style.left = ballRL + "px";

  // create mouse icon
  // const star = document.createElement("span");
  // star.className = "fadeIn";
  // star.style.top = y + 20 + "px";
  // star.style.left = x + 30 + "px";
  // body.append(star);
  // setTimeout(() => {
  //   star.classList.add("fadeOut");
  // }, 150);
  // setTimeout(() => {
  //   star.remove();
  // }, 300);
  flies.style.top = y + "px";
  flies.style.left = x + "px";
};

const wings = document.getElementsByClassName("wing");

eyes.onmouseenter = () => {
  flies.style.display = "none";
  // const stars = document.getElementsByClassName("fadeIn");
  // for (let i = 0; i < stars.length; i++) {
  //   const element = stars[i];
  //   element.style.display = "none";
  // }
};

eyes.onmouseleave = () => {
  flies.style.display = "block";
};

// eyes.onmousedown = (e) => {
//   console.log(e);
// };

eyes.ondragstart = (e) => {
  console.log("drag start", e);
  // eyes.style.top = e.clientY + "px";
  // eyes.style.left = e.clientX + "px";
};
eyes.ondrag = (e) => {
  console.log("drage ", e);
  eyes.style.top = e.clientY + "px";
  eyes.style.left = e.clientX + "px";
};
eyes.ondragend = (e) => {
  console.log("drage end", e);
  eyes.style.top = e.clientY + "px";
  eyes.style.left = e.clientX + "px";
};

dragElement(eyes);

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    eyeLeftPosition = [
      eyeL.getBoundingClientRect().left + eyeL.clientWidth / 2,
      eyeL.getBoundingClientRect().top + eyeL.clientHeight / 2,
    ];
    eyeRightPosition = [
      eyeR.getBoundingClientRect().left + eyeR.clientWidth / 2,
      eyeR.getBoundingClientRect().top + eyeR.clientHeight / 2,
    ];
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
