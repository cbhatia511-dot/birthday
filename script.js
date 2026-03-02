function startSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("music").play();
}

/* Photo Slider */
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2500);

/* Cake Cutting */
function cutCake() {
  const cake = document.getElementById("cake");
  cake.classList.add("cut");
  document.getElementById("cakeMessage").classList.remove("hidden");
  startFireworks();
}

/* Simple Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      3,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fill();
  }
}