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
                    <a href="#" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small uk-button-large uk-border-rounded">Express</a>
                  </div>
              </div>
          </div>

          <div class="uk-text-center uk-grid-collapse" uk-grid>
              <div class="uk-width-1-1">
                  <div class="uk-card">
                    <a href="welcome.html"><button class="uk-button  uk-width-1-1 uk-button-large uk-box-shadow-xlarge ingresar uk-margin-medium uk-text-bold
                      uk-margin-remove uk-padding-remove
                      uk-border-rounded" >Ver Detalles</button></a>
                  </div>
              </div>
          </div>
    </div>
  </div>
</div>
  `;
  $(".nuevos-servicios").append(nuevoServicio);
}

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
                    <a href="#" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small uk-button-large uk-border-rounded">Express</a>
                  </div>
              </div>
          </div>

          <div class="uk-text-center uk-grid-collapse" uk-grid>
              <div class="uk-width-1-1">
                  <div class="uk-card">
                    <a href="welcome.html"><button class="uk-button  uk-width-1-1 uk-button-large uk-box-shadow-xlarge confirmados uk-margin-medium uk-text-bold
                      uk-margin-remove uk-padding-remove
                      uk-border-rounded" >Ver Detalles</button></a>
                  </div>
              </div>
          </div>
    </div>
  </div>
</div>
  `;
  $(".mis-servicios").append(miServicio);
}
