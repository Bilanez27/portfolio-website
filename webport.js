// Typing animation
const texts = ["Aurellia Inez", "Graphic Designer", "Administrative Professional"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingElement = document.getElementById("typing-text");

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 120);
  }
}
type();

// Glow popup effect
document.querySelectorAll(".popup-glow, img, h1, h2, p, a").forEach(el => {
  el.addEventListener("click", () => {
    el.style.boxShadow = "0 0 25px #f8b4c4";
    el.style.transform = "scale(1.05)";
    setTimeout(() => {
      el.style.boxShadow = "";
      el.style.transform = "";
    }, 400);
  });
});



 // SHOW PROJECT POPUP
function showProject(type) {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("projectTitle");
  const desc = document.getElementById("projectDesc");
  const img = document.getElementById("projectImage");

  if (type === "design") {
    title.textContent = "🎨 Graphic Design Projects";
    desc.textContent = "Here are some examples of my design works: social media templates, poster concepts, and branding visuals.";
    img.src = "dg.jpg"; // ganti nama file sesuai gambar kamu
  } else if (type === "admin") {
    title.textContent = "💼 Administrative Support Projects";
    desc.textContent = "Tasks include document organization, correspondence management, and presentation layouts.";
    img.src = "admin.png";
  } else if (type === "branding") {
    title.textContent = "✏️ Branding & Visual Identity Projects";
    desc.textContent = "Logo design, color palette creation, and brand kit mockups.";
    img.src = "branding.png";
  }

  modal.style.display = "block";
}


function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) modal.style.display = "none";
};

// IMPROVED HIRE FORM NOTIFICATION
const form = document.getElementById("hireForm");
const notif = document.getElementById("notif");
form.addEventListener("submit", e => {
  e.preventDefault();
  notif.innerHTML = "✅ Message sent successfully! I’ll reply via email soon.";
  notif.style.opacity = "1";
  form.reset();
  setTimeout(() => notif.style.opacity = "0", 5000);
});
