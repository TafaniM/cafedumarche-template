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
