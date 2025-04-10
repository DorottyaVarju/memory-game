const findingPairs = () => {
  let cards = document.querySelectorAll(".card");
  let numberOfClickedCards = 0;
  let allCardsActive = true;
  let numberOfFoundPairs = 0;

  [...cards].forEach((card) => {
    card.addEventListener("click", function () {
      if (allCardsActive == true) {
        numberOfClickedCards++;
        card.classList.toggle("is-flipped");
        checkForPair();
      }
    });
  });

  const checkForPair = () => {
    let isFlipped = Array.from(document.querySelectorAll(".is-flipped"));
    if (isFlipped.length != 0) {
      if (numberOfClickedCards == 2) {
        allCardsActive = false;
        let pairsToCheck = [];
        let srcOfpairsToCheck = [];

        isFlipped.forEach((element) => {
          let nameOfImg = element.lastElementChild.firstChild;
          pairsToCheck.push(nameOfImg);
          srcOfpairsToCheck.push(nameOfImg.getAttribute("src"));

          if (srcOfpairsToCheck[0] != srcOfpairsToCheck[1]) {
            setTimeout(() => {
              element.classList.toggle("is-flipped");
              allCardsActive = true;
            }, 1100);
          } else {
            handleFoundPair(pairsToCheck);
            numberOfFoundPairs++;
            if (numberOfFoundPairs == randomNumbers.length / 2) {
              handleGameOver();
            }
          }
        });
        numberOfClickedCards = 0;
      }
    } else {
      numberOfClickedCards = 0;
    }
  }
}

const handleFoundPair = (foundPairs) => {
  setTimeout(() => {
    foundPairs.forEach((foundPair) => {
      foundPair.parentNode.parentNode.classList.remove("is-flipped");
      foundPair.parentNode.parentNode.classList.remove("card");
      let div1 = document.createElement("div");
      div1.classList.add("foundCard");
      foundPair.parentNode.parentNode.parentNode.appendChild(div1);
      foundPair.parentNode.parentNode.remove();
    })
    allCardsActive = true;
  }, 1100);
}

const handleGameOver = () => {
  let rows = Array.from(document.querySelectorAll(".row"));
  rows.forEach((row) => row.classList.add("fade"));
  setTimeout(() => {
    rows.forEach((row) => row.remove());
    showMessage("Congratulations!", "You found all the pairs!", true);
  }, 2000);
}

const showMessage = (innerHtmlH1, innertHtmlH2, isGameEnded) => {
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  h1.innerHTML = innerHtmlH1;
  h2.innerHTML = innertHtmlH2;
  h1.classList.add("row");
  h2.classList.add("row");
  if(isGameEnded){
    h1.classList.add("end");
    h2.classList.add("end");
  }
  playingArea.appendChild(h1);
  playingArea.appendChild(h2);
}
