const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">';
const atividades = [];
const notas = [];
let linhas = '';
const spanAprovado = '<span class="status Aprovado">Aprovado</span>';
const spanReprovado = '<span class="status Reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a média curricular'));

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()

});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(` A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNota.value));

        let linha = '<tr></tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `<tr></tr>`;
        linhas += linha;

    };


    inputNomeAtividade.value = '';
    inputNota.value = '';

};

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-status').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

};

function calculaMediaFinal() {

    somadasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somadasNotas += notas[i]
    }
    return somadasNotas / notas.length


};
