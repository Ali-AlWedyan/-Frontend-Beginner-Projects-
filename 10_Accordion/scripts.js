const questions = document.querySelectorAll(".accordion-question");
const arrows = document.querySelectorAll(".accordion-question > span");
const answers = document.querySelectorAll(".accordion-answer");

questions.forEach((q, i) => q.addEventListener("click", e =>{
    arrows[i].style.rotate = arrows[i].style.rotate === "0deg" ? "90deg" : "0deg";
    answers[i].classList.toggle("active");
}))
