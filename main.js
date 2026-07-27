document.querySelectorAll('.wave-text span').forEach((span, i) => {
    span.style.animationDelay = `${i * 0.1}s`;
});


document.querySelector('#home-btn').addEventListener('click', () => {
    document.querySelector('#home').classList.remove('hidden');
    document.querySelector('#sketchbook').classList.add('hidden');
});

document.querySelector('#sketchbook-btn').addEventListener('click', () => {
    document.querySelector('#sketchbook').classList.remove('hidden');
    document.querySelector('#home').classList.add('hidden');
});

let currentIndex = 0;
const images = [];
const captions = []; //will add 

const grid = document.querySelector('#grid');
const totalImages = 7;

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.style.marginBottom = "1rem";
    img.style.borderRadius = "1rem";
    img.classList.add('sketch', 'cursor-pointer');
    img.src = `images/img${i}.jpg`;
    images.push(`images/img${i}.jpg`);
    img.addEventListener('click', () => {
        currentIndex = i - 1;
        document.querySelector('#lightbox-img').src = img.src;
        document.querySelector('#lightbox-caption').textContent = captions[currentIndex];
        document.querySelector('#lightbox').classList.remove('hidden');
    });
    grid.appendChild(img);
}


document.querySelector('#lightbox').addEventListener('click', () => {
    document.querySelector('#lightbox').classList.add('hidden');
});