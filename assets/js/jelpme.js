my_services = [
  {
    "id":"0001",
    "city":"CDMX",
    "customer":"Román López",
    "addres_street": "Zamora 177, Int 101",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "30 feb",
    "hour": "7:00 AM",
    "lenght": "4",
    "lat_service": "19.412901",
    "long_service": "-99.180274"
  },
  {
    "id":"0002",
    "city":"CDMX",
    "customer":"Mauricio Morales",
    "addres_street": "Amatlán 18",
    "addres_neighborhood": "Condesa",
    "service_type": "Expres",
    "date": "30 feb",
    "hour": "12:00 AM",
    "lenght": "3",
    "lat_service": "19.413958",
    "long_service": "-99.174357"
  },
  {
    "id":"0003",
    "city":"CDMX",
    "customer":"Roberto Salgado",
    "addres_street": "Atlixco 5",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "30 feb",
    "hour": "4:00 PM",
    "lenght": "3",
    "lat_service": "19.415771",
    "long_service": "-99.172825"
  }
];

available_services = [
  {
    "id":"0001",
    "city":"CDMX",
    "customer":"Juan Pérez",
    "addres_street": "Zamora 177, Int 101",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "31 feb",
    "hour": "7:00 AM",
    "lenght": "4",
    "lat_service": "19.412901",
    "long_service": "-99.180274"
  },
  {
    "id":"0002",
    "city":"CDMX",
    "customer":"Lupita Gómez",
    "addres_street": "Amatlán 18",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "31 feb",
    "hour": "7:00 AM",
    "lenght": "4",
    "lat_service": "19.413958",
    "long_service": "-99.174357"
  },
  {
    "id":"0003",
    "city":"CDMX",
    "customer":"Carla Robledo",
    "addres_street": "Amsterdam 43",
    "addres_neighborhood": "Condesa",
    "service_type": "Expres",
    "date": "31 feb",
    "hour": "10:00 AM",
    "lenght": "4",
    "lat_service": "19.415621",
    "long_service": "-99.169068"
  },
  {
    "id":"0004",
    "city":"CDMX",
    "customer":"Gabriela Viloria",
    "addres_street": "Cuernavaca 88, Int. 132",
    "addres_neighborhood": "Condesa",
    "service_type": "Unica vez",
    "date": "31 feb",
    "hour": "11:00 AM",
    "lenght": "6",
    "lat_service": "19.413013",
    "long_service": "-99.175914"
  },
  {
    "id":"0005",
    "city":"CDMX",
    "customer":"Luis Sánchez",
    "addres_street": "Cuautla 12",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "31 feb",
    "hour": "3:00 PM",
    "lenght": "4",
    "lat_service": "19.414728",
    "long_service": "-99.175573"
  },
  {
    "id":"0006",
    "city":"CDMX",
    "customer":"Valeria Román",
    "addres_street": "Cozumel 20, Int 32",
    "addres_neighborhood": "Condesa",
    "service_type": "Unica vez",
    "date": "31 feb",
    "hour": "5:00 PM",
    "lenght": "3",
    "lat_service": "19.420301",
    "long_service": "-99.171112"
  },
  {
    "id":"0007",
    "city":"CDMX",
    "customer":"Diana Martínez",
    "addres_street": "Atlixco 5",
    "addres_neighborhood": "Condesa",
    "service_type": "Expres",
    "date": "31 feb",
    "hour": "9:00 AM",
    "lenght": "4",
    "lat_service": "19.415771",
    "long_service": "-99.172825"
  }
];


