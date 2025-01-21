const images = [
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
];

const container = document.getElementById("products-container");

images.forEach((image) => {
  const box = document.createElement("div");
  box.className = "boxx";

  const boxContent = document.createElement("div");
  boxContent.className = "boxx-content";

  const boxImg = document.createElement("div");
  boxImg.className = "boxx-img";
  boxImg.style.backgroundImage = `url('${image}')`;

  boxContent.appendChild(boxImg);
  box.appendChild(boxContent);
  container.appendChild(box);
});
