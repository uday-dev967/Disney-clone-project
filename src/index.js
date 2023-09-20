const state = { loggedIn: false };
const loginButton = document.getElementById("loginBtn");
const homePage = document.getElementById("home");
// initially home page is hidden

homePage.classList.add("hide");
const mainPage = document.getElementById("main");
const logoutButton = document.getElementById("logoutBtn");
// home content holder
const homeSlidersContainerEle = document.getElementById("home-content-sliders");
// sliders data from backend
const categories = [
  {
    name: "Disney Movies",
    thumbnails: [
      "../assets/disney-thumbnail1.jpg",
      "../assets/disney-thumbnail2.jpg",
      "../assets/disney-thumbnail3.jpg",
      "../assets/disney-thumbnail4.jpg",
      "../assets/disney-thumbnail5.jpg",
      "../assets/disney-thumbnail6.jpg",
      "../assets/disney-thumbnail7.jpg",
      "../assets/disney-thumbnail8.jpg",
      "../assets/disney-thumbnail9.jpg",
      "../assets/disney-thumbnail10.jpg",
    ],
  },
];

// carousel slider elements
const createAndAppendSliders = function (obj) {
  const { name, thumbnails } = obj;
  // console.log("name", name);
  // console.log("thumbnail", thumbnails);
  const wrapperEle = document.createElement("div");
  wrapperEle.classList.add("wrapper");
  const categoryEle = document.createElement("h2");
  categoryEle.textContent = name;
  wrapperEle.appendChild(categoryEle);
  const carousel = document.createElement("ul");
  carousel.classList.add("carousel");
  wrapperEle.appendChild(carousel);
  thumbnails.forEach((each) => {
    const carouselItem = document.createElement("li");
    carouselItem.classList.add("card");
    const imageItemContainer = document.createElement("div");
    const imageElement = document.createElement("img");
    imageElement.src = each;
    imageElement.draggable = false;
    imageElement.classList.add("img");
    imageElement.alt = "img";
    imageItemContainer.appendChild(imageElement);
    imageItemContainer.classList.add("img__cointainer");
    carouselItem.appendChild(imageItemContainer);
    carousel.appendChild(carouselItem);
  });
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  const arrowLeft = document.createElement("img");
  arrowLeft.src = "../assets/left.svg";
  arrowLeft.classList.add("arrow");
  prevBtn.appendChild(arrowLeft);
  const arrowRight = document.createElement("img");
  arrowRight.src = "../assets/right.svg";
  arrowRight.classList.add("arrow");
  nextBtn.appendChild(arrowRight);
  nextBtn.addEventListener("click", () => {
    firstCardWidth = document.querySelector(".card").offsetWidth;
    console.log(firstCardWidth);
    carousel.scrollLeft += firstCardWidth;
  });
  prevBtn.addEventListener("click", () => {
    firstCardWidth = document.querySelector(".card").offsetWidth;
    console.log(firstCardWidth);
    carousel.scrollLeft -= firstCardWidth;
  });
  prevBtn.classList.add("btn-prev");
  nextBtn.classList.add("btn-next");
  wrapperEle.appendChild(prevBtn);
  wrapperEle.appendChild(nextBtn);
  homeSlidersContainerEle.appendChild(wrapperEle);
};

// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// let firstCardWidth;
// const arrowBtns = wrapper.querySelectorAll("button");
// console.log(firstCardWidth);

// login and logout functions
loginButton.addEventListener("click", login);
logoutButton.addEventListener("click", logout);
function login() {
  alert("login clicked");
  homePage.classList.remove("hide");
  mainPage.classList.add("hide");
  state.loggedIn = true;
  for (let each of categories) {
    if (state.loggedIn) {
      console.log(each);
      createAndAppendSliders(each);
    }
  }
}

function logout() {
  alert("logout clicked");
  homePage.classList.add("hide");
  mainPage.classList.remove("hide");
  state.loggedIn = false;
}

// carousel slider buttons working funtion
// arrowBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     firstCardWidth = document.querySelector(".card").offsetWidth;
//     console.log(btn.id);
//     console.log(firstCardWidth);
//     carousel.scrollLeft += btn.id == "prev" ? -firstCardWidth : firstCardWidth;
//   });
// });
