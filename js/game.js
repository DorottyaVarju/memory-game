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
          } else {
            setTimeout(() => {
              foundPairs[0].parentNode.parentNode.classList.remove(
                "is-flipped"
              );
              foundPairs[0].parentNode.parentNode.classList.remove("card");
              let div1 = document.createElement("div");
              div1.classList.add("foundCard");
              foundPairs[0].parentNode.parentNode.parentNode.appendChild(div1);
              foundPairs[0].parentNode.parentNode.remove();
            }, 1100);
            setTimeout(() => {
              foundPairs[1].parentNode.parentNode.classList.remove(
                "is-flipped"
              );
              foundPairs[1].parentNode.parentNode.classList.remove("card");
              let div2 = document.createElement("div");
              div2.classList.add("foundCard");
              foundPairs[1].parentNode.parentNode.parentNode.appendChild(div2);
              foundPairs[1].parentNode.parentNode.remove();
              allCardsActive = true;
            }, 1100);
            cards = document.querySelectorAll(".card");
            pairs++;
            if (pairs == numbers.length / 2) {
              let foundCards = Array.from(
                document.querySelectorAll(".foundCard")
              );

              let scenes = document.querySelectorAll(".scene");
              setTimeout(() => {
                scenes.forEach((scene) => {
                  scene.classList.add("fade");
                });
                let end = document.createElement("p");
                end.innerHTML =
                  "Congratulations!\n <span> You found all the pairs! </span>";
                end.classList.add("end", "row", "justify-content-center");
                playingArea.appendChild(end);
              }, 2000);
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
