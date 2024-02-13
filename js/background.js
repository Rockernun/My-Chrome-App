const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg"
];

const backgroundImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `img/${backgroundImage}`;
document.body.appendChild(image);
