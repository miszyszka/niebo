"use strict";

const winnicaAdditionalSite = `
  <div class="new">
  <h1 class="exitBTN">X</h1>
  <h1>hello world</h1>
  <h2>it is working</h2>
  </div>
`;

const browarAdditionalSite = `
<div class="new">
<h1 class="exitBTN">X</h1>
<h1>hello world</h1>
<h2>it is working</h2>
</div>
`;

const wydarzeniaAdditionalSite = `
<div class="new">
<h1 class="exitBTN">X</h1>
<h1>hello world</h1>
<h2>it is working</h2>
</div>
`;

const domekAdditionalSite = `
  <h1 class="exitBTN">X</h1>
  <div class="learn-more-content domekAdditionalSite">
    <h1>Wynajmij nasz domek</h1>
    <h2 class="domek-opis">Cisza, spokój, las i jezioro. Idealne miejsce na odpoczynek.</h2>
    <div class="c-wrapper">
      <i id="left" class="fa-solid fa-angle-left"><</i>
      <div class="carousel">
        <img src="domek-img/domek-web-8.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-4.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-9.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-5.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-2.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-6.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-7.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-3.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-1.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-10.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-11.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-12.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-13.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-14.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-15.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-16.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-17.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-18.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-19.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-20.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-21.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-22.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-23.jpg" alt="img" draggable="false" />
        <img src="domek-img/domek-web-24.jpg" alt="img" draggable="false" />
      </div>
      <i id="right" class="fa-solid fa-angle-right">></i>
    </div>

    <h3 class="domek-opis">Domek Niebò to świeżo wyremontowany stary domek z bali, który dostał nową duszę i&nbsp;służy do wypoczynku i&nbsp;do ukochania natury dookoła. 
    Jest położony na górce, z&nbsp;której można zejść bezpośrednio do jeziora - ok 30&nbsp;m.</br></br>
    W domu znajdują się 3 sypialnie - jedna na parterze z podwójnym łóżkiem i miejscem do czytania; dwie pozostałe na górnym piętrze pod skosami -&nbsp;w&nbsp;jednej położony jest naturalny materac futon, otoczony poduszkami dla maks. 4 osób, a w drugiej dwa pojedyncze łóżka. 
    Na parterze mieści się również salon z dwie kanapami (w tym jedna rozkładana) i&nbsp;z&nbsp;hamakiem do&nbsp;siadania. Stąd rozpościera się widok na taras i&nbsp;piękne jezioro Mezowskie.
    Na dolnym piętrze znajduje się w&nbsp;pełni wyposażona kuchnia ze stołem dla 6-ściu osób oraz łazienka z&nbsp;prysznicem.
    Każdy gość otrzymuje poczęstunek z&nbsp;rzemieślniczego piwa naszej roboty i lokalnych produktów.</br>
    Zapraszamy do położonej obok domku gorącej beczki (balii).</br></br>
    Oglądanie zachodów słońca na plaży przy domku stało się naszą ulgą po zapracowanym dniu i pasją.</h3>
    <button class="zarezerwuj-btn" onclick="window.location.href = 'https://https://panel.hotres.pl/v4_step1?oid=3522&lang=pl&rid=21634&clear=1'">Zarezerwuj teraz</button>
  </div>
`;

// GENERAL
const spacer = document.querySelector(".spacer");
const wraper = document.querySelector(".wrapper");
const parallaxLayers = document.querySelectorAll(".parallax__layer");
const screens = document.querySelectorAll(".screen");
const logo = document.getElementById("logo");
const bar = document.getElementById("targetElementId");

const hamburger = document.querySelector(".hamburger");
const chevronBTN = document.querySelector(".chevron-btn");
const chevronText = document.querySelector(".chevron-text");

const weolcomeScreen = document.querySelector(".welcome-screen");

// AREAS
const areas = document.querySelectorAll(".area");

// ADDITIONAL
const winnicaAdditional = document.querySelector(".winnica-additional");

//BTNS
const goBackBTN = document.getElementById("go-back");

/////////////////////////////////////////
// TRANSLATE DATA
const oryginalValue = [
  {
    name: "wydarzenia",
    value: "translateZ(-600px) scale(2.6)",
  },
  {
    name: "domek",
    value: "translateZ(-525px) scale(2.4)",
  },
  {
    name: "browar",
    value: "translateZ(-300px) scale(2)",
  },
  {
    name: "onas",
    value: "translateZ(-125px) scale(1.4167)",
  },
  {
    name: "winnica",
    value: "translateZ(0) scale(1)",
  },
];

// putting layer groups into array
const allGroups = [];
parallaxLayers.forEach((g) => {
  allGroups.push(g);
});

const allAreas = [];
areas.forEach((area) => {
  allAreas.push(area);
});

