const playingArea = document.getElementsByClassName("playing-area")[0];
let randomNumbers;

const randomizeNumbers = (size) => {
  randomNumbers = Array.from({ length: size }, (_, i) => i);
  for (let i = randomNumbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomNumbers[i], randomNumbers[j]] = [randomNumbers[j], randomNumbers[i]];
  }
  return randomNumbers;
}

const getNumberOfColumns = () => {
  const isLandscape = screen.width > screen.height && screen.width > 992;
  switch (randomNumbers.length) {
    case 20:
      return isLandscape ? 5 : 4;
    case 24:
      return isLandscape ? 6 : 4;
    default:
      return 4;
  }
}

const createRowElements = (numberOfColumns) => {
  for (let j = 0; j < randomNumbers.length / numberOfColumns; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    playingArea.appendChild(row);

    for (let k = 0; k < numberOfColumns; k++) {
      let scene = document.createElement("div");
      scene.classList.add("scene", "scene--card");
      row.appendChild(scene);
    }
  }
}

const createCardElements = (topic) => {
  const scenes = Array.from(document.getElementsByClassName("scene"));

  randomNumbers.forEach((randomNumber, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    scenes[i].appendChild(card);

    const face = document.createElement("div");
    face.classList.add("card__face", "card__face--front");
    card.appendChild(face);

    const back = document.createElement("div");
    back.classList.add("box", "card__face", "card__face--back");
    card.appendChild(back);

    const image = document.createElement("img");
    image.classList.add("images");

    image.src = "pics/" + topic + "/" + ((randomNumber >= randomNumbers.length / 2) ? randomNumber - randomNumbers.length / 2 : randomNumber) + ".jpg";

    image.style.height = "100%";
    image.style.width = "100%";

    back.appendChild(image);
  })
}

const createCards = (topic, size) => {
  randomizeNumbers(size);
  const numberOfColumns = getNumberOfColumns();
  createRowElements(numberOfColumns);
  createCardElements(topic);
}

const deleteCards = () => {
  const elementsToDelete = ["images", "row", "scene", "card", "card__face", "end"];

  elementsToDelete.forEach((className) => {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].remove();
    }
  });
}