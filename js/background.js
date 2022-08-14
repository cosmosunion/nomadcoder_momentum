const images = ["peter0.jpg", "peter1.jpg", "peter2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

const secondBlock = document.querySelector("#second-block");
secondBlock.appendChild(bgImage);
