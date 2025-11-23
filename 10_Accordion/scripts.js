const questions = document.querySelectorAll(".accordion-question");
const arrows = document.querySelectorAll(".accordion-question > span");
const answers = document.querySelectorAll(".accordion-answer");

questions.forEach((q, i) => 
    q.addEventListener("click", () => {
        arrows[i].classList.toggle("active");
        answers[i].classList.toggle("active");
    })
);
