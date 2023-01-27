const faqAccordion = document.querySelectorAll(".faq__accordion")

faqAccordion.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
      question.classList.toggle("active")
    } else {
      faqAccordion.forEach((question) => {
        question.classList.remove("active")
      })
      question.classList.toggle("active")
    }
  })
})
