"use strict";

document.addEventListener("DOMContentLoaded",() => {
const gallery = document.querySelector(".gallary");
const ZoomOutBtn = document.getElementById("ZoomOut");
const ZoomInBtn = document.getElementById("ZoomIn");
const dragLayer = document.getElementById("drag-layer")
const totalrows = 10;
const ImagesPerRow = 10;
const TotalImages = totalrows * ImagesPerRow;
let isZoomed = false;
const images = [];

function getRandomHeight(min,max){
        return Math.floor(Math.random()*(max-min+1)/2)+min;

}
let count = 0;
// Generating Images
for (let i = 0; i <= TotalImages; i++) {
    console.log(`Inserting ${i} images`);
    const img = document.createElement("div");
    img.className = "img";
    img.style.height = "100px"; // Set uniform size
    img.style.width = "60px";  // Set uniform size

    const ImgElement = document.createElement("img");
    const randomImageNumber = Math.floor(Math.random() * 50) + 1;
    ImgElement.src = `./assets/img (${randomImageNumber}).jpg`;
    ImgElement.style.height = "100%"; // Fill the container
    ImgElement.style.width = "100%";  // Fill the container
    ImgElement.style.objectFit = "cover"; // Ensures images fit without distortion

    img.appendChild(ImgElement);
    gallery.appendChild(img);
    images.push(img);
    count = count +1;
    console.log(count);
}

//Generating Images
// for(let i = 0;i <= TotalImages;i++){
//     console.log(`Inserting ${i} images`)
// const img = document.createElement("div");
// img.className = "img";
// img.style.height = `${getRandomHeight(10,30)}px`;
// // img.style.width = `${getRandomWidth(30,100)}px`;
// const ImgElement = document.createElement("img");
// const randomImageNumber = Math.floor(Math.random()*10)+1;
// ImgElement.src = `./assets/img (${randomImageNumber}).jpg`;
// console.log(ImgElement)
// img.appendChild(ImgElement);
// gallery.appendChild(img);
// images.push(img);
// // console.log("inserted")
// }
gsap.to(images,{
    scale:1,
    opacity:1,
    delay:0.5,
    duration:0.5,
    stagger:{
        amount:1.5,
        grid:[totalrows,ImagesPerRow],
        from:"random",
    },
    ease:"power1.out"
})
})