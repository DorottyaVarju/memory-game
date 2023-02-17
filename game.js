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