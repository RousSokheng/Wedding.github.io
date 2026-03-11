//  <script>
const weddingDate = new Date("Feb 6, 2027 00:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

setInterval(() => {
  const heart = document.createElement("div");
  // heart.innerHTML = "❤️💕";  (only one) If you want just one style, write like this:

  const hearts = ["❤️💕", "❤️‍🔥", "💗💞", "✨", "💞💍", "💖", "💓💝"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  const size = Math.random() * 20 + 10;

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-30px"; // 👉 ចាប់ផ្តើមពីលើ
  heart.style.fontSize = size + "px";
  heart.style.opacity = Math.random() * 0.8 + 0.2;
  heart.style.animation = `fall ${3 + Math.random() * 2}s linear forwards`;
  heart.style.pointerEvents = "none";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 150);

const style = document.createElement("style");
style.innerHTML = `
    @keyframes fall {
      to {
        transform: translateY(110vh) rotate(360deg); /* 👉 ធ្លាក់ចុះក្រោម */
        opacity: 0;
      }
    }`;
document.head.appendChild(style);

// </script>
