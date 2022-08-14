const quotes = [
  {
    quote:
      "Learning is not attained by chance, it must be sought for with ardor and diligence.",
    author: "Abigail Adams",
  },
  {
    quote:
      "When you love your work, you will be exceptionally diligent in what you do and you will excel in delivering both quality and quantity.",
    author: " Dr. Prem Jagyasi",
  },
  {
    quote:
      "Prefer diligence before idleness, unless you esteem rust above brightness.",
    author: "Plato",
  },
  {
    quote:
      "What we ever hope to do with ease, we must first learn to do with diligence.",
    author: "Samuel Johnson",
  },
  {
    quote:
      "This was how mortals found fame, I thought. Through practice and diligence, tending their skills like gardens until they glowed beneath the sun.",
    author: "Madeline Miller",
  },
  {
    quote: "Diligence is the mother of good fortune.",
    author: "Benjamin Disraeli",
  },
  { quote: "Care and diligence bring luck.", author: "Thomas Fuller" },
  {
    quote:
      "To become a better you, be diligent and never let the charms of procrastination and excuses seduce you to fall for mediocrity.",
    author: " Israelmore Ayivor",
  },
  {
    quote:
      "Work is doing it. Discipline is doing it every day. Diligence is doing it well every day.",
    author: "Dave Ramsey",
  },
  {
    quote:
      "There is no barrier to success which diligence and perseverance cannot hurdle.",
    author: "Oscar Micheaux",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
