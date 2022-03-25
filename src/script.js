/*Início da Funcao Converter*/
function Converter(){
  
  //Atribuição da temperatura digitada à variável "valor"
  var valor = parseFloat(document.getElementById("temperatura").value);
  
  
  var valorConvertido;
  
  //Estrutura condicional para checar a escala selecionada e calcular a temperatura
  if(document.getElementById("escalaF").checked == true){
    valorConvertido = ((valor*(9/5))+32).toFixed(1);
  }
  else if(document.getElementById("escalaK").checked == true){
    valorConvertido = (valor+273.15).toFixed(1);
  }
  
  //Atribuição da conversão ao elemento de ID "valorConvertido"
  document.getElementById("valorConvertido").innerHTML = valorConvertido;
}
