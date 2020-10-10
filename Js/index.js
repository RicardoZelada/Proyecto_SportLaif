var elem = document.querySelector('.js-switch');
var init = new Switchery(elem,{
    secondaryColor : "red",
    size : "small",
});


window.mostrarErrores = (listaErrores)=>{//le paso la lista de errores
let error = document.querySelector("#divErrores");
let ol = document.createElement("ol");
ol.classList.add("alert", "alert-danger");
listaErrores.forEach((items)=>{
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = items
    ol.appendChild(li);
});
    error.appendChild(ol);
}





const btnAux = document.querySelector("#btnAgregar");

btnAux.addEventListener('click', ()=>{
    let erroresDivs = document.querySelector("#divErrores");
    erroresDivs.innerHTML = "";

    let name = document.querySelector("#inputNombre").value.trim();
    let plan = document.querySelector("#selectPlan").value;
    let pago = document.querySelector("#selectPago").value;
    //let check = document.querySelector("#inputCheck").value;

    listaErrores = [];
    if(name === ""){
        listaErrores.push("Ingrese un Nombre");
    }if(plan ==="#"){
        listaErrores.push("Seleccione un tipo de plan");
    }if(pago === "#"){
        listaErrores.push("Seleccione un tipo de pago");
    //}if(check === "False"){
        //listaErrores.push("Seleccione un estado")    
    }if(listaErrores.length === 0){
        let registro = {}//creo un objeto registro
        registro.nombre = name;
        registro.tipoplan = plan;
        registro.tipopago = pago;
        //registro.estado = check;

        window.guardarRegistro(registro)//le paso el objeto
    }else{
        window.mostrarErrores(listaErrores);//le paso la lista de errores
    }
});