//Carousel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;
const itemWidth = items[0].clientWidth;

document.querySelector('.next').addEventListener('click', () => {
  moveSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
  moveSlide(-1);
});

document.querySelectorAll('.carousel-indicator').forEach((indicator) => {
  indicator.addEventListener('click', () => {
    const index = parseInt(indicator.getAttribute('data-index'));
    moveSlideTo(index);
  });
});

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  moveTrack();
  updateIndicators();
}

function moveSlideTo(index) {
  currentIndex = index;
  moveTrack();
  updateIndicators();
}

function moveTrack() {
  const offset = currentIndex * -itemWidth;
  track.style.transform = `translateX(${offset}px)`;
}

function updateIndicators() {
  document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
    indicator.setAttribute('aria-current', 'false');
    if (index === currentIndex) {
      indicator.setAttribute('aria-current', 'true');
    }
  });
}
