const sizes = [12, 16, 20, 24];
const sizeElements = Array.from(document.getElementsByClassName("size"));
const topics = ['coffee', 'building', 'fruit', 'plant', 'animal', 'travel'];
const topicsBurger = topics.map((topic) => {
  return topic + "-burger";
});
const burgerMenuIcon = document.getElementsByClassName("burger-menu-icon")[0];
const computedStyleBurgerMenuIcon = window.getComputedStyle(burgerMenuIcon);
let selectedSize, selectedTopic, burgerSizeElements;

const clickOnSize = (sizeElement, sizeElements) => {
  sizeElement.addEventListener("click", function () {
    sizeElements.forEach(function (sizeElement) {
      sizeElement.classList.remove("selected");
    });
    sizeElement.classList.add("selected");
  })
}

const setupSizeSelection = (sizeElements) => {
  sizeElements.forEach((sizeElement) => {
    if (computedStyleBurgerMenuIcon.display === "none") {
      sizeElement.classList.remove("selected");
      if (sizeElement.style.opacity == 0) {
        sizeElement.style.opacity = 1;
        clickOnSize(sizeElement, sizeElements);
      }
    } else {
      const allBurgerSizeElement = Array.from(document.getElementsByClassName("burger-size"));
      allBurgerSizeElement.forEach((burgerSizeElement) => {
        burgerSizeElement.style.display = "none";
      })
      sizeElements.forEach((sizeElement) => {
        sizeElement.style.display = "block";
        clickOnSize(sizeElement, sizeElements);
      })
    }
  });
}

const handleTopicSelection = (topics) => {
  topics.forEach((topic, index) => {
    const topicElement = document.getElementById(topic);

    topicElement.addEventListener("click", function () {
      let otherTopics = topics.filter((_, i) => i !== index);
      deleteCards();
      topicElement.classList.add("selected");
      topics.forEach((topic) => {
        const topicElement = document.getElementById(topic);

        if (topicElement.classList.contains("selected")) {
          if (topic.endsWith('-burger')) {
            selectedTopic = topic.slice(0, -7);
          } else {
            selectedTopic = topic;
          }
        }
      })
      otherTopics.forEach((otherTopic) => {
        const otherTopicElement = document.getElementById(otherTopic);
        otherTopicElement.classList.remove("selected");
      })
      if (computedStyleBurgerMenuIcon.display === "none") {
        setupSizeSelection(sizeElements);
      } else {
        burgerSizeElements = Array.from(document.getElementsByClassName(topic + "-size"));
        setupSizeSelection(burgerSizeElements);
        handleSizeSelection(burgerSizeElements);
      }
    });
  })
}

const handleSizeSelection = (sizeElements) => {
  sizeElements.forEach((sizeElement, index) => {
    sizeElement.addEventListener("click", function () {
      document.getElementById("burger-menu-modal").style.display = "none";
      selectedSize = sizes[index];
      setupSizeSelection(sizeElements);
      deleteCards();
      putCards(selectedTopic, selectedSize);
      findingPairs();
    });
  });
}

handleTopicSelection(topics);
handleSizeSelection(sizeElements);
handleTopicSelection(topicsBurger);