// loop through all the available services
for(var i = 0; i < available_services.length; i++){
  var nuevoServicio = `
  <div class=" carta uk-card  uk-card-default uk-card-hover uk-grid-match uk-border-rounded servicio">
          <div class="uk-text-center uk-grid-collapse" uk-grid>
              <div class="uk-width-1-1">
                  <div class="uk-card ">
                    <p class="uk-margin-remove">Dirección</p>
                    <h3 class="uk-margin-remove"><b>${available_services[i]["addres_street"]}, ${available_services[i]["addres_neighborhood"]}, ${available_services[i]["city"]}</b></h3>
              </div>
          </div>
        </div>

          <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
              <div class="uk-width-1-2">
                  <div class="uk-card  uk-card-body">
                    <p class="uk-margin-remove">Hora</p>
                    <h3 class="uk-margin-remove"><b>${available_services[i]["hour"]}</b></h3>
                  </div>
              </div>
              <div class="uk-width-1-2">
                  <div class="uk-card uk-card-body">
                    <p class="uk-margin-remove uk-padding-remove">Fecha</p>
                    <h3 class="uk-margin-remove"><b>${available_services[i]["date"]}</b></h3>
                  </div>
              </div>
          </div>

          <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
              <div class="uk-width-1-2">
                  <div class="uk-card  uk-card-body">
                    <p class="uk-margin-remove">Duración</p>
                    <h3 class="uk-margin-remove"><b>${available_services[i]["lenght"]} horas</b></h3>
                  </div>
              </div>
              <div class="uk-width-1-2">
                  <div class="uk-card">

                    <a href="#"
                       class= "
                      ${(available_services[i]["service_type"] === "Recurrente") ? "recurrente-button":
                      (available_services[i]["service_type"] === "Expres") ?  "expres-button" : "unica-vez-button" }

                      uk-button
                      uk-width-1-1
                      uk-margin-small
                      uk-button-large
                      uk-border-rounded ">

                      <b>
                        ${(available_services[i]["service_type"] === "Recurrente") ? "Recurrente":
                        (available_services[i]["service_type"] === "Expres") ?
                        "Express" : "Unica Vez" }
                      </b>
                    </a>

                  </div>
              </div>
          </div>

          <div class="uk-text-center uk-grid-collapse" uk-grid>
              <div class="uk-width-1-1">
                  <div class="uk-card">
                    <a href="#modal${available_services[i]["id"]}-new" uk-toggle><button class="uk-button  uk-width-1-1 uk-button-large uk-box-shadow-xlarge ingresar uk-margin-medium uk-text-bold
                      uk-margin-remove uk-padding-remove
                      uk-border-rounded" >Ver Detalles</button></a>
                  </div>
              </div>
          </div>
    </div>
  </div>

  <!--==================== FULL MODAL FOR A NEW WINDOW ================== -->

      <div id="modal${available_services[i]["id"]}-new" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
          <button class="uk-modal-close-full uk-close-large ingresar" type="button" uk-close></button>
          <div class="uk-grid-collapse uk-child-width-1-2@m uk-flex-middle" uk-grid>
              <div class="uk-backgrond-cover" uk-height-viewport>
                <iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyD9AZc8Rwa0gLzKc19ycokzTkALjo7N4w8&center=${available_services[i]["lat_service"]},${available_services[i]["long_service"]}&zoom=18&maptype=satellite" allowfullscreen>
                </iframe>
              </div>

            <div class="uk-padding-large">

                <!-- ========= Card for service details next to Google MAPS ==== -->
                    <div class=" carta uk-card uk-card-large uk-card-default uk-card-hover uk-grid-match uk-border-rounded servicio">
                            <div class="uk-text-center uk-grid-collapse" uk-grid>
                                <div class="uk-width-1-1">
                                    <div class="uk-card ">
                                      <p class="uk-margin-remove">Dirección</p>
                                      <h3 class="uk-margin-remove"><b>${available_services[i]["addres_street"]}, ${available_services[i]["addres_neighborhood"]}, ${available_services[i]["city"]}</b></h3>
                                </div>
                            </div>
                          </div>

                            <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
                                <div class="uk-width-1-2">
                                    <div class="uk-card  uk-card-body">
                                      <p class="uk-margin-remove">Hora</p>
                                      <h3 class="uk-margin-remove"><b>${available_services[i]["hour"]}</b></h3>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <div class="uk-card uk-card-body">
                                      <p class="uk-margin-remove uk-padding-remove">Fecha</p>
                                      <h3 class="uk-margin-remove"><b>${available_services[i]["date"]}</b></h3>
                                    </div>
                                </div>
                            </div>

                            <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
                                <div class="uk-width-1-2">
                                    <div class="uk-card  uk-card-body">
                                      <p class="uk-margin-remove">Duración</p>
                                      <h3 class="uk-margin-remove"><b>${available_services[i]["lenght"]} horas</b></h3>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <div class="uk-card">
                                      <a href="#" class="${(available_services[i]["service_type"] === "Recurrente") ? "recurrente-button": (available_services[i]["service_type"] === "Expres" ? "expres-button" : "unica-vez-button") }
                                       uk-button uk-width-1-1 uk-margin-small uk-button-large uk-border-rounded "><b>${(available_services[i]["service_type"] === "Recurrente") ? "Recurrente": (available_services[i]["service_type"] === "Expres" ? "Expres" : "Unica Vez" ) }</b></a>
                                    </div>
                                </div>
                            </div>

                            <div class="uk-text-center uk-grid-collapse" uk-grid>
                                <div class="uk-width-1-1">
                                    <div class="uk-card">
                                      <a href="welcome.html"><button class="uk-button  uk-width-1-1 uk-button-large uk-box-shadow-xlarge green-button uk-margin-medium uk-text-bold
                                        uk-margin-remove uk-padding-remove
                                        uk-border-rounded" >Llamar a tu cliente</button></a>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                <!-- ========= Card for service details next to Google MAPS ==== -->
            </div>
          </div>
        </div>
      </div>
    <!--==================== FULL MODAL FOR A NEW WINDOW ================== -->

</div>
  `;
  $(".nuevos-servicios").append(nuevoServicio);
}




