function habilitar(){
    txtNombre=document.getElementById("txtNombre").value;
    txtApPaterno=document.getElementById("txtApPaterno").value;
    txtApMaterno=document.getElementById("txtApMaterno").value;

    val=0;

    if(txtNombre == "") {
        val++;
    }
    if(txtApPaterno == "") {
        val++;
    }
    if(txtApMaterno == "") {
        val++;
    }
    if(val == 0) {
        document.getElementById("btnContinuar").disabled = false;
    }else{
        document.getElementById("btnContinuar").disabled = true;
    }
}

    document.getElementById("txtNombre").addEventListener("keyup", habilitar);
    document.getElementById("txtApPaterno").addEventListener("keyup", habilitar);
    document.getElementById("txtApMaterno").addEventListener("keyup", habilitar);
    document.getElementById("btnContinuar").addEventListener("click", () => {
    //ir a la siguiente página
    location.href="/html/curp-home.html";
    });