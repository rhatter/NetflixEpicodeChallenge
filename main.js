window.onload = (e) => {
  landingCreation(dataNavbar);
  searcShowed();
  attrSearch();
  createCarousel(dataCards);
  createCarousel(dataCards);
  createCarousel(dataCards);
  createCarousel(dataCards);
  createCarousel(dataCards);
  createCarousel(dataCards);
  translateLeft();
  translateRight();
  assignWrapping();
  attributeOpacity();
  attrEnter();
};

//popolo la landing
function landingCreation(a) {
  for (dropodown of a) {
    let dropElmt = document.createElement("li");
    dropElmt.classList.add("nav-item");
    dropElmt.classList.add("dropdown");
    let dropTitleHTML = `
    <a
    class="nav-link"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    ${dropodown.title}
  </a>`;
    dropElmt.innerHTML = dropTitleHTML;
    document.getElementById("dataNavbarDest").appendChild(dropElmt);
  }
}
function searcShowed() {
  document.querySelector(".lens").addEventListener("click", function () {
    document.querySelector(".searchMovies > input").classList.toggle("showed");
    document.querySelector(".searchMovies").classList.toggle("showed");
  });
}

//creazione carosello
let indexCarousel = 1;
function createCarousel(a) {
  let dest =
    document.getElementsByClassName("cardsCaruselArea")[indexCarousel - 1];
  for (card of a) {
    let node = document.createElement("div");
    node.classList.add("col-md-5");
    node.classList.add("col-lg-4");
    node.classList.add("col-xl-3");
    node.classList.add("col-xxl-2");
    node.classList.add("col-sm-6");
    node.classList.add("col-12");
    node.classList.add("columnOfCard");
    let cardHTML = createCard(card);
    node.innerHTML = cardHTML;
    dest.appendChild(node);
  }
  indexCarousel++;
}

function createCard(a) {
  let totalHMTL = `
            <div class="card">
              <img
                src="${a.img}"
                class="card-img-top"
                alt="..."
              />
            </div>
  `;
  return totalHMTL;
}

