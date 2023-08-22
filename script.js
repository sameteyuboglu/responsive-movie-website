const arrowButtons = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrowButtons.forEach((x, i) => {
  let counter = 0;
  const imageItem = movieList[i].querySelectorAll("img").length;

  x.addEventListener("click", (c) => {
    counter++;
    const witdthRatio = Math.floor(window.innerWidth / 300);
    if (imageItem - (4 + counter) + (4 - witdthRatio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = `translateX(0)`;
      counter = 0;
    }
  });
});

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,movie-list-filter select,.movie-list-title"
);
ball.addEventListener("click", (x) => {
  items.forEach((x) => {
    x.classList.toggle("active");
  });
});



/* dark mode */
