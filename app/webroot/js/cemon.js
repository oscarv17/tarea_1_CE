$(document).ready(function(){

    $("#monitor").unbind('click').click(function(){

      $(".panel").removeClass("hidden");

      $(".formu").addClass("hidden");
      $("#monitor").addClass("hidden");

      $(".cont").removeClass("hidden");
      //var url1 = "http://localhost/tarea_1_CE/"; //aqui ponen el dominio
      var url2 = "/disponibilidad/"+$("#mes").val()+"-"+$("#anio").val();

      var servidor ="servidor"+url2;
      var smdb = "smbd"+url2;
      var aplicacion = "aplicacion"+url2;
      var internet = "internet"+url2;
      var router = "router"+url2;
      var disponTotal = 1;
      var error=0;

      $("#resultados").empty();

      $.ajax({ dataType: "json", async: false, url: servidor,
      success: function(result){
        if(result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
          disponTotal = disponTotal * result["disponibilidad"];
          error=1;
        }
      },
      error: function (){
          $("#resultados").append("<tr><td class = \"text-center\">"+"Servidor"+"</td><td class = \"text-center\">No se recibió información del componente</td>");
      }});
      $.ajax({ dataType: "json", async: false, url: smdb,  success: function(result){
        if(result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      },
      error: function (){
          $("#resultados").append("<tr><td class = \"text-center\">"+"Base de Datos"+"</td><td class = \"text-center\">No se recibió información del componente</td>");}
        });
      $.ajax({ dataType: "json", async: false, url: aplicacion,  success: function(result){
        if(result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      },
      error: function (){
          $("#resultados").append("<tr><td class = \"text-center\">"+"Aplicacion"+"</td><td class = \"text-center\">No se recibió información del componente</td>");}
        });
      $.ajax({ dataType: "json", async: false, url: internet,  success: function(result){
        if(result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      },
      error: function (){
          $("#resultados").append("<tr><td class = \"text-center\">"+"Internet"+"</td><td class = \"text-center\">No se recibió información del componente</td>");}
        });
      $.ajax({ dataType: "json", async: false, url: router,  success: function(result){
        if(result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      },
      error: function (){
          $("#resultados").append("<tr><td class = \"text-center\">"+"Router"+"</td><td class = \"text-center\">No se recibió información del componente</td>");}
        });


      if(error==1){
        $(".panel-footer").append(disponTotal);
        error=0;
      }else{
        $(".panel-footer").empty().append('<h3>Ha ocurrido un error con la fecha, verif&iacute;quela</h3>');
      }

    });
});
