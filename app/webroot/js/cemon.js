$(document).ready(function(){

    $("#monitor").click(function(){

      $(".panel").removeClass("hidden");
      var url1 = "http://localhost/tarea_1_CE/";
      var url2 = "/disponibilidad/"+$("#mes").val()+"-"+$("#anio").val();

      var servidor = url1+"servidor"+url2;
      var smdb = url1+"smbd"+url2;
      var aplicacion = url1+"aplicacion"+url2;
      var internet = url1+"internet"+url2;
      var router = url1+"router"+url2;
      var disponTotal = 1;


      $.ajax({ dataType: "json", async: false, url: servidor,  success: function(result){
        $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
        disponTotal = disponTotal * result["disponibilidad"];
      }});
      $.ajax({ dataType: "json", async: false, url: smdb,  success: function(result){
        $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
          disponTotal = disponTotal * result["disponibilidad"];
      }});
      $.ajax({ dataType: "json", async: false, url: aplicacion,  success: function(result){
        $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
          disponTotal = disponTotal * result["disponibilidad"];
      }});
      $.ajax({ dataType: "json", async: false, url: internet,  success: function(result){
        $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
          disponTotal = disponTotal * result["disponibilidad"];
      }});
      $.ajax({ dataType: "json", async: false, url: router,  success: function(result){
        $("#resultados").append("<tr><td class = \"text-center\">"+result["nombre"]+"</td><td class = \"text-center\">"+result["disponibilidad"]+"</td>");
          disponTotal = disponTotal * result["disponibilidad"];
      }});

      $(".panel-footer").append(disponTotal);
    });
});
