// main.js

const panoramaImage = new PANOLENS.ImagePanorama("images/image2.jpg");
const panoramaImage2 = new PANOLENS.ImagePanorama("images/image1.jpeg");

const imageContainer = document.querySelector(".image-container");

const btns = document.querySelectorAll(".btn, .btn2");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("btn")) {
      yesRoom();
    } else if (btn.classList.contains("btn2")) {
      noRoom();
    }
  });
});

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.6,
  controlBar: true,
});
function yesRoom() {
  viewer.add(panoramaImage);
}
function noRoom() {
  // viewer.remove(panoramaImage2);
  // viewer.remove(panoramaImage2);
  viewer.remove(panoramaImage);
}
// viewer.add(panoramaImage);
