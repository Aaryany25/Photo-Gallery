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



// Generating Images
for (let i = 0; i <= TotalImages; i++) {
    
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
    
}


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

ZoomOutBtn.addEventListener("click",()=>{
    if(!isZoomed) return;
    isZoomed = false
    dragLayer.style.display="none"
    const CurrentTransform =  window.getComputedStyle(gallery).transform
    gsap.set(gallery,{clearProps: "transform"})

    const tl = gsap.timeline({
        defaults:{
            duration:2.5,
            ease:"power4.inOut"
        }
    })
    tl.fromTo(gallery,{transform:CurrentTransform},{x:0,y:0}).to(
        images,{scale:1,x:0,y:0},0
    )

    CurrentX  = 0
    CurrentY = 0
    targetX = 0
    targetY = 0
    isDragging = false

    ZoomOutBtn.classList.add("active")
    ZoomInBtn.classList.remove("active")
})

ZoomInBtn.addEventListener("click",()=>{
    if(isZoomed) return;
    isZoomed = true 
    dragLayer.style.display="block";

    images.forEach((img,index) =>{
        // const rect = img.getBoundingClientReact();
            const rect = img.getBoundingClientRect();
        const centerX = window.innerWidth/2;
        const centerY = window.innerHeight/2;
        const distX = (rect.left + rect.width/2- centerX)/50;
        const distY = (rect.top + rect.height/2- centerY)/50;

        gsap.to(img,{
            x: distX*100,
            y: distY*100,
            scale:3,
            duration:2.5,
            ease:"power4.inOut"
        })

    })
    ZoomOutBtn.classList.remove("active");
    ZoomInBtn.classList.add("active");

})
let isDragging = false;
let CurrentX = 0;
let CurrentY = 0;
let targetX = 0;
let targetY = 0;
})