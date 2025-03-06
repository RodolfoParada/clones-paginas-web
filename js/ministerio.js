// Script para mostrar el texto al lado derecho solo cuando el acordeón está expandido
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-bs-target');
      document.querySelectorAll('.accordion-text').forEach(text => {
        // Ocultar todos los textos
        text.style.display = 'none';
      });
      // Mostrar el texto correspondiente
      const textElement = document.querySelector(target.replace('#collapse', '#accordionText'));
      if (textElement) {
        textElement.style.display = 'block';
      }
    });
  });



   // Asegúrate de que el colapso no desaparezca visualmente
  //  document.querySelectorAll('.accordion-button').forEach(button => {
  //   button.addEventListener('click', () => {
  //     const target = document.querySelector(button.getAttribute('data-bs-target'));
  //     if (target.classList.contains('collapsing')) {
  //       target.style.height = target.scrollHeight + 'px';
  //     }
  //   });
  // });


    // Inicializar manualmente los colapsos
    const collapseOne = new bootstrap.Collapse(document.getElementById('flush-collapseOne'), {
      toggle: false,
    });
  
    const collapseTwo = new bootstrap.Collapse(document.getElementById('flush-collapseTwo'), {
      toggle: false,
    });
  
    // Controlar los colapsos con botones
    document.getElementById('btnMostrar').addEventListener('click', () => {
      collapseOne.show();
    });
  
    document.getElementById('btnOcultar').addEventListener('click', () => {
      collapseOne.hide();
    });
  
    document.getElementById('btnAlternar').addEventListener('click', () => {
      collapseOne.toggle();
    });