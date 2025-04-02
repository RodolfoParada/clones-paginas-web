
//   document.addEventListener("DOMContentLoaded", function () {
//     let myCarousel = new bootstrap.Carousel(document.getElementById("#carouselExampleCaptions"), {
//       interval: 3000, // Velocidad de cambio (3 segundos)
//       wrap: true,     // Permitir que el carrusel vuelva al primer slide
//       ride: "carousel"
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
  let accordionElement = document.getElementById("accordionTextFour");
  let imgElement = accordionElement.querySelector("img");

  // Crea un nuevo elemento <style> para agregar los estilos
  let style = document.createElement("style");
  style.innerHTML = `
    .fullscreen-img {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
      z-index: 1050;
      background-color: rgba(0, 0, 0, 0.8);
      display: block;
      margin: 0;
    }
  `;
  document.head.appendChild(style);

  // Cuando el usuario hace clic en el acordeón, expandir la imagen
  accordionElement.addEventListener("click", function() {
    imgElement.classList.add("fullscreen-img");
  });

  // Si el usuario hace clic en la imagen expandida, la vuelve a su estado normal
  imgElement.addEventListener("click", function() {
    imgElement.classList.remove("fullscreen-img");
  });
});

