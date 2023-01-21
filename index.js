function slideShowFun(images) {
  let currentIndex = 0;
  let parentEl = document.getElementById("body");
  let image = document.createElement("img");
  image.setAttribute("src", images[currentIndex]);
  parentEl.append(image);
  setInterval(() => {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.setAttribute("src", images[currentIndex]);
  }, 3000);
}

let imageArr = [
  "https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P7-Winterwear-LeeWrnagler-Min50.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P3-JPLCAvaasa-UpTo700OffOn1000.jpg",
  //   "https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P4-BestsellingWedding-AureliaW-Flat65.jpg",
];

window.addEventListener("load", function () {
  slideShowFun(imageArr);
});

function bannerShow(images) {
  let currentIndex = 0;
  let parentEl2 = document.getElementById("body2");
  let image = document.createElement("img");
  image.setAttribute("src", images[currentIndex]);
  parentEl2.append(image);
  setInterval(() => {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.setAttribute("src", images[currentIndex]);
  }, 3000);
}

let bannerArr = [
  "https://assets.ajio.com/cms/AJIO/WEB/1440x128--FB.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/1440x128--p.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-relianceone.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128pppp.jpg",
];
window.addEventListener("load", function () {
  bannerShow(bannerArr);
});

function bannerShow2(images) {
  let currentIndex = 0;
  let parentEl3 = document.getElementById("body4");
  let image = document.createElement("img");
  image.setAttribute("src", images[currentIndex]);
  parentEl3.append(image);
  setInterval(() => {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.setAttribute("src", images[currentIndex]);
  }, 3000);
}
let imageArr2 = [
  "https://assets.ajio.com/cms/AJIO/WEB/14012023-UHP-D-26Hrs-P3-Winterwear-USPAISceneryVeroModa-Flat70.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/14012023-UHP-D-26Hrs-P2-AnubhuteeJuniperSoch-Min60.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-26Hrs-P1-Winterwear-GAP-25Off.jpg",
];
window.addEventListener("load", function () {
  bannerShow2(imageArr2);
});

function bannerShow3(images) {
  let currentIndex = 0;
  let parentEl4 = document.getElementById("body8");
  let image = document.createElement("img");
  image.setAttribute("src", images[currentIndex]);
  parentEl4.append(image);
  setInterval(() => {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.setAttribute("src", images[currentIndex]);
  }, 3000);
}
let imageArr3 = [
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P0-KidsCarnival-Kidswear-KGFrendzKBTeamspirit-Starting99.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P4-SportswearBrands-AdidasFila-Min50.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P1-BestsellingWinterwear-USPAFortCollins-3050.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P5-gantSuperdry-Min50.jpg",
];

window.addEventListener("load", function () {
  bannerShow3(imageArr3);
});

function bannerShow4(images) {
  let currentIndex = 0;
  let parentEl5 = document.getElementById("body10");
  let image = document.createElement("img");
  image.setAttribute("src", images[currentIndex]);
  parentEl5.append(image);
  setInterval(() => {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.setAttribute("src", images[currentIndex]);
  }, 3000);
}

let imageArr4 = [
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P5-GAP-20Offon2.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P3-WinterIsComing-BullmerBelleFille-Starting299Extra30.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P1-BestOfInternationalBrands-FCUKTrendyol-Upto60.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P4-MnS-Upto40Extra35.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P2-Cultsport-Min60.jpg",
];

window.addEventListener("load", function () {
  bannerShow4(imageArr4);
});

function bannerShow5(images) {
  let currentIndex = 0;
  let parentEl6 = document.getElementById("body19");
  let image = document.createElement("img");
  image.setAttribute("src", images[currentIndex]);
  parentEl6.append(image);
  setInterval(() => {
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    image.setAttribute("src", images[currentIndex]);
  }, 3000);
}

let imageArr5 = [
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p1-brands-upto50.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p4-brands-3060.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p2-brands-starting999.jpg",
  "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p3-brands-upto60.jpg",
];

window.addEventListener("load", function () {
  bannerShow5(imageArr5);
});

let mouseBtn = document.getElementsByClassName("a1");
mouseBtn.addEventListener("mouseenter", () => console.log("Mouse Enter"));
mouseBtn.addEventListener("mouseleave", () => console.log("Mosue leave"));
