
const slidesContainer = document.querySelector(".slide_container");
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;
const slideCount = slides.length;

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth
    }px)`;
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition();
  updateIndicators();
}

slides.forEach((slide, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.addEventListener("click", () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

updateIndicators();

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
  updateIndicators();
}

setInterval(nextSlide, 3000);

function openTab(evt, tabName) {
  let i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButtons = document.getElementsByClassName("button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

document.getElementById("tabButton1").addEventListener("click", function () {
  openTab(event, "tab1");
});

document.getElementById("tabButton2").addEventListener("click", function () {
  openTab(event, "tab2");
});

document.getElementById("tab1").style.display = "block";
document.querySelector(".button.active").classList.remove("active");
document.getElementById("tabButton1").classList.add("active");

