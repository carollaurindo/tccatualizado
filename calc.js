
function calcularDivisao() {
  var valor = parseFloat(document.getElementById("valor").value);

  var quesito1 = valor * 0.5;
  var quesito2 = valor * 0.3;
  var quesito3 = valor * 0.2;

  document.getElementById("resultado1").textContent = "$" + quesito1.toFixed(2);
  document.getElementById("resultado2").textContent = "$" + quesito2.toFixed(2);
  document.getElementById("resultado3").textContent = "$" + quesito3.toFixed(2);
}

const botaoExibirCodigo = document.getElementById('botaoExibirCodigo');
const codigoContainer = document.getElementById('codigoContainer');

botaoExibirCodigo.addEventListener('click', function () {
if (codigoContainer.style.display === 'none') {
  codigoContainer.style.display = 'block';
} else {
  codigoContainer.style.display = 'none';
}
});

const botaoAbrirBlocoDeNotas = document.getElementById('botaoAbrirBlocoDeNotas');
const blocoDeNotas = document.getElementById('blocoDeNotas');

botaoAbrirBlocoDeNotas.addEventListener('click', function () {
if (blocoDeNotas.style.display === 'none') {
  blocoDeNotas.style.display = 'block';
} else {
  blocoDeNotas.style.display = 'none';
}
});

const botaoAbrirLista = document.getElementById('botaoAbrirLista');
const lista = document.getElementById('lista');

botaoAbrirLista.addEventListener('click', function () {
if (lista.style.display === 'none') {
  lista.style.display = 'block';
  adicionarItemLista();
} else {
  lista.style.display = 'none';
}
});

function adicionarItemLista() {
const novoItem = document.createElement('li');
novoItem.className = 'lista-item';

const inputTexto = document.createElement('input');
inputTexto.type = 'text';
inputTexto.placeholder = 'Digite um item';
inputTexto.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
      inputTexto.blur();
  }
});

const botaoRemover = document.createElement('span');
botaoRemover.className = 'botao-remover';
botaoRemover.textContent = 'Remover';
botaoRemover.addEventListener('click', function () {
  lista.removeChild(novoItem);
});

novoItem.appendChild(inputTexto);
novoItem.appendChild(botaoRemover);
lista.appendChild(novoItem);

inputTexto.focus();
}