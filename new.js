'use strict'


//atividade deixar o parabens verde e o cuidado vermelho e fazer um input ranger

function camposvalidos(){
    //a função reportValidity faz aparecer uma mensagem automatica na tela !
    return document.getElementById('formulario').reportValidity();
}
function calcularimc(){
    return imc = peso / (altura * altura);

}
function classificarimc(imc){
    let texto;
    if(imc <= 18.5){
        texto = ' e voce esta abaixo do peso'
    }else if(imc > 18.5 && imc <= 24.9){
        texto = ' e voce esta com peso ideal '
    }else if(imc >= 25 && imc <= 29.9){
        texto = ' e voce esta levemente acima do peso '
    }else if(imc >= 30 && imc <= 34.9){
        texto = 'e voce esta acima do peso '
    }else if (imc >=  35 && imc <= 39.9){
        texto = 'e voce esta com obsidade grau 1 '
    }
   else if (imc < 40){
       texto = 'voce está com obsidade grau 2'
   }
   else {
       texto = 'e voce esta com obesidade grau 3, cuidado'
   }
   return texto;
}        
    function mostrarResultado(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    //validando com funçoes peso e altura e nome pra ver se tem algo nos campos
    if(camposvalidos(nome,altura,peso)){
    const imc = calcularimc(altura, peso);
    let texto;
    let texto = classificarimc(imc);
    resultado.textContent = `${nome} Seu imc é de ${imc.toFixed(2)} ${texto}`

}
else {
    resultado.textContent = 'Preencha todos os campos por gentileza !'
}
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);


