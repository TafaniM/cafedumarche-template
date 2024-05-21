//burgermenu
//burgermenu
//burgermenu
//burgermenu

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuDropdown = document.querySelector(".menu-dropdown");
  const closeButton = document.querySelector(".menu-dropdown .close-button");
  const menuLinks = document.querySelectorAll(".menu-dropdown a");
  const body = document.body;

  // Vérifie si les éléments sont correctement sélectionnés
  if (!menuToggle || !menuDropdown || !closeButton) {
    console.error(
      "Un ou plusieurs éléments nécessaires n'ont pas été trouvés."
    );
    return;
  }

  console.log("Tous les éléments nécessaires ont été trouvés.");

  // Vérifie si le menu est actuellement ouvert
  function isMenuOpen() {
    return menuDropdown.style.display === "block";
  }

  // Fonction pour ouvrir le menu
  function openMenu() {
    console.log("Ouverture du menu");
    menuDropdown.style.display = "block";
    body.classList.add("disable-scroll");
  }

  // Fonction pour fermer le menu
  function closeMenu() {
    console.log("Fermeture du menu");
    menuDropdown.style.display = "none";
    body.classList.remove("disable-scroll");
  }

  // Ajoute un écouteur d'événements de clic au bouton du menu burger
  menuToggle.addEventListener("click", function () {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Ajoute un écouteur d'événements de clic à l'image de la croix
  closeButton.addEventListener("click", closeMenu);

  // Parcourir tous les liens et ajouter un gestionnaire d'événements de clic
  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Ferme le menu si l'utilisateur clique en dehors du menu
  menuDropdown.addEventListener("click", function (event) {
    if (event.target === menuDropdown) {
      closeMenu();
    }
  });
});

//carousel
//carousel
//carousel
//carousel

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel img");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "inline" : "none";
    });
  }

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Initial display
  showImage(currentIndex);
});
