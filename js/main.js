var icon = document.querySelectorAll(".icon");
var question = document.querySelectorAll(".question-group");

for(i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });

    question.forEach((drop) => {
        drop.addEventListener("click", () => {
            drop.classList.toggle("clicked");
        });
    });
}

AOS.init({
    duration: 1000,
    once: true,
  })