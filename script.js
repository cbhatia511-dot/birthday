document.addEventListener("DOMContentLoaded", function () {

  const music = document.getElementById("music");
  const giftBox = document.getElementById("giftBox");
  const mainContent = document.getElementById("mainContent");

  /* OPEN GIFT */
  window.openGift = function () {
    giftBox.classList.add("hidden");
    mainContent.classList.remove("hidden");

    // Force music play
    music.currentTime = 0;
    music.play().catch(() => {
      console.log("Autoplay blocked. Tap again.");
    });

    startTypewriter();
  };

  /* EXTRA MOBILE SAFE CLICK */
  document.body.addEventListener("click", function enableMusicOnce() {
    music.play().catch(() => {});
    document.body.removeEventListener("click", enableMusicOnce);
  });

  /* TYPEWRITER */
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

  /* SLIDER */
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 2500);

  /* CAKE */
  window.cutCake = function () {
    document.getElementById("cake").style.transform =
      "rotate(-20deg) scale(1.1)";
    document.getElementById("cakeMessage").classList.remove("hidden");
    startFireworks();
  };

  /* FIREWORKS */
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

  /* FALLING HEARTS */
  function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.top = "-10px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "20px";
    heart.style.animation = "fall 5s linear";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);

});
