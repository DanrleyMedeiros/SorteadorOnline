let cron

function botaoSortear() {
  const botaoStart = document.querySelector(".botaoStart")
  botaoStart.style.left = "-100%"
  botaoStart.style.transform = "translateX(0)"
  
  setTimeout(() => {
    const botaoRefresh = document.querySelector(".botaoRefresh")
    botaoRefresh.style.left = "50%"
    botaoRefresh.style.transform = "translateX(-50%)"
  }, "2000");


  let min = Math.ceil(document.querySelector('.min').value);

  let max = Math.floor(document.querySelector('.max').value);

  cron = setInterval(() => {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(result)
    const resultadoFinal = document.querySelector("h1");
    resultadoFinal.style.fontSize = "100px"
    resultadoFinal.innerHTML = result
  }
    , 30);

  setTimeout(() => {
    clearInterval(cron);
  }, "2000");

  setTimeout(() => {
    const h3 = document.querySelector("h3")
    h3.style.fontSize = "70px"
    const newtext = "🎇🎆Parabéns ao ganhador!!!✨🎉"
    document.getElementById("text").innerHTML = newtext

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    document.getElementById("comprovanteData").innerHTML = dataFormatada
    document.getElementById("comprovanteHora").innerHTML = horaFormatada

    const data = document.querySelector(".data")
    data.style.visibility = "visible";
  }, "2000");
}

function botaoRefresh() {
  const data = document.querySelector(".data")
  const botaoRefresh = document.querySelector(".botaoRefresh")
  const newtext = "DM Sorteio"
  document.getElementById("text").innerHTML = newtext
  document.querySelector(".max").value = ' ';
  document.querySelector(".min").value = ' ';
  botaoRefresh.style.left = "100%"
  botaoRefresh.style.transform = "translateX(0)"
  data.style.visibility = "hidden"
}

function clickInput() {
  const botaoStart = document.querySelector(".botaoStart")
  botaoStart.style.left = "50%"
  botaoStart.style.transform = "translateX(-50%)"

  const botaoRefresh = document.querySelector(".botaoRefresh")
  botaoRefresh.style.left = "100%"
  botaoRefresh.style.transform = "translateX(0)"
  data.style.visibility = "hidden"

  const newtext = "DM Sorteio"
  document.getElementById("text").innerHTML = newtext

  const data = document.querySelector(".data")
  data.style.visibility = "hidden"
}


