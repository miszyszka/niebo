'use strict'

function displayWindowDimensions() {
  console.log('Window width:', window.innerWidth, window.innerHeight);
  console.log("Current Aspect Ratio: " + (window.innerWidth / window.innerHeight));
}

// setInterval(displayWindowDimensions, 2000);

// GENERAL
const wraper = document.querySelector('.wrapper')
const parallaxLayers = document.querySelectorAll('.parallax__layer')
const screens = document.querySelectorAll('.screen')
const logo = document.getElementById('logo')
const bar = document.getElementById('targetElementId')

const hamburger = document.querySelector('.hamburger')


// AREAS
const areas = document.querySelectorAll('.area')

// ADDITIONAL 
const winnicaAdditional = document.querySelector('.winnica-additional')

//BTNS
const goBackBTN = document.getElementById('go-back')

/////////////////////////////////////////
// TRANSLATE DATA
const oryginalValue = [
  {
    name: "wydarzenia",
    value: "translateZ(-600px) scale(2.6)",
  }, {
    name: "domek",
    value: "translateZ(-525px) scale(2.4)",
  }, {
    name: "browar",
    value: "translateZ(-300px) scale(2)",
  }, {
    name: "onas",
    value: "translateZ(-125px) scale(1.4167)",
  }, {
    name: "winnica",
    value: "translateZ(0) scale(1)"
  }
]


// putting layer groups into array
const allGroups = []
parallaxLayers.forEach(g => {
  allGroups.push(g)
})

const allAreas = []
areas.forEach((area) => {
  allAreas.push(area)
});

const allScreens = []
screens.forEach((screen) => {
  allScreens.push(screen)
});


/*
chosen Layer - <div>CAŁY div parallax layer</>
layerName - 'string' nazwa warstwy
*/

////////////////////////
// VARIABLES

let choosenLayer;
let layerName;
let originalTransform
let titleTextElement
let titleTextWidth


// CHECK IF MOBILE
function isOnMobile() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  return screenWidth < 600;
}


////////////////////////
// JUSTYFY BAR

const justyfyBAR = function () {
  bar.style.transform = `translateX(${titleTextWidth / 2}px)`
}

const backJustyfyBAR = function () {
  bar.style.transform = `translateX(0)`
}

////////////////////////
// LAYERS HOVER

if (!isOnMobile()) {
  allAreas.forEach(a => {
    a.addEventListener('mouseenter', function () {
      layerName = a.classList[1].slice(5);
      let choosenArea = `parallax__layer ${layerName}`;
      choosenLayer = allGroups.find(g => g.className === choosenArea);
      originalTransform = oryginalValue.find(v => v.name === layerName);

      if (layerName === "domek" || layerName === "onas") {
        choosenLayer.style.transform = `${originalTransform.value} translateX(1%)`;
      } else {
        choosenLayer.style.transform = `${originalTransform.value} translateX(-1%)`;
      }
      slidingTitle(layerName)
    });

    // mouse leave
    a.addEventListener('mouseleave', function () {
      hideTitle()
      logo.style.transform = `translateX(0)`
      if (layerName === "domek" || layerName === "onas") {
        choosenLayer.style.transform = `${originalTransform.value} translateX(-1%)`;
      } else {
        choosenLayer.style.transform = `${originalTransform.value} translateX(1%)`;
      }
    });

    // mouse click
    a.addEventListener('click', function (e) {
      e.preventDefault()
      let choosenScreen = `parallax__group screen ${layerName}-screen`;
      let screenDiv = allScreens.find(s => s.className === choosenScreen);

      screenDiv.scrollIntoView({ behavior: 'smooth' });
      hideTitle()
      logo.style.transform = `translateX(0)`
    })
  });
}

////////////////////////////
// SLIDING TITLE


const slidingTitle = function (n) {
  let name = n
  if (name === "onas") {
    name = "o nas"
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
  titleTextElement = titleText
  titleTextWidth = titleTextElement.offsetWidth
  logo.style.transform = `translateX(-${(titleTextWidth / 2) + 60}px)`
  justyfyBAR()
}

const hideTitle = function () {
  backJustyfyBAR()
  const newTitleContainers = document.querySelectorAll(".titleContainer");
  newTitleContainers.forEach(function (e) {
    e.style.transition = "right 0.5s";
    e.style.right = "-100%";
    setTimeout(function () {
      e.remove();
    }, 500);
  })
}




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
// Hide Page function
function hidePage() {
  const newPageContainer = document.querySelector(".new-page-container");
  newPageContainer.style.transition = "right 0.5s";
  newPageContainer.style.right = "-100%";

  // Usunięcie kontenera po zakończeniu animacji
  setTimeout(function () {
    newPageContainer.remove();
  }, 500);

  if (hamburger.classList.contains('.active')) {
    hamburger.classList.remove('active')
  }
}



// HAMBURGER
let choosenSite

function createMenu() {
  const newPageContainer = document.createElement("div");
  newPageContainer.classList.add("new-page-container");

  newPageContainer.innerHTML =
    `
<div class="menu-content">
<div class="menuItem menuItemdomek"><h1>DOMEK</h1></div>
<div class="menuItem menuItemwydarzenia"><h1>WYDARZENIA</h1></div>
<div class="menuItem menuItemwinnica"><h1>WINNICA</h1></div>
<div class="menuItem menuItembrowar"><h1>BROWAR</h1></div>
<div class="menuItem menuItemonas"><h1>O NAS</h1></div>
</div>
`
  document.body.appendChild(newPageContainer);
  // targetElement.insertAdjacentHTML('afterend', newPageContainer.innerHTML);


  const menuItems = document.querySelectorAll('.menuItem')
  menuItems.forEach(function (i) {
    i.addEventListener('click', function () {
      let choosenName = i.classList[1].slice(8)
      let choosenScreen = `parallax__group screen ${choosenName}-screen`
      let screenDiv = allScreens.find(s => s.className === choosenScreen);
      screenDiv.scrollIntoView({ behavior: 'smooth' });

      hamburger.classList.toggle('active')
      hidePage()
    })
  })

  void newPageContainer.offsetWidth;
  newPageContainer.style.right = "0";

}






hamburger.addEventListener('click', function () {
  console.log('clicked');
  if (hamburger.classList.contains('active')) {
    createMenu()
  } else
    hidePage()
})

