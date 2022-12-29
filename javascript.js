const FullImgBox = document.getElementById("fullimgbox");
const fullimg = document.getElementById("fullimg");

const images = [
    'https://picsum.photos/id/1/800/600',
    'https://picsum.photos/id/2/800/600',
    'https://picsum.photos/id/3/800/600',
    'https://picsum.photos/id/4/800/600',
    'https://picsum.photos/id/5/800/600',
    'https://picsum.photos/id/6/800/600',
    'https://picsum.photos/id/7/800/600',
    'https://picsum.photos/id/8/800/600',
    'https://picsum.photos/id/9/800/600',
    'https://picsum.photos/id/10/800/600',
    'https://picsum.photos/id/11/800/600',
    'https://picsum.photos/id/12/800/600',
    'https://picsum.photos/id/13/800/600',
    'https://picsum.photos/id/14/800/600',
    'https://picsum.photos/id/15/800/600',
    'https://picsum.photos/id/16/800/600',
    'https://picsum.photos/id/17/800/600',
    'https://picsum.photos/id/18/800/600',
    'https://picsum.photos/id/19/800/600',
    'https://picsum.photos/id/20/800/600',
];

let currentIndex = 0;

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  fullimg.src = images[currentIndex];
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  fullimg.src = images[currentIndex];
}

function openfullimg(reference){
    FullImgBox.style.display = "flex";
    currentIndex = images.indexOf(reference);
    fullimg.src = reference;
}

function closeimg(){
    FullImgBox.style.display = "none";
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

const currentImageIndexText = document.getElementById('current-image-index');

function updateCurrentImageIndexText() {
  currentImageIndexText.innerText = `Imagen ${currentIndex + 1} de ${images.length}`;
}
 
