// Loading
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.body.style.overflow = "auto";
  }, 2000);
};

// دخول الموقع
function enterSite() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("main-site").style.display = "block";

  document.getElementById("clickSound").play();

  typeText();
}

// Typing Effect
function typeText() {
  let text = "About Me...";
  let i = 0;
  let speed = 100;

  function typing() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}