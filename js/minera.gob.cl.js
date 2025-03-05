ocument.addEventListener("DOMContentLoaded", function(){
    // Array con las rutas de las imágenes (íconos)
    const imageUrls = [
      "/assets/mineria.gob.cl/banners/boton-1.png",
      "/assets/mineria.gob.cl/banners/boton-2.png",
      "/assets/mineria.gob.cl/banners/boton-3.png",
      "/assets/mineria.gob.cl/banners/boton-4.png",
      "/assets/mineria.gob.cl/banners/boton-5.png"
    ];
    
    // Variable para saber cuál es el primer ícono visible (índice en imageUrls)
    let startIndex = 0;
    const container = document.getElementById("carouselContainer");
    const prevBtn = document.getElementById("btn-atras");
    const nextBtn = document.getElementById("btn-siguiente");
    
    // Función para actualizar el contenido visible (4 íconos) según startIndex
    function updateCarousel() {
      container.innerHTML = "";
      for (let i = 0; i < 4; i++) {
        let index = (startIndex + i) % imageUrls.length;
        let img = document.createElement("img");
        img.src = imageUrls[index];
        img.alt = "Ícono " + (index + 1);
        container.appendChild(img);
      }
    }
    
    // Actualización inicial
    updateCarousel();
    
    // Función para realizar la transición (fade out - update - fade in)
    function transitionCarousel(newStartIndex) {
      container.style.opacity = "0";
      
      // Espera a que termine el fade-out para actualizar el contenido
      container.addEventListener("transitionend", function handler() {
        container.removeEventListener("transitionend", handler);
        startIndex = newStartIndex;
        updateCarousel();
        // Forzamos reflow para que la transición de fade in se ejecute
        container.offsetWidth;
        container.style.opacity = "1";
      });
    }
    
    // Botón Siguiente: oculta el primer ícono y muestra el siguiente al final
    nextBtn.addEventListener("click", function(){
      // Nuevo índice: se "descarta" el primer ícono visible
      let newIndex = (startIndex + 1) % imageUrls.length;
      transitionCarousel(newIndex);
    });
    
    // Botón Anterior: oculta el último ícono y muestra uno nuevo al inicio
    prevBtn.addEventListener("click", function(){
      // Para regresar, si startIndex es 0 se pasa al último índice
      let newIndex = (startIndex - 1 + imageUrls.length) % imageUrls.length;
      transitionCarousel(newIndex);
    });
  });