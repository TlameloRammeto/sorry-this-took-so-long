function openLetter() {
  document.getElementById("openScreen").classList.add("hidden");
  document.getElementById("questionScreen").classList.remove("hidden");
}

function justYes() {
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("judgeScreen").classList.remove("hidden");
}

function backToQuestion() {
  document.getElementById("judgeScreen").classList.add("hidden");
  document.getElementById("questionScreen").classList.remove("hidden");
}

function showFinal() {
  document.getElementById("videoScreen").classList.add("hidden");
  document.getElementById("finalScreen").classList.remove("hidden");
}

function sparkleBurst() {
  for (let i = 0; i < 30; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(s);

    setTimeout(() => s.remove(), 1000);
  }
}

function definitelyYes() {
  sparkleBurst();
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("videoScreen").classList.remove("hidden");
}