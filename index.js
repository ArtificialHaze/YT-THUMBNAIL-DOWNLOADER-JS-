const inputElement = document.querySelector(".input");
const buttonElement = document.querySelector(".button");
const imageElement = document.querySelector(".image");

const url = "https://img.youtube.com/vi/";

const downloadImage = () => {
  let videoId = inputElement.value;
  let newUrl = `${url}${videoId}/hqdefault.jpg`;
  imageElement.src = `${newUrl}`;
};

buttonElement.addEventListener("click", downloadImage);
