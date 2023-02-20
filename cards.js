const container = document.getElementsByClassName("container")[1];

/*put into the "numbers" array the numbers between 0 and the given size in a random order*/

let numbers;
function randomizeNumbers(size) {
  numbers = Array.from({ length: size }, (_, i) => i);
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
}

/*function of generating the images in a random order and putting the cards onto screen*/

function putCards(topic, size) {
  randomizeNumbers(size);
  let j;
  let num;
  let col="col-2";
  if(screen.width>screen.height && screen.width > 992) {
    switch(numbers.length) {
      case 12: num = 4;break;
      case 16: num = 4;break;
      case 20: num = 5;break;
      case 24: num = 6;break;
    }
  }
  else {
    container.style.marginLeft = "25%";
    switch(numbers.length) {
      case 12: num = 3;col="col-4";break;
      case 16: num = 2;col="col-6";break;
      case 20: num = 2;col="col-6";break;
      case 24: num = 3;col="col-4";break;
    }
  }

  for (j = 0; j < numbers.length/num; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    let rows = Array.from(document.getElementsByClassName("row"));
    let k;
    for (k = 0; k < num; k++) {
      let scene = document.createElement("div");
        scene.classList.add(col, "scene", "scene--card");
      rows[j].appendChild(scene);
    }
  }

  let i;
  for (i = 0; i < numbers.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let scenes = Array.from(document.getElementsByClassName("scene"));
    scenes[i].appendChild(card);

    let face = document.createElement("div");
    face.classList.add("card__face", "card__face--front");
    let cardDivs = Array.from(document.getElementsByClassName("card"));
    cardDivs[i].appendChild(face);

    let back = document.createElement("div");
    back.classList.add("box", "card__face", "card__face--back");
    cardDivs[i].appendChild(back);

    let image = document.createElement("img");
    image.classList.add("images");
    if (numbers[i] >= numbers.length / 2) {
      image.src =
        "pics/" + topic + "/" + (numbers[i] - numbers.length / 2) + ".jpg";
    } else {
      image.src = "pics/" + topic + "/" + numbers[i] + ".jpg";
    }
    image.style.height = "100%";
    image.style.width = "100%";
    let boxes = Array.from(document.getElementsByClassName("box"));
    boxes[i].appendChild(image);
  }
}

/*function of deleting the previous cards before generating new ones onto the screen*/

function deleteCards() {
  const images = document.getElementsByClassName("images");
  const row = document.getElementsByClassName("row");
  const scene = document.getElementsByClassName("scene");
  const card = document.getElementsByClassName("card");
  const card__face = document.getElementsByClassName("card__face");
  while (row.length > 0) {
    row[0].remove();
  }
  while (scene.length > 0) {
    scene[0].remove();
  }
  while (card.length > 0) {
    card[0].remove();
  }
  while (card__face.length > 0) {
    card__face[0].remove();
  }
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }
}