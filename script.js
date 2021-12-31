// let projeto1 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/oNwwQPe"><li class="media">📝 Calculadora de Média</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543872029294622/Screen_Shot_2021-09-28_at_7.41.09_PM.png?`
// };

// let projeto2 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/OJgjNWX" target="_blank"><li class="temp">🌡 Conversor de Temperatura</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543873019162674/Screen_Shot_2021-09-28_at_7.41.53_PM.png?`
// };

// let projeto3 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/WNOZoBZ" target="_blank"><li class="moedas">🪙 Conversor de Moedas</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543875577696266/Screen_Shot_2021-09-28_at_7.43.12_PM.png?`
// };

// let projeto4 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/dyRVKyq" target="_blank"><li class="km">🚀 Conversor de Quilometragem</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543881856548894/Screen_Shot_2021-09-28_at_7.46.14_PM.png?`
// };

// let projeto5 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/dyRJeKv" target="_blank"><li class="ment">🔮 Mentalista</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543881353232384/Screen_Shot_2021-09-28_at_7.45.40_PM.png?`
// };

// let projeto6 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/QWgQKLa" target="_blank"><li class="flix">🍿 FantasyFlix</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543885031637032/Screen_Shot_2021-09-28_at_7.47.03_PM.png?`
// };

// let projeto7 = {
//   nome: `<a href="https://annereginatto.github.io/TabelaClassificacao/" target="_blank"><li class="classificacao">🏆 Tabela de Classificação</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543886851973160/Screen_Shot_2021-09-28_at_7.47.31_PM.png?width=1642&height=877`
// };

// let projeto8 = {
//   nome: `<a href="https://annereginatto.github.io/SuperTrunfo/" target="_blank"><li class="supertrunfo">🃏 SuperTrunfo</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892543891281178694/Screen_Shot_2021-09-28_at_7.47.58_PM.png?`
// };

// let projeto9 = {
//   nome: `<a href="https://codepen.io/annereginatto/full/LYLJOXW" target="_blank"><li class="certificard">🌐 Certificard</li></a>`,
//   imagem: `https://media.discordapp.net/attachments/892543656219774997/892553175343710228/Screen_Shot_2021-09-28_at_8.26.59_PM.png?`
// };

// let projetos = [
//   projeto1,
//   projeto2,
//   projeto3,
//   projeto4,
//   projeto5,
//   projeto6,
//   projeto7,
//   projeto8,
//   projeto9
// ];

// let imagemProjeto = document.querySelector(".imagem-projeto");

// for (let i = 0; i < projetos.length; i++) {
//   document.querySelector("ol").innerHTML += `${projetos[i].nome}`;
//   imagemProjeto.innerHTML += `<img class="imagem-projeto" src="${projetos[i].imagem}">`;
// }

function darkMode() {
  document.body.classList.toggle("dark");
  let mode = document.querySelector(".tema");
  if (mode.innerHTML == "🌙 Dark Mode") {
    mode.innerHTML = "☀️ Clear Mode";
  } else {
    mode.innerHTML = "🌙 Dark Mode";
  }
}