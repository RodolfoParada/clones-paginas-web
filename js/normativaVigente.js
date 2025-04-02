class AcordeonAnidado extends HTMLElement {
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
                    
                    Constitución Pólitica de la República de Chile
                     
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
                        Ley 18.097
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
                        Código de Minería
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
                        Ley 20.551
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
                         Ley 20.819
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
                        Ley 21.169
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
                        Ley 20.026
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
                        Ley 21.420
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
                        Ley 21.536
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
                        Ley 21.462
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
                        Ley 19.719
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
                        DFL 302
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
                         DL 2886
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
                        DECRETO N°1 - 1986 - Ministerio de Minería
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

                  <div class="accordion-item">
                <h2 class="accordion-header" id="headingUno">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUno" aria-expanded="false" aria-controls="collapseUno">
                        DECRETO N°132 - 2002 - Ministerio de Minería
                         <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                    </button>
                </h2>
                <div id="collapseUno" class="accordion-collapse collapse" aria-labelledby="headingUno">
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

                  <div class="accordion-item">
                <h2 class="accordion-header" id="headingDos">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDos" aria-expanded="false" aria-controls="collapseDos">
                        DECRETO N°248 - 2007 - Ministerio de Minería
                         <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                    </button>
                </h2>
                <div id="collapseDos" class="accordion-collapse collapse" aria-labelledby="headingDos">
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

                    <div class="accordion-item">
                <h2 class="accordion-header" id="headingTres">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTres" aria-expanded="false" aria-controls="collapseTres">
                        DECRETO N°41 - 2012 - Ministerio de Minería
                         <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                    </button>
                </h2>
                <div id="collapseTres" class="accordion-collapse collapse" aria-labelledby="headingTres">
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

                      <div class="accordion-item">
                <h2 class="accordion-header" id="headingCuatro">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCuatro" aria-expanded="false" aria-controls="collapseCuatro">
                        DECRETO N°104 - 2012 - Ministerio de Minería
                         <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                    </button>
                </h2>
                <div id="collapseCuatro" class="accordion-collapse collapse" aria-labelledby="headingCuatro">
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


                <div class="accordion-item">
                <h2 class="accordion-header" id="headingCinco">
                    <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCinco" aria-expanded="false" aria-controls="collapseCinco">
                        DECRETO N°1465 - 2005 - Ministerio de Minería
                         <img src="/assets/mineria.gob.cl/icono/flecha-abajo.png" alt="Abrir" class="icon-open icon-container">
                      <img src="/assets/mineria.gob.cl/icono/flecha-arriba.png" alt="Cerrar" class="icon-close icon-container">
                    </button>
                </h2>
                <div id="collapseCinco" class="accordion-collapse collapse" aria-labelledby="headingCinco">
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

window.customElements.define("acordeon-anidado", AcordeonAnidado);






// normativa minera
class NormativaMinera extends HTMLElement {
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
                      
                      Ley 20.235
                       
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
                          Código de Aguas
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
                          Marco normativo general
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
                          Ley 19.300
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
                           Decreto N° 40 - Ministerio del Medio Ambiente
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
                          Decreto N°594 - Ministerio de Salud
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
                           Decreto Supremo N°76 - 2003 - Ministerio de Minería
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
                           Decreto Supremo N°2 - 2022 - Ministerio de Minería
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
                          Resolución Exenta N°786 - 2021 - Ministerio de Minería
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
                          Resolución Exenta N°2600 - 2022 / DGA
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
                          Resolución Exenta N°2682 - 2022 / DGA
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
    
          </div>
        `;
    }
  }
  
 