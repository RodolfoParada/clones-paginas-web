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



   document.addEventListener("DOMContentLoaded", function() {
     // Selecciona todos los botones de acordeón
     const accordionButtons = document.getElementById(".button-accordion");

     accordionButtons.forEach(button => {
         button.addEventListener("click", function() {
             const target = document.querySelector(this.getAttribute("data-bs-target"));

             if (target) {
                 if (target.classList.contains("show")) {
                     target.classList.remove("show");
                 } else {
                     document.querySelectorAll(".accordion-collapse").forEach(collapse => collapse.classList.remove("show"));
                     target.classList.add("show");
                 }
             }
         });
     });
 });

 class CarruselAnidado extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  
                  I Región de Tarapacá
                   
                    <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                    <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                   
                  </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="accordionFlushExample">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Wladimir Alejandro Astudillo Castillo</b></p> 
                         <p class="mb-1">Fono: <b>(57) 2423167</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>wastudillo@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Arturo del Río 2847, Iquique.</b></p> 
                        </div> 
                      </div> 
                    </div>            
                  </div>
              </div>
          </div>
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      II Region de Antofagasta
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Macarena Pía Barramuño González</b></p> 
                         <p class="mb-1">Fono: <b>(5(55) 2538282 – (55) 2538283 – (55) 2538284</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>mbarramuno@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Avenida Croacia 0254, Antofagasta.</b></p> 
                        </div> 
                      </div> 
                    </div>         
                  </div>
              </div>
          </div>
          <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      III Región de Atacama
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Juan Carlos Peña Pérez</b></p> 
                         <p class="mb-1">Fono: <b>(52) 2212537</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>jpena@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Chacabuco Nº 546, Piso 3, Depto. 31, Edificio Copayapu, Copiapó</b></p> 
                         </div> 
                        </div> 
                      </div>                 
                    </div>
                  </div>
              </div>
              <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      IV Región de Coquimbo
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour">
                 <div class="accordion-body"> 
                    <div class="container"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Constanza Alterego Espinosa Henríquez</b></p> 
                         <p class="mb-1 fs-6">Fono: <b>(51) 2219984 – (51) 2211505 – (51) 2215485</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1 fs-6">Correo electrónico: <b>caespinosa@minmineria.cl</b></p> 
                         <p class="mb-1 fs-6">Dirección: <b>Pedro Pablo Muñoz Nº 650, Edificio ENAMI, La Serena.</b></p> 
                         </div> 
                        </div> 
                      </div>             
                    </div>
                </div>
              </div>
                    

<div class="accordion-item">
              <h2 class="accordion-header" id="headingTexas">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTexas" aria-expanded="false" aria-controls="collapseTexas">
                       V Región de Valparaíso
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseTexas" class="accordion-collapse collapse" aria-labelledby="headingTexas">
                 <div class="accordion-body"> 
                        <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Jaime Rojas Catalán</b></p> 
                         <p class="mb-1">Fono: <b>(34) 2370099</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>jrojas@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b> Calle Salinas N° 1231, Piso 8, San Felipe</b></p> 
                         </div> 
                        </div> 
                      </div>        
                    </div>
                </div>
              </div>


              <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      VI Región del Lib. General Bernardo O'Higgins
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>


              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Bárbara Soledad Gavia Herrera</b></p> 
                         <p class="mb-1">Fono: <b>(72) 2235103</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>bgavia@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Alcázar N°148, Rancagua</b></p> 
                         </div> 
                        </div> 
                      </div>             
                    </div>
                  </div>
              </div>
              <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      VII Región del Maule
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6"><b></b></p> 
                         <p class="mb-1"><b></b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1"><b></b></p> 
                         <p class="mb-1">Dirección: <b>Calle 1 Norte 931, oficina 425, Talca</b></p> 
                         </div> 
                        </div> 
                      </div>             
                    </div>
                  </div>
              </div>
              <div class="accordion-item">
              <h2 class="accordion-header" id="headingEight">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                      VIII Región del Bío Bío
                      <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Roberto Andrés Lagos Correa</b></p> 
                         <p class="mb-1">Fono: <b> (41)2233201 (Oficina Concepción) / (41)2692720 (oficina Curanilahue)</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>rlagos@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Calle Cochrane N° 635, Oficina 1102, Piso 11, Torre A, Edificio Centro Plaza, Concepción</b></p> 
                         </div> 
                        </div> 
                      </div>            
                    </div>
                  </div>
              </div>

              <div class="accordion-item">
              <h2 class="accordion-header" id="headingNine">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                      IX Región de la Araucanía
                      <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Arturo Huenchullán Iribarren</b></p> 
                         <p class="mb-1">Fono: <b> (45) 2212204 – (569) 74325394</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>ahuenchullan@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Lautaro 1121, Temuco.</b></p> 
                         </div> 
                        </div> 
                      </div>            
                    </div>
                  </div>
              </div>

              <div class="accordion-item">
              <h2 class="accordion-header" id="headingTen">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                      XI Región de Aysén del General Carlos Ibañez del Campo
                      <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen">
                 <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Juan Vásquez Alarcón</b></p> 
                         <p class="mb-1">Fono: <b>672233361</b></p> 
                         </div>
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>jvasquez@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Pudú N°72, Coyhaique</b></p> 
                         </div> 
                        </div> 
                      </div>            
                    </div>
                </div>
              </div>

              <div class="accordion-item">
              <h2 class="accordion-header" id="headingIleven">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIleven" aria-expanded="false" aria-controls="collapseIleven">
                      XII Región de Magallanes y de la Antártica Chilena
                      <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseIleven" class="accordion-collapse collapse" aria-labelledby="headingIleven">
                 <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6"><b></b></p> 
                         <p class="mb-1">Fono: <b> (61) 2226565</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b></b></p> 
                         <p class="mb-1">Dirección: <b>José Menéndez Nº 360, Casilla 1261, Punta Arenas.</b></p> 
                         </div> 
                        </div> 
                      </div>               
                    </div>
                </div>
              </div>

              <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwelve">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                      XIII Región de Metropolitana
                      <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve">
                 <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Carlos Cristóbal Hunt Recabarren</b></p> 
                         <p class="mb-1">Fono: <b>24733000</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>chunt@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Amunátegui, 232, piso 16, Santiago</b></p> 
                        </div> 
                      </div> 
                    </div>            
                  </div>
                </div>
              </div>

              <div class="accordion-item">
              <h2 class="accordion-header" id="headingThirteen">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                      XIV Región de Los Ríos
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                       <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen">
                  <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b> Patricio Tenorio Pangui</b></p> 
                         <p class="mb-1">Fono: <b> (63) 2220902</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1"><b></b></p> 
                         <p class="mb-1">Dirección: <b>Carampangue 560, Valdivia</b></p> 
                         </div> 
                        </div> 
                      </div>             
                    </div>
                  </div>
              </div>

              <div class="accordion-item">
              <h2 class="accordion-header" id="headingFourteen">
                  <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                      XV Región de Arica y Parinacota
                       <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                    <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                  </button>
              </h2>
              <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen">
                 <div class="accordion-body"> 
                    <div class="container mt-2"> 
                      <div class="row g-1">
                        <div class="col-6"> 
                         <p class="mb-1 fs-6">Secretario(a) regional ministerial: <b>Daniel Curiqueo Barraza</b></p> 
                         <p class="mb-1">Fono: <b>(58) 2594755 / (58) 2594756</b></p> 
                         </div> 
                         <div class="col-6"> 
                         <p class="mb-1">Correo electrónico: <b>dcuriqueo@minmineria.cl</b></p> 
                         <p class="mb-1">Dirección: <b>Avda. Comandante San Martín Nº146, Edificio Alborada, 5º Piso, Arica.</b></p> 
                         </div> 
                        </div> 
                      </div>      
                    </div>
                 </div>
              </div>

          

      </div>
    `;
  }
}

window.customElements.define('carrusel-anidado', CarruselAnidado);

