<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include_once 'Clase_Conexion.php';

class mostrar {

    function __construct() {
        
    }

    function cargardatos($param = NULL) {
        $u = new mysqlcnx("abm", "root", "");
        if ($param == NULL) {
            $u->ejecutar("select * from clientes");
            ?>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Peso</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while ($u->cargar()) { ?>
                        <tr>
                            <td><?php echo $u->getdato(0); ?></td>
                            <td><?php echo $u->getdato(1); ?></td>
                            <td><?php echo $u->getdato(2); ?></td>
                            <td><?php echo $u->getdato(3); ?></td>
                            <td><?php echo $u->getdato(4); ?></td>
                            <td><input type="button" id="edit" class="edit" value="Editar" data-id='<?php echo $u->getdato(0); ?>'/></td>
                            <td><input type="button" value="Borrar" onclick="borrar('<?php echo $u->getdato(0); ?>')"/></td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table> 
            <?
        } else {
            $u->ejecutar("select * from clientes where id = " . $param);
            while ($u->cargar()) {
                ?>
                <form name ="client" id="client" method="POST">
                    <input type="hidden" name="id" id="id" value="<?php echo $u->getdato(0); ?>">
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="nombre" id="nombre" value = "<?php echo $u->getdato(1); ?>">
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" name="apellido" id="apellido" value = "<?php echo $u->getdato(2); ?>">
                    </div>
                    <div>
                        <label>Fecha</label>
                        <input type="text" name="fecha" id="fecha" value = "<?php echo $u->getdato(3); ?>">(yyyy-mm-dd)
                    </div>
                    <div>
                        <label>Peso</label>
                        <input type="text" name="peso" id="peso" value = "<?php echo $u->getdato(4); ?>">
                    </div>
                    <div class="buttonsBar">
                        <input id="cancel" type="button" value ="Cerrar" />
                        <input id="guardar" type="button" name="guardar" value ="Guardar" onclick="editar()" />
                        <br>
                        <samp id="mensaje"></samp>
                    </div>
                </form>
                <?
            }
        }
    }

    function actualizar($id, $nombre, $apellido, $fecha, $peso) {
        $u = new mysqlcnx("abm", "root", "");
        $script = "update clientes set ";
        $script = $script . " nombre= " . $nombre;
        $script = $script . " apellido= " . $apellido;
        $script = $script . " fecha_nac= " . $fecha;
        $script = $script . " peso= " . $peso;
        $script = $script . " where id = " . $id;
        $u->ejecutar($script);
    }

    function borrar($id) {
        $u = new mysqlcnx("abm", "root", "");
        $u->ejecutar("delete from clientes where id=" . $id);
    }
}

//$f = new mostrar();
//$f->cargardatos(2);
?>
