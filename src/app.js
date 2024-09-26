/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";
let btn = document.querySelector(".btn");

window.onload = () => {
  //write your code here
  btn.addEventListener("click", function() {
    generateCard();
  });
};

const generateCard = () => {
  let title = document.querySelector(".card-title");
  let suits = ["♠️", "♥", "♠", "♣"];
  let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"];

  let randomSuits = suits[Math.floor(Math.random() * suits.length)];
  let randomNum = num[Math.floor(Math.random() * num.length)];

  if (randomSuits === "♣") {
    btn.style.bakground = "black";
    title.innerHTML = "Clubs";
  } else if (randomSuits === "♥") {
    btn.style.bakground = "red";
    title.innerHTML = "Hearts";
  } else if (randomSuits === "♠") {
    btn.style.bakground = "black";
    title.innerHTML = "Spades";
  } else if (randomSuits === "♦") {
    btn.style.bakground = "red";
    title.innerHTML = "Diamonds";
  }

  let suitsElement = document.querySelectorAll(".suits");
  suitsElement.forEach(suit => {
    suit.innerHTML = randomSuits;
  });

  document.querySelector(".num").innerHTML = randomNum;
};
