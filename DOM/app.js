const mainDiv = document.getElementById("main-div");

// OBJECTIVE 1

// create element
const button = document.createElement("button");
const h3 = document.createElement("h3");
button.innerText = "Click me";
button.className = "btn btn-success mb-4";
button.id = "button-one";
h3.innerText = "First Objective";
h3.className = "mb-4";

// appending elements to DOM
mainDiv.prepend(button);
mainDiv.insertBefore(h3, button);

// create event listener
button.addEventListener("click", () => {
  Swal.fire(
    "Difficult and meaningful will always bring more satisfaction than easy and meaningless."
  );
});

// OBJECTIVE 2
const textField = document.getElementById("textarea");
const secondButton = document.getElementById("second-button");

secondButton.addEventListener("click", () => {
  Swal.fire(textField.value);
  textField.value = "";
});

// OBJECTIVE 3
// grab div for colorization
const colorDiv = document.querySelector("#color-div");

// change color on hover
colorDiv.addEventListener("mouseenter", changeColor);

// change color back to original color on mouse leave
colorDiv.addEventListener("mouseleave", e => {
  e.target.style.backgroundColor = "lightgrey";
});

// OBJECTIVE 4
// grab paragraph for colorization
let colorText = document.querySelector("#color-text");

// change color on hover
colorText.addEventListener("click", changeColorText);

// OBJECTIVE 5
// creating elements
const thirdButton = document.getElementById("third-button");
const divForSpan = document.getElementById("div-for-span");

// create event listener and adding span to #second-div
thirdButton.addEventListener("click", () => {
  let span = document.createElement("span");
  span.innerText = "Mirza Hamzic ";
  span.className = "text-info lead";
  divForSpan.appendChild(span);
});

// OBJECTIVE 6
const friends = [
  "Liam",
  "Emma",
  "Noah",
  "Olivia",
  "William",
  "Ava",
  "James",
  "Isabella",
  "Oliver",
  "Sophia"
];

const fourthButton = document.getElementById("fourth-button");
const ul = document.querySelector("ul");
let i = 0;
fourthButton.addEventListener("click", function() {
  let li = document.createElement("li");
  li.innerText = friends[i];
  li.className = "list-group-item";
  ul.appendChild(li);
  i++;
  if (i >= 10) {
    i = 0;
  }
});

// COMMON FUNCTIONS
// change background color
function changeColor(e) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}
// change text color
function changeColorText(e) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  e.target.style.color = `rgb(${r},${g},${b})`;
}
