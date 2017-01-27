<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		CEMON : Centro de Monitoreo
	</title>
	<?php
		echo $this->Html->meta('icon');

	 echo $this->Html->css("bootstrap.css");
	 echo $this->Html->script("jquery-1.9.1.min.js");
	 echo $this->Html->script("bootstrap.min.js");
	 echo $this->Html->script("cemon.js");



		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>

</head>
<body>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="<?php echo "http://".$_SERVER['SERVER_NAME']."/tarea_1_CE/"; ?>">CEMON</a>
    </div>

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Salir</a></li>
      </ul>
  </div><!-- /.container-fluid -->
</nav>

	<div id="container">
		<div id="header">
			<h1 class="text-center">Bienvenido al centro de monitoreo CEMON</h1>
			<br><br>
		</div>
		<div id="content">

			<?php echo $this->Flash->render(); ?>

			<?php echo $this->fetch('content'); ?>
		</div>
		<foter class = "footer navbar-fixed-bottom">
			<div class="container">
				<p class="text-muted">Hecho por: Oscar Valecillos, Alvin Velazquez y Mariangelica Useche	</p>
			</div>

		</div>
	</footer>
	<?php //echo $this->element('sql_dump'); ?>
</body>
</html>
