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

window.registro = []//creo una lista para guardar los registros

window.guardarRegistro = ()=>{
    let cardCliente = document.querySelector("#cardRegistro");
    //cardCliente.classList.add("row", "row-cols-3", "row-cols-md-3")
    cardCliente.classList.add("row","mx-auto","justify-content-center");
    cardCliente.innerHTML = "";
    let imagen = '';
   // "col-md-6","col-sm-12","col-lg-10",
    window.registro.forEach((items)=>{
        //creo el card
        let card = document.createElement("div");
        card.innerHTML = "";
        card.classList.add("card","mt-5");
        //creo el card header 
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header","bg-dark","text-white","text-center");
        cardHeader.innerText = "Bienvenido a Sportlaif " + items.nombre;
        //creo el card body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body","text-center");
            if(items.tipoplan === "1"){
                cardBody.innerText = "Plan de 2 veces por semana, total a pagar $ 14.000";
            }else if(items.tipoplan === "2"){
                cardBody.innerText = "Plan de 4 veces por semana, total a pagar $ 17.000";
            }else{
                (items.tipoplan === "3")
                    cardBody.innerText = "Plan ilimitado semanal, total a pagar $ 20.000";     
            }
        //if para seleccionar foto
        if(items.tipopago === "1"){
            imagen = 'efectivo.png';
        }else if(items.tipopago === "2"){
            imagen = 'credito.png';
        }
        let img = document.createElement("img");
        img.src = "Img/"+imagen;    
        img.style = "width:128px";
        img.classList.add("mx-auto");
        //creo el footer
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
            if(items.estado !== true){
                cardFooter.innerText = "Atrasado"
                cardFooter.classList.add("text-danger")
            }else{
                cardFooter.innerText = "Pagado"
            }
    
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(img); 
    card.appendChild(cardFooter);
    cardCliente.appendChild(card);
    });
};


const btnAux = document.querySelector("#btnAgregar");

btnAux.addEventListener('click', ()=>{
    let erroresDivs = document.querySelector("#divErrores");
    erroresDivs.innerHTML = "";

    let name = document.querySelector("#inputNombre").value.trim();
    let plan = document.querySelector("#selectPlan").value;
    let pago = document.querySelector("#selectPago").value;
    let box = document.querySelector("#inputCheck").checked;

    listaErrores = [];
    if(name === ""){
        listaErrores.push("Ingrese un Nombre");
    }if(plan ==="#"){
        listaErrores.push("Seleccione un tipo de plan");
    }if(pago === "#"){
        listaErrores.push("Seleccione un tipo de pago");
    //}if(box === "False"){
        //listaErrores.push("Seleccione un estado")    
    }if(listaErrores.length === 0){
        let registro = {}//creo un objeto registro
        registro.nombre = name;
        registro.tipoplan = plan;
        registro.tipopago = pago;
        registro.estado = box;

        window.registro.push(registro);
        window.guardarRegistro(registro)//le paso el objeto
    }else{
        window.mostrarErrores(listaErrores);//le paso la lista de errores
    }
});