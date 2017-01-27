$(document).ready(function(){

    $("#monitor").unbind('click').click(function(){

      $(".panel").removeClass("hidden");
      //var url1 = window.location.hostname+"/";
      var url2 = "/disponibilidad/"+$("#mes").val()+"-"+$("#anio").val();

      var servidor ="servidor"+url2;
      var smdb = "smbd"+url2;
      var aplicacion = "aplicacion"+url2;
      var internet = "internet"+url2;
      var router = "router"+url2;
      var disponTotal = 1;
      var error=0;

      $("#resultados").empty();

      $.ajax({ dataType: "json", async: false, url: servidor,  success: function(result){
        if(result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
          disponTotal = disponTotal * result["disponibilidad"];
          error=1;
        }
      }});
      $.ajax({ dataType: "json", async: false, url: smdb,  success: function(result){
        if(!result["error"]!="BAD REQUEST"){
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      }});
      $.ajax({ dataType: "json", async: false, url: aplicacion,  success: function(result){
        if(!result["error"]!="BAD REQUEST"){        
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      }});
      $.ajax({ dataType: "json", async: false, url: internet,  success: function(result){
        if(!result["error"]!="BAD REQUEST"){        
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      }});
      $.ajax({ dataType: "json", async: false, url: router,  success: function(result){
        if(!result["error"]!="BAD REQUEST"){        
          $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
            disponTotal = disponTotal * result["disponibilidad"];
            error=1;
        }
      }});

      console.log(error);

      if(error==1){
        $(".panel-footer").empty().append(disponTotal);
        error=0;
      }else{
        $(".panel-footer").empty().append('<h3>Ha ocurrido un error con la fecha, verif&iacute;quela</h3>');        
      }

    });
});
