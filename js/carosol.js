const images = [
  "images2/pic-1.jpg",
  "images2/pic-2.jpg",
  "images2/pic-3.jpg",
  "images2/pic-4.jpg",
  "images2/pic-5.jpg",
  "images2/pic-6.jpg",
];
let imageIndex = 0;
const imgEL = document.getElementById('img-slider')
setInterval (() => {
  if(imageIndex === images.length){
    imageIndex = 0;
  }
  const imagUrl = images[imageIndex];
  imgEL.setAttribute('src', imagUrl)
  imageIndex ++

}, 2000)