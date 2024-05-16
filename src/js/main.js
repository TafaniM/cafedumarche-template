//burgermenu
//burgermenu
//burgermenu
//burgermenu

// Sélectionnez le bouton du menu burger
const menuToggle = document.querySelector(".menu-toggle");

// Sélectionnez le menu déroulant
const menuDropdown = document.querySelector(".menu-dropdown");

// Sélectionnez l'image de la croix pour fermer le menu déroulant
const closeButton = document.querySelector(".menu-dropdown img");

// Ajoutez un écouteur d'événements de clic au bouton du menu burger
menuToggle.addEventListener("click", function () {
  // Affichez ou masquez le menu déroulant
  menuDropdown.style.display === "none"
    ? (menuDropdown.style.display = "block")
    : (menuDropdown.style.display = "none");

  // Ajoutez ou supprimez la classe pour bloquer le défilement
  document.body.classList.toggle("disable-scroll");
});

// Ajoutez un écouteur d'événements de clic à l'image de la croix
closeButton.addEventListener("click", function () {
  // Masquez le menu déroulant lorsque vous cliquez sur la croix
  menuDropdown.style.display = "none";

  // Supprimez la classe pour bloquer le défilement
  document.body.classList.remove("disable-scroll");
});

// Sélectionnez tous les liens dans le menu déroulant
const menuLinks = document.querySelectorAll(".menu-dropdown a");

// Parcourir tous les liens et ajouter un gestionnaire d'événements de clic
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Masquez le menu déroulant lorsque vous cliquez sur un lien
    menuDropdown.style.display = "none";
    // Supprimez la classe pour bloquer le défilement
    document.body.classList.remove("disable-scroll");
  });
});

//carousel
//carousel
//carousel
//carousel

const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 0;
const totalImages = carousel.children.length;

// Fonction pour faire défiler le carousel vers la gauche
function scrollLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Aller à la dernière image si on est à la première
  }
  updateCarousel();
}

// Fonction pour faire défiler le carousel vers la droite
function scrollRight() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Revenir à la première image si on est à la dernière
  }
  updateCarousel();
}

// Met à jour la position du carousel
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Ajoutez des écouteurs d'événements de clic aux flèches
leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", scrollRight);

// Fonction pour faire défiler le carousel vers la gauche
function scrollLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Aller à la dernière image si on est à la première
    carousel.style.transition = "none"; // Désactiver la transition pour un mouvement instantané
    carousel.style.transform = `translateX(-${totalImages * 100}%)`; // Faire avancer le carousel d'une longueur d'une image supplémentaire vers la droite
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out"; // Réactiver la transition pour une animation fluide
      currentIndex = totalImages - 1; // Mettre à jour l'index actuel à la dernière image
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Afficher la dernière image
    }, 0); // Attendre une petite période avant de réactiver la transition
  }
}

// // Fonction pour faire défiler le carousel vers la droite
// function scrollRight() {
//   if (currentIndex < totalImages - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0; // Revenir à la première image si on est à la dernière
//   }
//   updateCarousel();
// }
