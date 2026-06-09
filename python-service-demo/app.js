const filterButtons = document.querySelectorAll(".filter-button");
const toyCards = document.querySelectorAll(".toy-card");
const drawButton = document.querySelector("#draw-box");
const drawResult = document.querySelector("#draw-result");
const boxBody = document.querySelector(".box-body");
const shuffleHero = document.querySelector("#shuffle-hero");
const hero = document.querySelector(".hero");

const drawNames = [
  "Moon Drip",
  "Candy Sob",
  "Galaxy Cry",
  "Cloudy Hug",
  "Secret Spark",
  "Mint Tear",
  "Pink Parade",
  "Tiny Thunder",
];

const heroMoods = [
  ["#ff7eb6", "#91e8d6", "#ffe07a"],
  ["#8fc7ff", "#d7b6ff", "#fff2a8"],
  ["#ff9ec8", "#a4f3e2", "#2f2b5f"],
  ["#ffc3a6", "#fff0b8", "#9fd7ff"],
];

function setFeatured(card) {
  toyCards.forEach((item) => item.classList.remove("featured"));
  card.classList.add("featured");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    toyCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
      if (shouldShow && !document.querySelector(".toy-card.featured:not(.hidden)")) {
        setFeatured(card);
      }
    });
  });
});

toyCards.forEach((card) => {
  card.addEventListener("mouseenter", () => setFeatured(card));
  card.addEventListener("focusin", () => setFeatured(card));
});

drawButton.addEventListener("click", () => {
  const name = drawNames[Math.floor(Math.random() * drawNames.length)];
  drawResult.textContent = name;
  boxBody.classList.remove("pop");
  requestAnimationFrame(() => boxBody.classList.add("pop"));
});

shuffleHero.addEventListener("click", () => {
  const mood = heroMoods[Math.floor(Math.random() * heroMoods.length)];
  document.documentElement.style.setProperty("--pink", mood[0]);
  document.documentElement.style.setProperty("--mint", mood[1]);
  document.documentElement.style.setProperty("--yellow", mood[2]);
  hero.classList.remove("mood-pop");
  requestAnimationFrame(() => hero.classList.add("mood-pop"));
});
