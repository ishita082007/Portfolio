
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
});




const typingText = document.getElementById("typing-text");

const textArray = [
  "Frontend Developer",
  "React Learner",
  "Web Developer"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

  if(charIndex < textArray[textIndex].length){

    typingText.textContent += textArray[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  }

  else{

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typingText.textContent =
      textArray[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  }

  else{

    textIndex++;

    if(textIndex >= textArray.length){
      textIndex = 0;
    }

    setTimeout(typeEffect, 300);

  }

}

typeEffect();




const boxes = document.querySelectorAll(
  ".skill-box, .work-box"
);

window.addEventListener("scroll", () => {

  boxes.forEach((box) => {

    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < window.innerHeight - 100){

      box.style.opacity = "1";
      box.style.transform = "translateY(0)";

    }

  });

});



boxes.forEach((box) => {

  box.style.opacity = "0";
  box.style.transform = "translateY(40px)";
  box.style.transition = "0.5s";

});



const footerText = document.getElementById("footer-text");

footerText.innerHTML =
`© ${new Date().getFullYear()} Ishita Mehra | All Rights Reserved`;