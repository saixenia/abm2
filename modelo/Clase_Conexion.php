<?
/*este es la manera orientada a objetos*/
class mysqlcnx {
	var $f;//es la conexion
	var $t;
	var $e;
	function mysqlcnx($bd,$us,$cla){
		$this->f=mysql_connect("",$us,$cla);//conectando a la BD
		mysql_select_db($bd);
	}
	function ejecutar($consulta){
		$this->t=mysql_query($consulta);//lo esta almacenando en una matriz
	}
	function cargar (){
		return ($this->e=mysql_fetch_array($this->t));
	}
	function getdato ($col){
		return $this->e[$col];
	}
}
?>