function findingPairs() {
  let cards = document.querySelectorAll(".card");
  let numberOfClickedCards = 0;
  let allCardsActive = true;
  let pairs = 0;

  [...cards].forEach((card) => {
    card.addEventListener("click", function () {
      if (allCardsActive == true) {
        numberOfClickedCards++;
        card.classList.toggle("is-flipped");
        Pairs();
      }
      console.log(numberOfClickedCards);
    });
  });

  function Pairs() {
    let isFlipped = Array.from(document.querySelectorAll(".is-flipped"));

    if (isFlipped.length != 0) {
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
              foundPairs[0].parentNode.parentNode.classList.remove("card");
              foundPairs[0].parentNode.parentNode.classList.add("foundCard");
            }, 1100);
            setTimeout(() => {
              foundPairs[1].parentNode.parentNode.classList.remove("card");
              foundPairs[1].parentNode.parentNode.classList.add("foundCard");
              allCardsActive = true;
            }, 1100);
            pairs++;
            if (pairs == numbers.length / 2) {
              console.log("vége");
              let scenes = document.querySelectorAll(".scene");
              setTimeout(() => {
                scenes.forEach((scene) => {
                  scene.remove();
                });
                let end = document.createElement("p");
                end.innerHTML =
                  "Congratulations!\n <span> You found all the pairs! </span>";
                end.classList.add("end", "row", "justify-content-center");
                container.appendChild(end);
              }, 3000);
            }

            console.log("pair");
            console.log(foundPairs[0].parentNode.parentNode.children);
          }
        });
        numberOfClickedCards = 0;
      }
    } else {
      numberOfClickedCards = 0;
    }
  }
}
