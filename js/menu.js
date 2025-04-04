const coffee = document.getElementById("coffee");
const building = document.getElementById("building");
const fruit = document.getElementById("fruit");
const plant = document.getElementById("plant");
const animal = document.getElementById("animal");
const travel = document.getElementById("travel");

const size = Array.from(document.getElementsByClassName("size"));

const coffeeBurger = document.getElementById("coffeeBurger");
const buildingBurger = document.getElementById("buildingBurger");
const fruitBurger = document.getElementById("fruitBurger");
const plantBurger = document.getElementById("plantBurger");
const animalBurger = document.getElementById("animalBurger");
const travelBurger = document.getElementById("travelBurger");

const sizeBurger = Array.from(document.getElementsByClassName("sizeBurger"));

function appear(size) {
  size.forEach((element) => {
    element.classList.remove("selected");
    if (element.style.opacity == 0) {
      element.style.opacity = 1;
      element.addEventListener("click", function () {
        size.forEach(function (item) {
          item.classList.remove("selected");
        });
        element.classList.add("selected");
      })
    }
  });
}

function disappearing(size, className) {
  size.forEach((element) => {
    if (element.style.opacity == 1) {
      element.style.opacity = 0;
      element.classList.remove(className);
    }
  });
}

/*menu*/

coffee.addEventListener("click", function () {
  coffee.classList.add("selected");
  building.classList.remove("selected");
  fruit.classList.remove("selected");
  plant.classList.remove("selected");
  animal.classList.remove("selected");
  travel.classList.remove("selected");
  appear(size);
});

building.addEventListener("click", function () {
  building.classList.add("selected");
  coffee.classList.remove("selected");
  fruit.classList.remove("selected");
  plant.classList.remove("selected");
  animal.classList.remove("selected");
  travel.classList.remove("selected");
  appear(size);
});

fruit.addEventListener("click", function () {
  fruit.classList.add("selected");
  coffee.classList.remove("selected");
  building.classList.remove("selected");
  plant.classList.remove("selected");
  animal.classList.remove("selected");
  travel.classList.remove("selected");
  appear(size);
});

plant.addEventListener("click", function () {
  plant.classList.add("selected");
  coffee.classList.remove("selected");
  building.classList.remove("selected");
  fruit.classList.remove("selected");
  animal.classList.remove("selected");
  travel.classList.remove("selected");
  appear(size);
});

animal.addEventListener("click", function () {
  animal.classList.add("selected");
  coffee.classList.remove("selected");
  building.classList.remove("selected");
  fruit.classList.remove("selected");
  plant.classList.remove("selected");
  travel.classList.remove("selected");
  appear(size);
});

travel.addEventListener("click", function () {
  travel.classList.add("selected");
  coffee.classList.remove("selected");
  building.classList.remove("selected");
  fruit.classList.remove("selected");
  plant.classList.remove("selected");
  animal.classList.remove("selected");
  appear(size);
});

let numOfCards;
let topic;

function submenu(items, topic) {
  items.forEach((item) => {
    item.addEventListener("click", function () {

      if (coffee.classList.contains("selected")) {
        topic = "coffee";
      } else if (building.classList.contains("selected")) {
        topic = "building";
      } else if (fruit.classList.contains("selected")) {
        topic = "fruit";
      } else if (plant.classList.contains("selected")) {
        topic = "plant";
      } else if (animal.classList.contains("selected")) {
        topic = "animal";
      } else if (travel.classList.contains("selected")) {
        topic = "travel";
      }
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
      appear(items);
      deleteCards();
      putCards(topic, numOfCards);
      findingPairs();
    });
  });
}

submenu(size, topic);

/*burger menu*/

coffeeBurger.onclick = function () {
  appear(sizeBurger);
};

buildingBurger.onclick = function () {
  appear(sizeBurger);
};

fruitBurger.onclick = function () {
  appear(sizeBurger);

};

plantBurger.onclick = function () {
  appear(sizeBurger);

};

animalBurger.onclick = function () {
  appear(sizeBurger);

};

travelBurger.onclick = function () {
  appear(sizeBurger);

};

function submenuBurger(items, topic) {
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
      appear(items);
      deleteCards();
      putCards(topic, numOfCards);
      findingPairs();
      document.getElementById("myModal").style.display = "none";
    });
  });
}

submenuBurger(sizeBurger, "coffee");
submenuBurger(sizeBurger, "building");
submenuBurger(sizeBurger, "fruit");
submenuBurger(sizeBurger, "plant");
submenuBurger(sizeBurger, "animal");
submenuBurger(sizeBurger, "travel");
