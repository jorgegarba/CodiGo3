window.onload = () => {
    
    var mapaGoogle, miPosicion;
    var btnColocarMarcador = document.getElementById("btnMiPosicion");
    var btnQuitarMiPosicion = document.getElementById("btnQuitarMiPosicion");
    var coordAnterior = null;

    let configurarMapa = () => {
      mapaGoogle = new google.maps.Map(document.getElementById('mapa'), {
          center: { lat: -16.51423, lng: -70.316524 },
          zoom: 10,
          styles: [
            {
              "featureType": "road.highway",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#ff3c41"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ff3c41"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ff3c41"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#72c99f"
                }
              ]
            }
          ],
      });
      configurarListeners();
    };

    let configurarListeners = ()=>{
      // Añadiendo evento click al mapa de Google
      mapaGoogle.addListener('click', (coords)=>{
        // ///// INICIO COLOCAR UN MARCADOR
        // Creando un objeto con las propiedades lat y lng
        let miLatLng = {
          lat: coords.latLng.lat(),
          lng: coords.latLng.lng()
        };
        // Creando un marcador de Google con la posición creada en el paso
        // anterior
        var marcador = new google.maps.Marker(
          {
            position: miLatLng,
            icon: './img/parking.png',
            draggable: true
          }
        );
        // Añadiendo el evento doble click al marcador creado
        marcador.addListener('dblclick',()=>{
          marcador.setMap(null);
        });
        // Añadiendo el evento drag al marcador creado
        marcador.addListener('drag',(coords)=>{
          console.log("Lat => " + coords.latLng.lat());
        });
        // Agregar el marcado al mapa de Google
        marcador.setMap(mapaGoogle);
        // ///// FIN COLOCAR UN MARCADOR
        
        if(coordAnterior){
          var coordPolyline = [
            coordAnterior,
            {
              lat: coords.latLng.lat(),
              lng: coords.latLng.lng(),
            }
          ];
        }else{
          var coordPolyline = [
            {
              lat: coords.latLng.lat(),
              lng: coords.latLng.lng(),
            },
            {
              lat: coords.latLng.lat(),
              lng: coords.latLng.lng(),
            }
          ];
        }

        let miPolyline = new google.maps.Polyline({
          path: coordPolyline,
          strokeColor: '#ff0000',
          strokeWeight: 1,
        });

        miPolyline.setMap(mapaGoogle);
        
        
        coordAnterior = {
          lat: coords.latLng.lat(),
          lng: coords.latLng.lng(),
        };

      });
    };

    /**
     * Función que colocar un marcador en la posición actual del usuario
     */
    let colocarMarcador = () =>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos)=>{
          miPosicion = new google.maps.Marker({
            position: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                      },
            title: "Aquí estoy"
          });
          // Asigna el mapa en el que el marcador, va a aparecer
          miPosicion.setMap(mapaGoogle);
          // setCenter => Re-posiciona el campo de visualización del mapa
          // de Google
          mapaGoogle.setCenter({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
        },(error)=>{
          console.log(error.message);
        });
      }else{
        alert("Atención, no ha autorizado a acceder a su ubicación");
      }
    }

    let quitarMiPosicion = () =>{
      miPosicion.setMap(null);
    }

    btnColocarMarcador.onclick = colocarMarcador;
    btnQuitarMiPosicion.onclick = quitarMiPosicion;

    configurarMapa();

};