/*grabbing the menu items*/

const coffee = document.getElementById("coffee");
const building = document.getElementById("building");
const fruit = document.getElementById("fruit");
const plant = document.getElementById("plant");
const animal = document.getElementById("animal");
const travel = document.getElementById("travel");

const coffeeBurger = document.getElementById("coffeeBurger");
const buildingBurger = document.getElementById("buildingBurger");
const fruitBurger = document.getElementById("fruitBurger");
const plantBurger = document.getElementById("plantBurger");
const animalBurger = document.getElementById("animalBurger");
const travelBurger = document.getElementById("travelBurger");

const sizeC = Array.from(document.getElementsByClassName("sizeC"));
const sizeB = Array.from(document.getElementsByClassName("sizeB"));
const sizeF = Array.from(document.getElementsByClassName("sizeF"));
const sizeP = Array.from(document.getElementsByClassName("sizeP"));
const sizeA = Array.from(document.getElementsByClassName("sizeA"));
const sizeT = Array.from(document.getElementsByClassName("sizeT"));

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

/*placing the cards with the selected theme in a random order, when the user clicks on a theme
when the user picks a theme from the burger menu, let the "modalmenu" disappear*/

function putCards(topic, size) {
  randomizeNumbers(size);
  let j;
  for (j = 0; j < numbers.length / 4; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    let rows = Array.from(document.getElementsByClassName("row"));
    let k;
    for (k = 0; k < 4; k++) {
      let scene = document.createElement("div");
      scene.classList.add("col-2", "scene", "scene--card");
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

function disappear(size) {
  size.forEach((element) => {
    if (element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

let size;

sizeC.forEach((element) => {
  element.addEventListener("click", function () {
    switch(element) {
      case sizeC[0]: size=12; break;
      case sizeC[1]: size=16; break;
      case sizeC[2]: size=20; break;
      case sizeC[3]: size=24; break;
    }
    disappear(sizeC);
    deleteCards();
    putCards("coffee", size);
    findingPairs();
  });
});

sizeB.forEach((element) => {
  element.addEventListener("click", function () {
    switch(element) {
      case sizeB[0]: size=12; break;
      case sizeB[1]: size=16; break;
      case sizeB[2]: size=20; break;
      case sizeB[3]: size=24; break;
    }
    disappear(sizeB);
    deleteCards();
    putCards("building", size);
    findingPairs();
  });
});

sizeF.forEach((element) => {
  element.addEventListener("click", function () {
    switch(element) {
      case sizeF[0]: size=12; break;
      case sizeF[1]: size=16; break;
      case sizeF[2]: size=20; break;
      case sizeF[3]: size=24; break;
    }
    disappear(sizeF);
    deleteCards();
    putCards("fruit", size);
    findingPairs();
  });
});

sizeP.forEach((element) => {
  element.addEventListener("click", function () {
    switch(element) {
      case sizeP[0]: size=12; break;
      case sizeP[1]: size=16; break;
      case sizeP[2]: size=20; break;
      case sizeP[3]: size=24; break;
    }
    disappear(sizeP);
    deleteCards();
    putCards("plant", size);
    findingPairs();
  });
});

sizeA.forEach((element) => {
  element.addEventListener("click", function () {
    switch(element) {
      case sizeA[0]: size=12; break;
      case sizeA[1]: size=16; break;
      case sizeA[2]: size=20; break;
      case sizeA[3]: size=24; break;
    }
    disappear(sizeA);
    deleteCards();
    putCards("animal", size);
    findingPairs();
  });
});

sizeT.forEach((element) => {
  element.addEventListener("click", function () {
    switch(element) {
      case sizeT[0]: size=12; break;
      case sizeT[1]: size=16; break;
      case sizeT[2]: size=20; break;
      case sizeT[3]: size=24; break;
    }
    disappear(sizeT);
    deleteCards();
    putCards("travel", size);
    findingPairs();
  });
});

coffeeBurger.onclick = function () {
  document.getElementById("myModal").style.display = "none";
  deleteCards();
  putCards("coffee");
};

coffee.addEventListener("click", function () {
  disappear(sizeC);
});

building.addEventListener("click", function () {
  disappear(sizeB);
});

fruit.addEventListener("click", function () {
  disappear(sizeF);
});

plant.addEventListener("click", function () {
  disappear(sizeP);
});

animal.addEventListener("click", function () {
  disappear(sizeA);
});

travel.addEventListener("click", function () {
  disappear(sizeT);
});

buildingBurger.onclick = function () {
  document.getElementById("myModal").style.display = "none";
  deleteCards();
  putCards("building");
};

fruitBurger.onclick = function () {
  document.getElementById("myModal").style.display = "none";
  deleteCards();
  putCards("fruit");
};

plantBurger.onclick = function () {
  document.getElementById("myModal").style.display = "none";
  deleteCards();
  putCards("plant");
};

animalBurger.onclick = function () {
  document.getElementById("myModal").style.display = "none";
  deleteCards();
  putCards("animal");
};

travelBurger.onclick = function () {
  document.getElementById("myModal").style.display = "none";
  deleteCards();
  putCards("travel");
};

function findingPairs() {
  let cards = document.querySelectorAll(".card");
  let numberOfClickedCards = 0;
  let allCardsActive = true;

  [...cards].forEach((card) => {
    card.addEventListener("click", function () {
      if (allCardsActive == true) {
        numberOfClickedCards++;
        card.classList.toggle("is-flipped");
        Pairs();
      }
    });
  });

  /* when a user finds a pair, let the cards disappear
   when a user finds two different cards, let them flip back */

  function Pairs() {
    let isFlipped = Array.from(document.querySelectorAll(".is-flipped"));

    if (numberOfClickedCards == 2) {
      allCardsActive = false;
      let foundPairs = [];
      let srcOfImgs = [];

      isFlipped.forEach((element) => {
        let nameOfImg = element.lastElementChild.firstChild;

        foundPairs.push(nameOfImg);
        srcOfImgs.push(nameOfImg.getAttribute("src"));

        if (srcOfImgs[0] != srcOfImgs[1]) {
          setTimeout(() => {
            element.classList.toggle("is-flipped");
            allCardsActive = true;
          }, 1100);
          console.log("not pair");
        } else {
          setTimeout(() => {
            foundPairs[0].parentNode.parentNode.remove();
          }, 1100);
          setTimeout(() => {
            foundPairs[1].parentNode.parentNode.remove();
            allCardsActive = true;
          }, 1100);
          console.log("pair");
        }
      });
      numberOfClickedCards = 0;
    }
  }
}
