$(document).ready(function(){
    $("#monitor").click(function(){

      var url1 = "http://localhost/tarea_1_CE/";
      var url2 = "/disponibilidad/"+$("#mes").val()+"-"+$("#anio").val();

      var servidor = url1+"servidor"+url2;
      var smdb = url1+"smbd"+url2;
      var aplicacion = url1+"aplicacion"+url2;
      var internet = url1+"internet"+url2;
      var router = url1+"router"+url2;

      $.ajax({ dataType: "json", url: servidor,  success: function(result){
      }});
      $.ajax({ dataType: "json", url: smdb,  success: function(result){
      }});
      $.ajax({ dataType: "json", url: aplicacion,  success: function(result){
      }});
      $.ajax({ dataType: "json", url: internet,  success: function(result){
      }});
      $.ajax({ dataType: "json", url: router,  success: function(result){
      }});
    });
});
