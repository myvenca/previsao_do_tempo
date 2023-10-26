const key = "1b2010f66e84f581a001e648ac5b9b28"
//Essa funcao toda busca que ele realizar
//ele vai colocar os dados na tela!
function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
//Vamos buscar a cidade pelo o servidor
//Podemos chamar essa funcao "buscarCidade" dentro do botao e chamar o input
//async para avisar que irá acessar um servidor!
async function buscarCidade(cidade) {
    //Criei uma variavel onde o servidor me enviar! 
    //await ele faz a funcao de pausar o asysc para esperar pelo retorno.
    //ate o servidor responder!
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}
//Quando clicar no input cidade ele vai chamar minha função!
//A minha função vai procurar o meu input ele vai pegar o valor que está dentro dele!
// Ele vai mostrar aqui na tela no console.log
function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}

