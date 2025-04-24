const imageCount = 5; 
const imagePath = "img/";
const imageExtension = ".jpeg";

const root = document.getElementById("slider-root");

const slider = document.createElement("div");
slider.className = "slider";

const prevBtn = document.createElement("button");
prevBtn.id = "prevBtn";
prevBtn.className = "nav-btn";
prevBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L8 12L16 20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const nextBtn = document.createElement("button");
nextBtn.id = "nextBtn";
nextBtn.className = "nav-btn";
nextBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4L16 12L8 20" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

const slideContainer = document.createElement("div");
slideContainer.className = "slide-container";

const dotsContainer = document.createElement("div");
dotsContainer.className = "dots";
dotsContainer.id = "dotsContainer";

const slides = [];
for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement("img");
    img.src = `${imagePath}${i}${imageExtension}`;
    img.className = "slide";
    if (i === 1) img.classList.add("active");
    slideContainer.appendChild(img);
    slides.push(img);

    const dot = document.createElement("span");
    dot.className = "dot";
    if (i === 1) dot.classList.add("active");
    dot.addEventListener("click", () => {
        current = i - 1;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
}

slider.appendChild(prevBtn);
slider.appendChild(slideContainer);
slider.appendChild(nextBtn);
slider.appendChild(dotsContainer);
root.appendChild(slider);

let current = 0;

function updateSlider() {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
        dotsContainer.children[i].classList.toggle("active", i === current);
    });

    prevBtn.style.display = current === 0 ? "none" : "block";
    nextBtn.style.display = current === slides.length - 1 ? "none" : "block";
}

prevBtn.addEventListener("click", () => {
    if (current > 0) {
        current--;
        updateSlider();
    }
});

nextBtn.addEventListener("click", () => {
    if (current < slides.length - 1) {
        current++;
        updateSlider();
    }
});

updateSlider();
