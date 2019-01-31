
            
    function capturarDatos()
    {
        // obtenemos e valor por el numero de elemento
        var porElementos=document.forms["formFrances"].elements[0].value;
        // Obtenemos el valor por el id
        var valorPrincipal=document.getElementById("vp").value;
        // Obtenemos el valor por el Nombre
        var tasaInteres=document.getElementById("ti").value;
        // Obtenemos el valor por el tipo de tag
        var periodo=document.getElementById("periodo").value;
 var uno=parseInt(1);
        document.getElementById("rpta").innerHTML=" \
            <br>Por VP: "+valorPrincipal+" \
            <br>Por I: "+tasaInteres+" \
            <br>Por N: "+periodo;

        var operacionCuotaConstante= valorPrincipal*(((uno+tasaInteres)**periodo)*tasaInteres)/(((uno+tasaInteres)**periodo)-1);
        document.getElementById("cuotaConstante").innerHTML=" \
        <br>Cuota Constante: "+operacionCuotaConstante;
        console.log(operacionCuotaConstante);
        console.log((1+tasaInteres))
        console.log(periodo + parseInt(1))
        console.log((1+tasaInteres))


    }

    function genera_tabla(){
        var valorPrincipal=document.getElementById("vp").value;
        // Obtenemos el valor por el Nombre
        var tasaInteres=document.getElementById("ti").value;
        // Obtenemos el valor por el tipo de tag
        var periodo=document.getElementById("periodo").value;

        var fila="<tr><td>"+"00"+"</td><td>"+valorPrincipal+"</td><td>"+tasaInteres+"</td><td>"+periodo+"</td><td>"+"cuotaconstante"+"</td></tr>";
    
        var btn = document.createElement("TR");
           btn.innerHTML=fila;
        document.getElementById("tablita").appendChild(btn);
    }







    /*
    function genera_tabla() {
          // Obtener la referencia del elemento body
          var body = document.getElementById("tablaCrono");
         
          // Crea un elemento <table> y un elemento <tbody>
          var tabla   = document.createElement("table");
          var tblBody = document.createElement("tbody");
        //Numero de periodos
          var periodo=document.getElementById("periodo").value;
          // Crea las celdas
          for (var i = 1; i <= periodo; i++) {
            // Crea las hileras de la tabla
            var hilera = document.createElement("tr");
        //okok
         var celda = document.createElement("td");
              var textoCelda = document.createTextNode("celda "+i);
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
///okok
            for (var j = 0; j < 4; j++) {
              // Crea un elemento <td> y un nodo de texto, haz que el nodo de
              // texto sea el contenido de <td>, ubica el elemento <td> al final
              // de la hilera de la tabla
              var celda = document.createElement("td");
              var textoCelda = document.createTextNode("casa "+i);
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
            }
         
            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(hilera);
          }
         
          // posiciona el <tbody> debajo del elemento <table>
          tabla.appendChild(tblBody);
          // appends <table> into <body>
          body.appendChild(tabla);
          // modifica el atributo "border" de la tabla y lo fija a "2";
          tabla.setAttribute("border", "2");
        }*/