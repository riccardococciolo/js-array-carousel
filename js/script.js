const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
console.log(images);

const itemsElem = document.querySelector(".items");

let imageString = "";
for (let i = 0; i < images.length; i++) {
    imageString += `
    <div class="item">
        <img src="./img/${images[i]}" alt="">
    </div>`;
}

console.log(imageString);

console.log(imageString);

itemsElem.innerHTML = itemsElem.innerHTML + imageString;

let currentIndex = 0;
const slideElem = document.querySelectorAll(".item");
slideElem[currentIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", function() {
    if (currentIndex < slideElem.length - 1) {
        slideElem[currentIndex].classList.remove("active");
        currentIndex++;
        slideElem[currentIndex].classList.add("active");
    } else {
        slideElem[currentIndex].classList.remove("active");
        currentIndex = 0;
        slideElem[currentIndex].classList.add("active");
    }
})

document.querySelector(".prev").addEventListener("click", function() {
    slideElem[currentIndex].classList.remove("active");
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideElem.length - 1;
    }

    slideElem[currentIndex].classList.add("active");
})
