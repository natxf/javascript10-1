const ex1_button = document.getElementById("ex1_button");
const ex1_content = document.getElementById("ex1_content");
const ex2_content = document.getElementById("ex2_content");
const ex2_text = document.getElementById("ex2_text");
const ex3_element = document.getElementById("ex3_element");
const ex3_one = document.getElementById("ex3_one");
const ex3_two = document.getElementById("ex3_two");

function zadanieJeden(e) {
  let buttonNum = "0";

  for (let num = 1; num < 10; num++) {
    buttonNum += "," + num;
  }

  ex1_content.innerText = buttonNum;
}

function zadanieDrugie(e) {
  const text = e.target.value;
  if (text.length !== 9) {
    ex2_content.innerText = "Długość numeru musi być równa 9";
    return;
  }
  if (/[A-z]+/.test(text)) {
    ex2_content.innerText = "Numer nie może zawierać liter";
    return;
  }
  if (/\d{9}/gm.test(text)) {
    ex2_content.innerText = "Numer telefonu jest poprawny";
    return;
  }
  ex2_content.innerText = "Numer nie może zawierać znaków specjalnych";
}

function zadanieTrzecie(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.dropEffect = "move";
}

function handleDragover(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  e.target.appendChild(document.getElementById(data));
}

ex3_one.addEventListener("dragover", handleDragover);
ex3_one.addEventListener("drop", handleDrop);
ex3_two.addEventListener("dragover", handleDragover);
ex3_two.addEventListener("drop", handleDrop);

ex1_button.addEventListener("click", zadanieJeden);
ex2_text.addEventListener("input", zadanieDrugie);
ex3_element.addEventListener("dragstart", zadanieTrzecie);

