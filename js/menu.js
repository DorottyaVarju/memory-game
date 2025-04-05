const sizes = [12, 16, 20, 24];
const topics = ['coffee', 'building', 'fruit', 'plant', 'animal', 'travel'];
const sizeElements = Array.from(document.getElementsByClassName("size"));
const burgerMenuIcon = document.getElementsByClassName("burger-menu-icon")[0];
let selectedSize, selectedTopic;

const setupSizeSelection = (sizeElements) => {
  sizeElements.forEach((sizeElement) => {
    sizeElement.classList.remove("selected");
    if (sizeElement.style.opacity == 0) {
      sizeElement.style.opacity = 1;
      sizeElement.addEventListener("click", function () {
        sizeElements.forEach(function (sizeElement) {
          sizeElement.classList.remove("selected");
        });
        sizeElement.classList.add("selected");
      })
    }
  });
}

const handleTopicSelection = (topics) => {
  topics.forEach((topic, index) => {
    const topicElement = document.getElementById(topic);

    topicElement.addEventListener("click", function () {
      let otherTopics = topics.filter((_, i) => i !== index);
      deleteCards(otherTopics);
      topicElement.classList.add("selected");
      otherTopics.forEach((otherTopic) => {
        const otherTopicElement = document.getElementById(otherTopic);
        otherTopicElement.classList.remove("selected");
      })
      const computedStyle = window.getComputedStyle(burgerMenuIcon);
      if(computedStyle.display === "none"){
        console.log(sizeElements);
        setupSizeSelection(sizeElements);
      } else {
        const burgerSizeElements = Array.from(document.getElementsByClassName(topic + "-size"));
        burgerSizeElements.forEach((burgerSizeElement, index) => {
          burgerSizeElement.style.display = "block";
        })
        setupSizeSelection(burgerSizeElements);
      }
    });
  })
}

const handleSizeSelection = (sizeElements, selectedTopic) => {
  sizeElements.forEach((sizeElement, index) => {
    sizeElement.addEventListener("click", function () {

      topics.forEach((topic, index) => {
        const topicElement = document.getElementById(topic);

        if (topicElement.classList.contains("selected")) {
          selectedTopic = topic;
        }
      })
      selectedSize = sizes[index];
      setupSizeSelection(sizeElements);
      deleteCards();
      putCards(selectedTopic, selectedSize);
      findingPairs();
    });
  });
}

handleTopicSelection(topics);
handleSizeSelection(sizeElements, selectedTopic);

/*burger menu*/

const topicsBurger = topics.map((topic) => {
  return topic+"-burger";
});

handleTopicSelection(topicsBurger);

// const coffeeBurger = document.getElementById("coffeeBurger");
// const buildingBurger = document.getElementById("buildingBurger");
// const fruitBurger = document.getElementById("fruitBurger");
// const plantBurger = document.getElementById("plantBurger");
// const animalBurger = document.getElementById("animalBurger");
// const travelBurger = document.getElementById("travelBurger");

// const sizeBurger = Array.from(document.getElementsByClassName("sizeBurger"));

// function disappearing(size, className) {
//   size.forEach((element) => {
//     if (element.style.opacity == 1) {
//       element.style.opacity = 0;
//       element.classList.remove(className);
//     }
//   });
// }

// coffeeBurger.onclick = function () {
//   setupSizeSelection(sizeBurger);
// };

// buildingBurger.onclick = function () {
//   setupSizeSelection(sizeBurger);
// };

// fruitBurger.onclick = function () {
//   setupSizeSelection(sizeBurger);

// };

// plantBurger.onclick = function () {
//   setupSizeSelection(sizeBurger);

// };

// animalBurger.onclick = function () {
//   setupSizeSelection(sizeBurger);

// };

// travelBurger.onclick = function () {
//   setupSizeSelection(sizeBurger);

// };

// function submenuBurger(items, topic) {
//   items.forEach((item) => {
//     item.addEventListener("click", function () {
//       switch (item) {
//         case items[0]:
//           selectedSize = 12;
//           break;
//         case items[1]:
//           selectedSize = 16;
//           break;
//         case items[2]:
//           selectedSize = 20;
//           break;
//         case items[3]:
//           selectedSize = 24;
//           break;
//       }
//       setupSizeSelection(items);
//       deleteCards();
//       putCards(topic, selectedSize);
//       findingPairs();
//       document.getElementById("myModal").style.display = "none";
//     });
//   });
// }

// submenuBurger(sizeBurger, "coffee");
// submenuBurger(sizeBurger, "building");
// submenuBurger(sizeBurger, "fruit");
// submenuBurger(sizeBurger, "plant");
// submenuBurger(sizeBurger, "animal");
// submenuBurger(sizeBurger, "travel");
