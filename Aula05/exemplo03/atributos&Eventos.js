/* Atributos e Eventos */

const meuFormulario = document.getElementById("meuFormulario");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");

// Element.addEventListener(type, Listener)
// Nesse caso o evento acontece quando é dado submit no forms, outros tipos 
// são 'click', acontece quando o botão é clicado; 'keyup', acontece quando uma
// tecla é apertada
meuFormulario.addEventListener("submit", event => {
    // Observe que essa função pode receber como parâmetro o próprio evento
    console.log(event);
    // se você observar bem, uma das propriedades desse meu submit objeto submit
    // é o target, que retorna meu próprio elemento form
    console.log(event.target) //<form id="meuFormulario">
    // para o evento 'click' temos event.target é o próprio botão

    event.preventDefault(); // Impede o envio padrão do formulário
    
    // element.setAttribute(name, value)
    // setAttribute recebe o nome do atributo e o valor que queremos passar para
    // esse atributo. Como style é um atributo, podemos mudar o css do nosso 
    // elemento da seguinte forma:
    // Alterando o estilo dos inputs para exibir borda vermelha
    nomeInput.setAttribute("style", "border: 2px solid red");
    emailInput.setAttribute("style", "border: 2px solid red");
    
    // Pra acessar o texto passado no imput usamos a propriedade element.value
    // Imprimindo os valores dos inputs no console
    console.log("Nome: ", nomeInput.value);
    console.log("E-mail: ", emailInput.value);
});