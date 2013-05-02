
function AjaxObj(){
    var xmlhttp = null;

    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();

        if (xmlhttp.overrideMimeType)
        {
            xmlhttp.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject)
    { 
        // Internet Explorer    
        try
        {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                xmlhttp = null;
                alert("navegador no compatible");
            }
        }
	
        if (!xmlhttp && typeof XMLHttpRequest!='undefined')
        {
            xmlhttp = new XMLHttpRequest();
	  
            if (!xmlhttp)
            {
                failed = true;
            }
        }
    }
    return xmlhttp;
}

$(document).ready(function(){ //cuando el html fue cargado iniciar

    //añado la posibilidad de editar al presionar sobre edit
    $('.edit').live('click',function(){
        var id=$(this).attr('data-id');
        var url = "../controlador/cerebro.php";
        var ajax = new AjaxObj();
        ajax.open("POST", url, false);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("boton="+"2"+"&valores="+id);
        var i = ajax.responseText;
        document.getElementById("popupbox").innerHTML = i;
        $('#block').show();
        $('#popupbox').show();
    })

    $('.delete').live('click',function(){
        //obtengo el id que guardamos en data-id
        var id=$(this).attr('data-id');
        //preparo los parametros
        //        params={};
        //        params.id=id;
        //        params.action="deleteClient";
        $('#popupbox').load('../vista/cara.php', params,function(){
            $('#content').load('../vista/cara.php',{
                action:"refreshGrid"
            });
        })

    })

    $('#new').live('click',function(){
        //        params={};
        //        params.action="newClient";
        $('#popupbox').load('../vista/cara.php', params,function(){
            $('#block').show();
            $('#popupbox').show();
        })
    })

//    $('.guardar').live('click',function(){
//        var id = document.getElementById("id").value;
//        var nombre = document.getElementById("nombre").value;
//        var apellido = document.getElementById("apllido").value;
//        var fecha = document.getElementById("fecha").value;
//        var peso = document.getElementById("peso").value;
//        var script ="UPDATE clientes SET";
//        script = script + " nombre = "+ nombre;
//        script = script + " apellido = "+ apellido;
//        script = script + " fecha_nac = "+ fecha;
//        script = script + " peso = "+ peso;
//        script = script + " where id="+id;
        //        var url = "../controlador/cerebro.php";
        //        var ajax = new AjaxObj();
        //        ajax.open("POST", url, false);
        //        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //        ajax.send("boton="+"3"+"&valores=" + script);//guarde los datos
        //        var i = ajax.responseText;
//        alert(script)
    //        
    //        $.post('../vista/cara.php',"",function(){
    //            $('#block').hide();
    //            $('#popupbox').hide();
    //            $('#content').load('../vista/cara.php',{
    //                action:"refreshGrid"
    //            });
    //        })
    //        return false;
//    })


    // boton cancelar, uso live en lugar de bind para que tome cualquier boton
    // nuevo que pueda aparecer
    $('#cancel').live('click',function(){
        $('#block').hide();
        $('#popupbox').hide();
    })

})

NS={};

function cargar(id){
    var url = "../controlador/cerebro.php";
    var ajax = new AjaxObj();
    ajax.open("POST", url, false);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("boton="+"1"+"&valores="+id);
    var i = ajax.responseText;
    document.getElementById("contenedor").innerHTML=i;
}
function editar (){
    
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var peso = document.getElementById("peso").value;
    var script ="UPDATE clientes SET";
    script = script + " nombre = "+ nombre;
    script = script + ", apellido = "+ apellido;
    script = script + ", fecha_nac = "+ fecha;
    script = script + ", peso = "+ peso;
    script = script + " where id="+id;
        
        
    var url = "../controlador/cerebro.php";
    var ajax = new AjaxObj();
    ajax.open("POST", url, false);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("boton="+"3"+"&valores="+script);
    var i = ajax.responseText;
    document.getElementById("mensaje").innerHTML = i;
}
function borrar (id){
    var url = "../controlador/cerebro.php";
    var ajax = new AjaxObj();
    ajax.open("POST", url, false);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("boton="+"3"+"&valores="+id);
    var i = ajax.responseText;
    
}