function translateLeft() {
  let buttons = document.getElementsByClassName("rightScorr");
  let a = 0;
  for (button of buttons) {
    button.addEventListener("click", (e) => {
      let oppositeButt = e;
      oppositeButt.target.parentElement.childNodes[1].classList.remove("hide");
      let card = e.target.nextSibling.nextSibling;
      if (window.innerWidth >= 1400) {
        //xl
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (
          parseInt(card.style.left) <=
          -100 * (card.childElementCount / 6 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
        }
      } else if (window.innerWidth >= 1200) {
        //lg
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (
          parseInt(card.style.left) <=
          -100 * (card.childElementCount / 4 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
        }
      } else if (window.innerWidth >= 992) {
        //md
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (
          parseInt(card.style.left) <=
          -100 * (card.childElementCount / 3 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
        }
      } else if (window.innerWidth >= 768) {
        //sm
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (
          parseInt(card.style.left) <=
          -100 * (card.childElementCount / 2.5 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
        }
      } else if (window.innerWidth >= 576) {
        //xs
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (
          parseInt(card.style.left) <=
          -100 * (card.childElementCount / 2 - 1)
        ) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
        }
      } else {
        if (card.style.left === "") {
          card.style.left = "-100%";
        } else if (parseInt(card.style.left) <= -100 * (dataCards.length - 1)) {
        } else {
          card.style.left = parseInt(card.style.left) - 100 + "%";
        }
      }
    });
    a++;
  }
}

function translateRight() {
  let buttons = document.getElementsByClassName("leftScorr");
  let b = 0;
  for (button of buttons) {
    button.addEventListener("click", (e) => {
      let card = e.target.nextSibling.nextSibling.nextSibling.nextSibling;
      if (card.style.left === "" || card.style.left === "0%") {
      } else if (card.style.left === "100%") {
      } else {
        card.style.left = parseInt(card.style.left) + 100 + "%";
      }
      if (parseInt(card.style.left) === 0) {
        e.target.classList.add("hide");
      }
    });
    b++;
  }
}

window.addEventListener(
  "resize",
  () => {
    const { clientWidth } = document.documentElement;
    let cardInCarousel = document.getElementsByClassName("cardsCaruselArea");
    for (card of cardInCarousel) {
      if (clientWidth >= 1400) {
        if (parseInt(card.style.left) <= -400) {
          card.style.left = "-200%";
        }
      } else if (clientWidth >= 1200) {
        if (parseInt(card.style.left) <= -500) {
          card.style.left = "-400%";
        }
      } else if (clientWidth >= 992) {
        if (parseInt(card.style.left) <= -700) {
          card.style.left = "-500%";
        }
      } else if (clientWidth >= 768) {
        if (parseInt(card.style.left) <= -800) {
          card.style.left = "-700%";
        }
      } else if (clientWidth >= 576) {
        if (parseInt(card.style.left) <= -1700) {
          card.style.left = "-800%";
        }
      }
    }
  },
  {
    passive: true,
  }
);

function wrapping() {
  let areas = document.querySelectorAll(".cardsCaruselArea");
  for (area of areas) {
    area.classList.toggle("wrapped");
  }
  let left = document.querySelectorAll(".leftScorr ");
  let right = document.querySelectorAll(".rightScorr ");
  let arr = [left, right];
  for (i of arr) {
    for (butt of i) {
      butt.classList.toggle("hide2");
    }
  }
  let styleButts = document.querySelectorAll(".selectStyle");
  for (styleButt of styleButts) {
    styleButt.classList.toggle("inactiveGrid");
  }
  let cardInCarousel = document.getElementsByClassName("cardsCaruselArea");
  for (card of cardInCarousel) {
    card.style.left = "0%";
  }
  attributeOpacity();
}
function assignWrapping() {
  let butts = document.querySelectorAll(".selectStyle");
  for (butt of butts) {
    butt.addEventListener("click", function () {
      wrapping();
    });
  }
}

window.addEventListener(
  "scroll",
  () => {
    let scrollPos = window.scrollY;
    let pageHeight = window.innerHeight;
    let areasThatAppear = document.getElementsByClassName("carouselArea");
    for (area of areasThatAppear) {
      if (area.offsetTop < pageHeight + scrollPos) {
        area.classList.add("fullOpacity");
      } else {
        area.classList.remove("fullOpacity");
      }
    }
  },
  {
    passive: true,
  }
);

function attributeOpacity() {
  let scrollPos = window.scrollY;
  let pageHeight = window.innerHeight;
  let areasThatAppear = document.getElementsByClassName("carouselArea");
  for (area of areasThatAppear) {
    if (area.offsetTop < pageHeight + scrollPos) {
      area.classList.add("fullOpacity");
    } else {
      area.classList.remove("fullOpacity");
    }
  }
}

function populateSearch(a) {
  let toSearch = document.querySelector(".searchMovies > input").value;
  let searchedCards = a.filter((e) => e.name.toLowerCase().includes(toSearch));
  if (searchedCards.length !== 0) {
    let dest = document.getElementsByClassName("cardsCaruselArea")[0];
    dest.innerHTML = "";
    for (card of searchedCards) {
      let node = document.createElement("div");
      node.classList.add("col-md-5");
      node.classList.add("col-lg-4");
      node.classList.add("col-xl-3");
      node.classList.add("col-xxl-2");
      node.classList.add("col-sm-6");
      node.classList.add("col-12");
      node.classList.add("columnOfCard");
      node.classList.add("noshow");
      let cardHTML = createCard(card);
      node.innerHTML = cardHTML;
      dest.appendChild(node);
    }
    dest.style.left = "0%";
    const { clientWidth } = document.documentElement;
    if (dest.scrollWidth < clientWidth) {
      document.querySelector(".rightScorr").style.display = "none";
    } else {
      document.querySelector(".rightScorr").style.display = "flex";
    }
    document.querySelector(".titleCaruselArea > p").textContent = "Searched";
    document.querySelector(".leftScorr").style.display = "none";
    setTimeout(function () {
      [...document.querySelectorAll(".noshow")].forEach(function (e) {
        e.classList.remove("noshow");
      });
    }, 600);
  }
}

function attrSearch() {
  document.querySelector(".lens").addEventListener("click", function () {
    if (
      !document
        .querySelector(".searchMovies > input")
        .classList.contains("showed")
    ) {
      populateSearch(dataCards);
    }
  });
}

function attrEnter() {
  document
    .querySelector(".searchMovies > input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".lens").click();
      }
    });
}
