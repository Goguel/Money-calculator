function processadorValor() {

    // VALOR DIGITADO
    var valor = parseFloat(document.getElementById('txtValor').value);
    
    // ORDEM PARA APARECIMENTO DOS RESULTADOS FUTUROS
    var notasCemSaida = document.getElementById('outNotasCem');
    var notasCinquentaSaida = document.getElementById('outNotasCinquenta');
    var notasVinteSaida = document.getElementById('outNotasVinte');
    var notasDezSaida = document.getElementById('outNotasDez');
    var notasCincoSaida = document.getElementById('outNotasCinco');
    var notasDoisSaida = document.getElementById('outNotasDois');
    var moedasUmSaida = document.getElementById('outMoedasUm');
    var moedasCinquentaSaida = document.getElementById('outMoedasCinquenta');
    var moedasVinteCincoSaida = document.getElementById('outMoedasVinteCinco');
    var moedasDezSaida = document.getElementById('outMoedasDez');
    var moedasCincoSaida = document.getElementById('outMoedasCinco');

    // ORDEM PARA APAGAR OS RESULTADOS ANTERIORES
    notasCemSaida.textContent = '';
    notasCinquentaSaida.textContent = '';
    notasVinteSaida.textContent = '';
    notasDezSaida.textContent = '';
    notasCincoSaida.textContent = '';
    notasDoisSaida.textContent = '';
    moedasUmSaida.textContent = '';
    moedasCinquentaSaida.textContent = '';
    moedasVinteCincoSaida.textContent = '';
    moedasDezSaida.textContent = '';
    moedasCincoSaida.textContent = '';

    // CONDIÇÃO PARA GARANTIR QUE OS CÁLCULOS POSSAM SER EFETUADOS
    if (valor <= 0 || isNaN(valor)) {
        alert("Valor digitado é incoerente. Digite um valor adequado");
        document.getElementById('txtValor').focus();
        return;
    }

    // PARTE DO CÁLCULO (LÓGICA DA QUESTÃO)
    var notasCem = Math.floor(valor / 100);
    var resto = valor % 100; 
    var notasCinquenta = Math.floor(resto / 50);
    var resto = resto % 50; 
    var notasVinte = Math.floor(resto / 20);
    var resto = resto % 20;
    var notasDez = Math.floor(resto / 10);
    var resto = resto % 10;
    var notasCinco = Math.floor(resto / 5);
    var resto = resto % 5;
    var notasDois = Math.floor(resto / 2);
    var resto = resto % 2;
    var moedasUm = Math.floor(resto / 1);
    var resto = resto % 1;
    var moedasCinquenta = Math.floor(resto / 0.50);
    var resto = resto % 0.50;
    var moedasVinteCinco = Math.floor(resto / 0.25);
    var resto = resto % 0.25;
    var moedasDez = Math.floor(resto / 0.10);
    var resto = resto % 0.10;
    var moedasCinco = Math.floor(resto / 0.05);

    // ORDEM DE EXIBIÇÃO DOS RESULTADOS
    if (notasCem > 0) {
        if (notasCem > 1){
         notasCemSaida.textContent = notasCem + ' notas de R$ 100,00';
        } else notasCemSaida.textContent = notasCem + ' nota de R$ 100,00';
     }
     if (notasCinquenta > 0) {
        if (notasCinquenta > 1){
         notasCinquentaSaida.textContent = notasCinquenta + ' notas de R$ 50,00';
        } else notasCinquentaSaida.textContent = notasCinquenta + ' nota de R$ 50,00';
     }
     if (notasVinte > 0) {
         if (notasVinte >1){
           notasVinteSaida.textContent = notasVinte + ' notas de R$ 20,00';
         } else notasVinteSaida.textContent = notasVinte + ' nota de R$ 20,00';
     }
     if (notasDez > 0) {
         if (notasDez > 1 ){
           notasDezSaida.textContent = notasDez + ' notas de R$ 10,00';
         } else notasDezSaida.textContent = notasDez + ' nota de R$ 10,00';
     }   
     if (notasCinco > 0) {
         if (notasCinco > 1){
           notasCincoSaida.textContent = notasCinco + ' notas de R$ 5,00';
         } else notasCincoSaida.textContent = notasCinco + ' nota de R$ 5,00';
     }   
     if (notasDois > 0) {
         if (notasDois > 1){ 
           notasDoisSaida.textContent = notasDois + ' notas de R$ 2,00';
         } else notasDoisSaida.textContent = notasDois + ' nota de R$ 2,00';
     }   
     if (moedasUm > 0) {
        if (moedasUm > 1) { moedasUmSaida.textContent = moedasUm + ' moedas de R$ 1,00';} 
        else moedasUmSaida.textContent = moedasUm + ' moeda de R$ 1,00';
     }
     if (moedasCinquenta > 0) {
        if (moedasCinquenta > 1) { moedasCinquentaSaida.textContent = moedasCinquenta + ' moedas de R$ 0,50'; } 
        else moedasCinquentaSaida.textContent = moedasCinquenta + ' moeda de R$ 0,50';
     }
     if (moedasVinteCinco > 0) {
         if (moedasVinteCinco > 1) { moedasVinteCincoSaida.textContent = moedasVinteCinco + ' moedas de R$ 0,25';} 
         else moedasVinteCincoSaida.textContent = moedasVinteCinco + ' moeda de R$ 0,25';
     }
     if (moedasDez > 0) {
         if (moedasDez > 1) {moedasDezSaida.textContent = moedasDez + ' moedas de R$ 0,10';} 
         else moedasDezSaida.textContent = moedasDez + ' moeda de R$ 0,10';
     }
     if (moedasCinco > 0) {
         if (moedasCinco > 1) {
           moedasCincoSaida.textContent = moedasCinco + ' moedas de R$ 0,05';} 
           else moedasCincoSaida.textContent = moedasCinco + ' moeda de R$ 0,05';
     }
 }

 // ATRIBUIÇÃO AO BOTÃO
 var btExibirNotas = document.getElementById('btExibirNotas');
 btExibirNotas.addEventListener('click', processadorValor);
