let currentIndex = 0;

const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg"
];

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex];
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex];
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex];
}

function filterImages(category) {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
document.addEventListener("keydown", function(event) {
    if (lightbox.style.display === "flex") {
        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }

        if (event.key === "Escape") {
            closeLightbox();
        }
    }
});