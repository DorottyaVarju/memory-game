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

function setAppearance(size) {
    size.forEach((element) => {
        console.log(size);
      if (element.style.display == "block") {
        console.log("tüntesd el");
        element.style.display = "none";
      } else {
        console.log("jelenitsd meg");
        element.style.display = "block";
      }
    });
  }
  
  /*menu*/
  
  coffee.addEventListener("click", function () {
    setAppearance(sizeC);
  });
  
  building.addEventListener("click", function () {
    setAppearance(sizeB);
  });
  
  fruit.addEventListener("click", function () {
    setAppearance(sizeF);
  });
  
  plant.addEventListener("click", function () {
    setAppearance(sizeP);
  });
  
  animal.addEventListener("click", function () {
    setAppearance(sizeA);
  });
  
  travel.addEventListener("click", function () {
    setAppearance(sizeT);
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
    setAppearance(sizeCB);
  };
  
  buildingBurger.onclick = function () {
    setAppearance(sizeBB);
  };
  
  fruitBurger.onclick = function () {
    setAppearance(sizeFB);
  };
  
  plantBurger.onclick = function () {
    setAppearance(sizePB);
  };
  
  animalBurger.onclick = function () {
    setAppearance(sizeAB);
  };
  
  travelBurger.onclick = function () {
    setAppearance(sizeTB);
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