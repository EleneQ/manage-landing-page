const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

const computedStyles = window.getComputedStyle(carousel);
const gap = parseInt(computedStyles.gap); // Dynamically get gap value

let isDragging = false,
  startX,
  startScrollLeft,
  timeoutId;

// arrow buttons
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const scrollAmount =
      btn.id === "left" ? -firstCardWidth - gap : firstCardWidth + gap;

    carousel.scrollTo({
      left: carousel.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  });
});

// scrolling behaviour
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");

  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

/* 
  the pageX returns the position of the mouse on
  the x axis.

  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  updates the scroll position of the caousel based
  on cursor movement 

  thr (e.pageX - startX) calculates the horizontal
  distancethe mouse has moved since the drag started
*/
const dragging = (e) => {
  if (!isDragging) return;

  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