const allScreens = [];
screens.forEach((screen) => {
  allScreens.push(screen);
});

/*
chosen Layer - <div>CAŁY div parallax layer</>
layerName - 'string' nazwa warstwy
*/

////////////////////////
// VARIABLES

let choosenLayer;
let layerName;
let originalTransform;
let titleTextElement;
let titleTextWidth;

// CHECK IF MOBILE
function isOnMobile() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return screenWidth < 600;
}

////////////////////////
// JUSTYFY BAR

const justyfyBAR = function () {
  bar.style.transform = `translateX(${titleTextWidth / 2}px)`;
};

const backJustyfyBAR = function () {
  bar.style.transform = `translateX(0)`;
};

////////////////////////
// LAYERS HOVER

if (!isOnMobile()) {
  allAreas.forEach((a) => {
    a.addEventListener("mouseenter", function () {
      layerName = a.classList[1].slice(5);
      let choosenArea = `parallax__layer ${layerName}`;
      choosenLayer = allGroups.find((g) => g.className === choosenArea);
      originalTransform = oryginalValue.find((v) => v.name === layerName);

      if (layerName === "domek" || layerName === "onas") {
        choosenLayer.style.transform = `${originalTransform.value} translateX(1%)`;
      } else if (layerName == "chevron") {
        chevronText.style.opacity = "1";
        chevronText.style.transform = "translateY(20px)";
      } else {
        choosenLayer.style.transform = `${originalTransform.value} translateX(-1%)`;
      }
      slidingTitle(layerName);
    });

    // mouse leave
    a.addEventListener("mouseleave", function () {
      hideTitle();
      logo.style.transform = `translateX(0)`;
      if (layerName === "domek" || layerName === "onas") {
        choosenLayer.style.transform = `${originalTransform.value} translateX(-1%)`;
      } else if (layerName == "chevron") {
        chevronText.style.opacity = "0";
        chevronText.style.transform = "translateY(0px)";
      } else {
        choosenLayer.style.transform = `${originalTransform.value} translateX(1%)`;
      }
    });

    // mouse click
    a.addEventListener("click", function (e) {
      e.preventDefault();
      let choosenScreen = `parallax__group screen ${layerName}-screen`;
      let screenDiv = allScreens.find((s) => s.className === choosenScreen);
      if (layerName == "chevron") {
        weolcomeScreen.scrollIntoView({ behavior: "smooth" });
      } else {
        screenDiv.scrollIntoView({ behavior: "smooth" });
        hideTitle();
        logo.style.transform = `translateX(0)`;
      }
    });
  });
}

////////////////////////////
// SLIDING TITLE

const slidingTitle = function (n) {
  let name = n;
  if (name === "onas") {
    name = "o nas";
  }

  if (name === "chevron") {
    return;
  }

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("titleContainer");

  const titleText = document.createElement("h1");
  titleText.classList.add("titleText");
  titleText.textContent = `${name}`;

  titleContainer.appendChild(titleText);
  // Zlokalizuj element docelowy, w którym chcesz umieścić titleContainer
  var targetElement = document.getElementById("targetElementId");
  // Dodaj titleContainer na początek elementu docelowego
  targetElement.insertBefore(titleContainer, targetElement.firstChild);
  // Lub dodaj titleContainer na koniec elementu docelowego
  targetElement.appendChild(titleContainer);

  void titleContainer.offsetWidth;
  titleContainer.style.right = "0";

  //LOGO SHIFTING
  titleTextElement = titleText;
  titleTextWidth = titleTextElement.offsetWidth;
  logo.style.transform = `translateX(-${titleTextWidth / 2 + 60}px)`;
  justyfyBAR();
};

const hideTitle = function () {
  backJustyfyBAR();
  const newTitleContainers = document.querySelectorAll(".titleContainer");
  newTitleContainers.forEach(function (e) {
    e.style.transition = "right 0.5s";
    e.style.right = "-100%";
    setTimeout(function () {
      e.remove();
    }, 500);
  });
};

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// CAROUSEL
function createCarousel() {
  const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".c-wrapper i");

  let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

  const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display =
      carousel.scrollLeft == scrollWidth ? "none" : "block";
  };

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value

      // if clicked icon is left, reduce width value from the carousel scroll left else add to it
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
  });

  const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (
      carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) >
        -1 ||
      carousel.scrollLeft <= 0
    )
      return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
      // if user is scrolling to the right
      return (carousel.scrollLeft +=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
    }
    // if user is scrolling to the left
    carousel.scrollLeft -=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  };

  const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  document.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);
}

// ADDITIONAL SITES

