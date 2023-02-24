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

const sizeCB = Array.from(document.getElementsByClassName("sizeCB"));
const sizeBB = Array.from(document.getElementsByClassName("sizeBB"));
const sizeFB = Array.from(document.getElementsByClassName("sizeFB"));
const sizePB = Array.from(document.getElementsByClassName("sizePB"));
const sizeAB = Array.from(document.getElementsByClassName("sizeAB"));
const sizeTB = Array.from(document.getElementsByClassName("sizeTB"));

/*function of appearing and disappearing of the submenu*/

function setAppearance(size, className) {
  size.forEach((element) => {
    if (element.style.display == "block") {
      element.style.display = "none";
      element.classList.remove(className);
    } else {
      element.style.display = "block";
      setTimeout(() => {
        element.classList.add(className);
      }, 500);
    }
  });
}

function disappearing(size, className) {
  size.forEach((element) => {
    if (element.style.display == "block") {
      element.style.display = "none";
      element.classList.remove(className);
    }
  });
}

/*menu*/

coffee.addEventListener("click", function () {
  setAppearance(sizeC, "hoverC");
  disappearing(sizeB, "hoverB");
  disappearing(sizeF, "hoverF");
  disappearing(sizeP, "hoverP");
  disappearing(sizeA, "hoverA");
  disappearing(sizeT, "hoverT");
});

building.addEventListener("click", function () {
  setAppearance(sizeB, "hoverB");
  disappearing(sizeC, "hoverC");
  disappearing(sizeF, "hoverF");
  disappearing(sizeP, "hoverP");
  disappearing(sizeA, "hoverA");
  disappearing(sizeT, "hoverT");
});

fruit.addEventListener("click", function () {
  setAppearance(sizeF, "hoverF");
  disappearing(sizeC, "hoverC");
  disappearing(sizeB, "hoverB");
  disappearing(sizeP, "hoverP");
  disappearing(sizeA, "hoverA");
  disappearing(sizeT, "hoverT");
});

plant.addEventListener("click", function () {
  setAppearance(sizeP, "hoverP");
  disappearing(sizeC, "hoverC");
  disappearing(sizeB, "hoverB");
  disappearing(sizeF, "hoverF");
  disappearing(sizeA, "hoverA");
  disappearing(sizeT, "hoverT");
});

animal.addEventListener("click", function () {
  setAppearance(sizeA, "hoverA");
  disappearing(sizeC, "hoverC");
  disappearing(sizeB, "hoverB");
  disappearing(sizeF, "hoverF");
  disappearing(sizeP, "hoverP");
  disappearing(sizeT, "hoverT");
});

travel.addEventListener("click", function () {
  setAppearance(sizeT, "hoverT");
  disappearing(sizeC, "hoverC");
  disappearing(sizeB, "hoverB");
  disappearing(sizeF, "hoverF");
  disappearing(sizeP, "hoverP");
  disappearing(sizeA, "hoverA");
});

let numOfCards;

function submenu(items, theme) {
  items.forEach((item) => {
    item.addEventListener("click", function () {
      switch (item) {
        case items[0]:
          numOfCards = 12;
          break;
        case items[1]:
          numOfCards = 16;
          break;
        case items[2]:
          numOfCards = 20;
          break;
        case items[3]:
          numOfCards = 24;
          break;
      }
      setAppearance(items);
      deleteCards();
      putCards(theme, numOfCards);
      findingPairs();
    });
  });
}

submenu(sizeC, "coffee");
submenu(sizeB, "building");
submenu(sizeF, "fruit");
submenu(sizeP, "plant");
submenu(sizeA, "animal");
submenu(sizeT, "travel");

/*burger menu*/

coffeeBurger.onclick = function () {
  setAppearance(sizeCB, "hoverCB");
  disappearing(sizePB, "hoverPB");
  disappearing(sizeBB, "hoverBB");
  disappearing(sizeFB, "hoverFB");
  disappearing(sizeAB, "hoverAB");
  disappearing(sizeTB, "hoverTB");
};

buildingBurger.onclick = function () {
  setAppearance(sizeBB, "hoverBB");
  disappearing(sizePB, "hoverPB");
  disappearing(sizeCB, "hoverCB");
  disappearing(sizeFB, "hoverFB");
  disappearing(sizeAB, "hoverAB");
  disappearing(sizeTB, "hoverTB");
};

fruitBurger.onclick = function () {
  setAppearance(sizeFB, "hoverFB");
  disappearing(sizePB, "hoverPB");
  disappearing(sizeCB, "hoverCB");
  disappearing(sizeBB, "hoverBB");
  disappearing(sizeAB, "hoverAB");
  disappearing(sizeTB, "hoverTB");
};

plantBurger.onclick = function () {
  setAppearance(sizePB, "hoverPB");
  disappearing(sizeFB, "hoverFB");
  disappearing(sizeCB, "hoverCB");
  disappearing(sizeBB, "hoverBB");
  disappearing(sizeAB, "hoverAB");
  disappearing(sizeTB, "hoverTB");
};

animalBurger.onclick = function () {
  setAppearance(sizeAB, "hoverAB");
  disappearing(sizeFB, "hoverFB");
  disappearing(sizeCB, "hoverCB");
  disappearing(sizeBB, "hoverBB");
  disappearing(sizePB, "hoverPB");
  disappearing(sizeTB, "hoverTB");
};

travelBurger.onclick = function () {
  setAppearance(sizeTB, "hoverTB");
  disappearing(sizeFB, "hoverFB");
  disappearing(sizeCB, "hoverCB");
  disappearing(sizeBB, "hoverBB");
  disappearing(sizeAB, "hoverAB");
  disappearing(sizePB, "hoverPB");
};

function submenuBurger(items, theme) {
  items.forEach((item) => {
    item.addEventListener("click", function () {
      switch (item) {
        case items[0]:
          numOfCards = 12;
          break;
        case items[1]:
          numOfCards = 16;
          break;
        case items[2]:
          numOfCards = 20;
          break;
        case items[3]:
          numOfCards = 24;
          break;
      }
      setAppearance(items);
      deleteCards();
      putCards(theme, numOfCards);
      findingPairs();
      document.getElementById("myModal").style.display = "none";
    });
  });
}

submenuBurger(sizeCB, "coffee");
submenuBurger(sizeBB, "building");
submenuBurger(sizeFB, "fruit");
submenuBurger(sizePB, "plant");
submenuBurger(sizeAB, "animal");
submenuBurger(sizeTB, "travel");
