document.addEventListener("DOMContentLoaded", function () {

  const music = document.getElementById("music");
  const giftBox = document.getElementById("giftBox");
  const mainContent = document.getElementById("mainContent");

  window.openGift = function () {
    giftBox.classList.add("hidden");
    mainContent.classList.remove("hidden");

    music.play().catch(() => {});

    startTypewriter();
  };

  /* Typewriter */
  const text = "Chhavi I Love You So Much ❤️";
  let i = 0;

  function startTypewriter() {
    let speed = 100;
    function type() {
      if (i < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  /* Slider */
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 2500);

  /* Cake */
  window.cutCake = function () {
    document.getElementById("cake").style.transform =
      "rotate(-20deg) scale(1.1)";
    document.getElementById("cakeMessage").classList.remove("hidden");
    startFireworks();
  };

  /* Fireworks */
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function startFireworks() {
    for (let i = 0; i < 150; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        3,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
      ctx.fill();
    }
  }

  /* Falling Hearts */
  function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
      Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);

});
