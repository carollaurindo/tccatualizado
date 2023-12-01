var elemento = document.getElementsByName("mostrar");
var iframe = document.getElementsByTagName("iframe");

function qual(){
    elemento.forEach(element => {
        if(element.checked){
            switch(element.value){
                case "categoria":
                    alert("categoria");
                    iframe.src = "categoria.php";
                    break;
                case "lista":
                    alert("Lista");
                    iframe.src = "lista.php";
                    break;
                case "agenda":
                    alert("agenda");
                    iframe.src = "agenda";
                    
                    break;
                
            }
            iframe.location.reload();
        }

    });
}


