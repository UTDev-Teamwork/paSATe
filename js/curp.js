function habilitar(){
    txtCurp=document.getElementById("txtCurp").value;

    val=0;

    if(txtCurp == "") {
        val++;
    }
    if(val == 0) {
        document.getElementById("btnContinuar").disabled = false;
    }else{
        document.getElementById("btnContinuar").disabled = true;
    }
}

    document.getElementById("txtCurp").addEventListener("keyup", habilitar);
    document.getElementById("btnContinuar").addEventListener("click", () => {
    //ir a la siguiente página
    location.href="/html/direccion.html";
    });