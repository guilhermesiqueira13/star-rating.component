const stars = document.querySelectorAll(".rating-star");
const starText = document.querySelector(".rating-text");
const texts = [
  "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
];

function activeRatingStars() {
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      if (star.classList.contains("ativo")) {
        stars.forEach((starRating, item) => {
          if (item >= index) {
            starRating.classList.remove("ativo");
          }
        });
      } else {
        stars.forEach((starRating, item) => {
          if (item <= index) {
            starRating.classList.add("ativo");
          } else {
            starRating.classList.remove("ativo");
          }
        });
      }
      if (star.classList.contains("ativo")) {
        starText.textContent = texts[index];
      } else {
        starText.textContent = "";
      }
    });
  });
}
activeRatingStars();
