function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso");
    let qntd = parseInt(document.getElementById("qtd").value);
    
    if(tipoIngresso.value == "pista"){
        comprarPista(qntd);
    }else if(tipoIngresso.value == "superior"){
        comprarSuperior(qntd);
    }else{
        comprarInferior(qntd);
    }
}
function comprarPista(qntd){
    let qntdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if(qntd > qntdPista){
        alert("Quantidade de ingresso não disponível!");
    }else{
        document.getElementById("qtd-pista").textContent = qntdPista - qntd;
        alert("Compra realizada com sucesso!");
    }
}

function comprarSuperior(qntd){
    let qntdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if(qntd > qntdSuperior){
        alert("Quantidade de ingresso não disponível!");
    }else{
        document.getElementById("qtd-superior").textContent = qntdSuperior - qntd;
        alert("Compra realizada com sucesso!");
    }
}

function comprarInferior(qntd){
    let qntdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if(qntd > qntdInferior){
        alert("Quantidade de ingresso não disponível!");
    }else{
        document.getElementById("qtd-inferior").textContent = qntdInferior - qntd;
        alert("Compra realizada com sucesso!");
    }
}