// ================================================================================



// loop through all the my services
for(var i = 0; i < my_services.length; i++){
  var miServicio = `
  <div class=" carta uk-card  uk-card-default uk-card-hover uk-grid-match uk-border-rounded servicio">
          <div class="uk-text-center uk-grid-collapse" uk-grid>
              <div class="uk-width-1-1">
                  <div class="uk-card ">
                    <p class="uk-margin-remove">Dirección</p>
                    <h3 class="uk-margin-remove"><b>${my_services[i]["addres_street"]}, ${my_services[i]["addres_neighborhood"]}, ${my_services[i]["city"]}</b></h3>
              </div>
          </div>
        </div>

          <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
              <div class="uk-width-1-2">
                  <div class="uk-card  uk-card-body">
                    <p class="uk-margin-remove">Hora</p>
                    <h3 class="uk-margin-remove"><b>${my_services[i]["hour"]}</b></h3>
                  </div>
              </div>
              <div class="uk-width-1-2">
                  <div class="uk-card uk-card-body">
                    <p class="uk-margin-remove uk-padding-remove">Fecha</p>
                    <h3 class="uk-margin-remove"><b>${my_services[i]["date"]}</b></h3>
                  </div>
              </div>
          </div>

          <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
              <div class="uk-width-1-2">
                  <div class="uk-card  uk-card-body">
                    <p class="uk-margin-remove">Duración</p>
                    <h3 class="uk-margin-remove"><b>${my_services[i]["lenght"]} horas</b></h3>
                  </div>
              </div>
              <div class="uk-width-1-2">
                  <div class="uk-card">

                    <a href="#"
                       class= "
                      ${(my_services[i]["service_type"] === "Recurrente") ? "recurrente-button":
                      (my_services[i]["service_type"] === "Expres") ?  "expres-button" : "unica-vez-button" }

                      uk-button
                      uk-width-1-1
                      uk-margin-small
                      uk-button-large
                      uk-border-rounded ">

                      <b>
                        ${(my_services[i]["service_type"] === "Recurrente") ? "Recurrente":
                        (my_services[i]["service_type"] === "Expres") ?
                        "Express" : "Unica Vez" }
                      </b>
                    </a>

                  </div>
              </div>
          </div>

          <div class="uk-text-center uk-grid-collapse" uk-grid>
              <div class="uk-width-1-1">
                  <div class="uk-card">
                    <a href="#modal${my_services[i]["id"]}-new" uk-toggle><button class="uk-button  uk-width-1-1 uk-button-large uk-box-shadow-xlarge confirmados uk-margin-medium uk-text-bold
                      uk-margin-remove uk-padding-remove
                      uk-border-rounded" >Ver Detalles</button></a>
                  </div>
              </div>
          </div>
    </div>
  </div>

  <!--==================== FULL MODAL FOR A NEW WINDOW ================== -->

      <div id="modal${my_services[i]["id"]}-new" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
          <button class="uk-modal-close-full uk-close-large confirmados" type="button" uk-close></button>
          <div class="uk-grid-collapse uk-child-width-1-2@m uk-flex-middle" uk-grid>
              <div class="uk-backgrond-cover" uk-height-viewport>
                <iframe width="100%" height="95%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyD9AZc8Rwa0gLzKc19ycokzTkALjo7N4w8&center=${my_services[i]["lat_service"]},${my_services[i]["long_service"]}&zoom=18&maptype=satellite" allowfullscreen>
                </iframe>
              </div>

            <div class="uk-padding-large">

                <!-- ========= Card for service details next to Google MAPS ==== -->
                    <div class=" carta uk-card uk-card-large uk-card-default uk-card-hover uk-grid-match uk-border-rounded servicio">
                            <div class="uk-text-center uk-grid-collapse" uk-grid>
                                <div class="uk-width-1-1">
                                    <div class="uk-card ">
                                      <p class="uk-margin-remove">Dirección</p>
                                      <h3 class="uk-margin-remove"><b>${my_services[i]["addres_street"]}, ${my_services[i]["addres_neighborhood"]}, ${my_services[i]["city"]}</b></h3>
                                </div>
                            </div>
                          </div>

                            <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
                                <div class="uk-width-1-2">
                                    <div class="uk-card  uk-card-body">
                                      <p class="uk-margin-remove">Hora</p>
                                      <h3 class="uk-margin-remove"><b>${my_services[i]["hour"]}</b></h3>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <div class="uk-card uk-card-body">
                                      <p class="uk-margin-remove uk-padding-remove">Fecha</p>
                                      <h3 class="uk-margin-remove"><b>${my_services[i]["date"]}</b></h3>
                                    </div>
                                </div>
                            </div>

                            <div class="uk-text-center uk-grid-collapse uk-grid-match" uk-grid>
                                <div class="uk-width-1-2">
                                    <div class="uk-card  uk-card-body">
                                      <p class="uk-margin-remove">Duración</p>
                                      <h3 class="uk-margin-remove"><b>${my_services[i]["lenght"]} horas</b></h3>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <div class="uk-card">
                                      <a href="#" class="${(my_services[i]["service_type"] === "Recurrente") ? "recurrente-button": (my_services[i]["service_type"] === "Expres" ? "expres-button" : "unica-vez-button") }
                                       uk-button uk-width-1-1 uk-margin-small uk-button-large uk-border-rounded "><b>${(my_services[i]["service_type"] === "Recurrente") ? "Recurrente": (my_services[i]["service_type"] === "Expres" ? "Expres" : "Unica Vez" ) }</b></a>
                                    </div>
                                </div>
                            </div>

                            <div class="uk-text-center uk-grid-collapse" uk-grid>
                                <div class="uk-width-1-1">
                                    <div class="uk-card">
                                      <a href="welcome.html"><button class="uk-button  uk-width-1-1 uk-button-large uk-box-shadow-xlarge green-button uk-margin-medium uk-text-bold
                                        uk-margin-remove uk-padding-remove
                                        uk-border-rounded" >Llamar a tu cliente</button></a>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                <!-- ========= Card for service details next to Google MAPS ==== -->
            </div>
          </div>
        </div>
      </div>
    <!--==================== FULL MODAL FOR A NEW WINDOW ================== -->

</div>
  `;
  $(".mis-servicios").append(miServicio);
}
