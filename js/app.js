function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd <= 0){
        alert('Quantidade inserida inválida.');
        document.getElementById('qtd').value = '';
        return;
    }
    
    if(tipoIngresso == 'pista'){
       comprarPista(qtd, qtdPista);
       document.getElementById('qtd').value = '';
    
    }else if(tipoIngresso == 'superior'){
               comprarSuperior(qtd, qtdSuperior);
               document.getElementById('qtd').value = ''; 
            }else{
                comprarInferior(qtd, qtdInferior);
                document.getElementById('qtd').value = '';
            }
}

function comprarPista(qtd, qtdPista) {
    if(qtd > qtdPista){
        alert('Quantidade indisponível para tipo: Pista.');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd, qtdSuperior) {
    if(qtd > qtdSuperior){
        alert('Quantidade indisponível para tipo: Cadeira Superior.');
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd, qtdInferior) {
    if(qtd > qtdInferior){
        alert('Quantidade indisponível para tipo: Cadeira Inferior.');
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}