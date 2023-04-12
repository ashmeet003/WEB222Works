window.reviewData = [
  /* Your Review Data Goes Here… */
  {
    name: "Ella Sinclair",
    date: "2023-4-10",
    rating: 5,
    review: "Amazing game. Love to play it",
  },
  {
    name: "John McDonald",
    date: "2023-4-03",
    rating: 5,
    review: "Love this competitive game!",
  },
  {
    name: "Alex",
    date: "2023-3-10",
    rating: 4,
    review: "great time buster!",
  },
  {
    name: "Rhys Larsen",
    date: "2023-2-11",
    rating: 5,
    review: "Lovely and competitive game to play with friends and family",
  },
  {
    name: "Christian Allister",
    date: "2022-10-20",
    rating: 4,
    review: "A must play game.",
  },
];
function reviewCard(reviewObj) {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardDetails = document.createElement("div");
  cardDetails.classList.add("cardDetails");
  let name = document.createElement("h3");
  name.textContent = reviewObj.name;
  let date = document.createElement("time");
  date.textContent = reviewObj.date;
  let rating = document.createElement("span");
  let ratingStars = "";
  for (var j = 0; j < reviewObj.rating; j++) {
    ratingStars += "★ ";
  }
  for (var j = reviewObj.rating; j < 5; j++) {
    ratingStars += "☆ ";
  }
  rating.textContent = ratingStars;
  let review = document.createElement("p");
  review.textContent = reviewObj.review;
  card.appendChild(name);
  card.appendChild(rating);
  cardDetails.appendChild(date);
  cardDetails.appendChild(review);
  card.appendChild(cardDetails);
  document.getElementById("container").appendChild(card);
}
function sendCardsToFunction() {
  window.reviewData.forEach((reviewObj) => {
    reviewCard(reviewObj);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  sendCardsToFunction();
  let reviewForm = document.getElementById("reviewForm");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredDate = new Date(document.getElementById("date").value);
    const currentDate = new Date();
    if (enteredDate.getTime() > currentDate.getTime()) {
      alert("Please enter correct date: less than or equal to current date");
    } else {
      let reviewObj = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        rating: document.getElementById("rating").value,
        review: document.getElementById("review").value,
      };
      window.reviewData.push(reviewObj);
      document.getElementById("container").innerHTML = "";
      sendCardsToFunction();
    }

    //to reset form once its submitted
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("review").value = "";
  });
});