function learnMore(subject) {
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("new-page-container");

  const targetAdditionalSite = eval(`${subject}AdditionalSite`);

  newPageContainer.innerHTML = targetAdditionalSite;

  document.body.appendChild(newPageContainer);
  // targetElement.insertAdjacentHTML('afterend', newPageContainer.innerHTML);

  if (subject === "domek") {
    createCarousel();
  }

  const exitBTN = document.querySelector(".exitBTN");
  exitBTN.addEventListener("click", function () {
    hidePage();
  });

  void newPageContainer.offsetWidth;
  newPageContainer.style.right = "0";
}

/////////////////////////////////////////
// Hide Page function
function hidePage() {
  const newPageContainer = document.querySelector(".new-page-container");
  newPageContainer.style.transition = "right 0.5s";
  newPageContainer.style.right = "-100%";

  // Usunięcie kontenera po zakończeniu animacji
  setTimeout(function () {
    newPageContainer.remove();
  }, 500);

  if (hamburger.classList.contains(".active")) {
    hamburger.classList.remove("active");
  }
}

// HAMBURGER
let choosenSite;

function createMenu() {
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("new-page-container");

  newPageContainer.innerHTML = `
<div class="menu-content">
<div class="menuItem menuItemdomek"><h1>DOMEK</h1></div>
<div class="menuItem menuItemwydarzenia"><h1>WYDARZENIA</h1></div>
<div class="menuItem menuItemwinnica"><h1>WINNICA</h1></div>
<div class="menuItem menuItembrowar"><h1>BROWAR</h1></div>
<div class="menuItem menuItemonas"><h1>O NAS</h1></div>
</div>
`;
  document.body.appendChild(newPageContainer);
  // targetElement.insertAdjacentHTML('afterend', newPageContainer.innerHTML);

  const menuItems = document.querySelectorAll(".menuItem");
  menuItems.forEach(function (i) {
    i.addEventListener("click", function () {
      let choosenName = i.classList[1].slice(8);
      let choosenScreen = `parallax__group screen ${choosenName}-screen`;
      let screenDiv = allScreens.find((s) => s.className === choosenScreen);
      screenDiv.scrollIntoView({ behavior: "smooth" });

      hamburger.classList.toggle("active");
      hidePage();
    });
  });

  void newPageContainer.offsetWidth;
  newPageContainer.style.right = "0";
}

hamburger.addEventListener("click", function () {
  console.log("clicked");
  if (hamburger.classList.contains("active")) {
    createMenu();
  } else hidePage();
});

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

/*
OLD WAY

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// LEARN MORE WINNICA

function learnMoreWinnica() {
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("new-page-container");

  const newPageContent = document.createElement("div");
  newPageContent.classList.add("learnMoreWinnica-content");

  const exitBTN = document.createElement("h1");
  exitBTN.classList.add("learnMoreWinnica-extitBTN");
  exitBTN.textContent = "X";

  const newPageText = document.createElement("h1");
  newPageText.textContent = "tu będzie szczegółowa treść o winnicy";

  newPageContainer.appendChild(exitBTN);
  newPageContent.appendChild(newPageText);

  newPageContainer.appendChild(newPageContent);
  document.body.appendChild(newPageContainer);

  void newPageContainer.offsetWidth;
  newPageContainer.style.right = "0";

  exitBTN.addEventListener('click', function () {
    hidePage()
  })
}

/////////////////////////////////////////
// LEARN MORE BROWAR
function learnMoreBrowar() {
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("new-page-container");

  const newPageContent = document.createElement("div");
  newPageContent.classList.add("learnMoreBrowar-content");

  const exitBTN = document.createElement("h1");
  exitBTN.classList.add("learnMoreBrowar-extitBTN");
  exitBTN.textContent = "X";

  const newPageText = document.createElement("h1");
  newPageText.textContent = "tu będzie szczegółowa treść o browarze";

  newPageContainer.appendChild(exitBTN);
  newPageContent.appendChild(newPageText);


  newPageContainer.appendChild(newPageContent);
  document.body.appendChild(newPageContainer);

  void newPageContainer.offsetWidth;
  newPageContainer.style.right = "0";

  exitBTN.addEventListener('click', function () {
    hidePage()
  })
}

/////////////////////////////////////////
// LEARN MORE
function learnMore(subject) {
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("new-page-container");

  const newPageContent = document.createElement("div");
  newPageContent.classList.add("learnMoreBrowar-content");

  const exitBTN = document.createElement("h1");
  exitBTN.classList.add("learnMoreBrowar-extitBTN");
  exitBTN.textContent = "X";

  const newPageText = document.createElement("h1");
  newPageText.textContent = "tu będzie szczegółowa treść";

  newPageContainer.appendChild(exitBTN);
  newPageContent.appendChild(newPageText);


  newPageContainer.appendChild(newPageContent);
  document.body.appendChild(newPageContainer);

  void newPageContainer.offsetWidth;
  newPageContainer.style.right = "0";

  exitBTN.addEventListener('click', function () {
    hidePage()
  })
}

*/
