
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showImage(index) {
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;
  currentIndex = index;

  const offset = -index * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1));
document.querySelector('.prev').addEventListener('click', () => showImage(currentIndex - 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => showImage(index)));

window.addEventListener('load', () => showImage(0));

