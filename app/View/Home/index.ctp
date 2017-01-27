<div class="container">
	<div class="col-lg-6 col-lg-offset-3">
		<form>
		  <div class="form-group">
		    <label for="mes">Mes a monitorear</label>
		    <select class="form-control" id="mes">
		      <option value="1">Enero</option>
		      <option value="2">Febrero</option>
		      <option value="3">Marzo</option>
		      <option value="4">Abril</option>
		      <option value="5">Mayo</option>
		      <option value="6">Junio</option>
		      <option value="7">Julio</option>
		      <option value="8">Agosto</option>
		      <option value="9">Septiembre</option>
		      <option value="10">Octubre</option>
		      <option value="11">Noviembre</option>
		      <option value="12">Diciembre</option>
		    </select>
				<label for="anio">Año a monitorear</label>
				<select class="form-control" id="anio">
					<option value="2001">2001</option>
					<option value="2002">2002</option>
					<option value="2003">2003</option>
					<option value="2004">2004</option>
					<option value="2005">2005</option>
					<option value="2006">2006</option>
					<option value="2007">2007</option>
					<option value="2008">2008</option>
					<option value="2009">2009</option>
					<option value="2010">2010</option>
					<option value="2011">2011</option>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
					<option value="2014">2014</option>
					<option value="2015">2015</option>
					<option value="2016">2016</option>
					<option value="2017">2017</option>
				</select>
		  </div>
		</form>
		<button class="btn btn-info" id="monitor">Iniciar Monitoreo</buttom>
	</div>
</div>

<br><br>
<div class="row">
	<div class="col-lg-6 col-lg-offset-3">
		<div class="panel panel-info hidden">
				<div class="panel-heading text-center ">Resultados</div>
				<!-- Table -->
				<table class="table" id="resultados">

				</table>

				<div class="panel-footer text-center">
					Disponibilidad total del sistema:
				</div>

		</div>
	</div>
</div>


<!--

<p>
	<span class="notice success">Para ver disponibilidad del servidor: <a href='<?php echo "http://".$_SERVER['SERVER_NAME']."/tarea_1_CE/servidor/disponibilidad/".date('m-Y'); ?>'><?php echo "http://".$_SERVER['SERVER_NAME']."/tarea_1_CE/servidor/disponibilidad/mes-año"; ?></a></span>
</p>
<p>
	<span class="notice success">Para ver disponibilidad del smbd: <a href='<?php echo "http://".$_SERVER['SERVER_NAME']."/smbd/disponibilidad/".date('m-Y'); ?>'></a><?php echo "http://".$_SERVER['SERVER_NAME']."/smbd/disponibilidad/mes-año"; ?></span>
</p>
<p>
	<span class="notice success">Para ver disponibilidad de la aplicaci&oacute;n: <a href='<?php echo "http://".$_SERVER['SERVER_NAME']."/aplicacion/disponibilidad/".date('m-Y'); ?>'></a><?php echo "http://".$_SERVER['SERVER_NAME']."/aplicacion/disponibilidad/mes-año"; ?></span>
</p>
<p>
	<span class="notice success">Para ver disponibilidad del router: <a href='<?php echo "http://".$_SERVER['SERVER_NAME']."/router/disponibilidad/".date('m-Y'); ?>'></a><?php echo "http://".$_SERVER['SERVER_NAME']."/router/disponibilidad/mes-año"; ?></span>
</p>
<p>
	<span class="notice success">Para ver disponibilidad del internet: <a href='<?php echo "http://".$_SERVER['SERVER_NAME']."/internet/disponibilidad/".date('m-Y'); ?>'></a><?php echo "http://".$_SERVER['SERVER_NAME']."/internet/disponibilidad/mes-año"; ?></span>
</p>
-->
