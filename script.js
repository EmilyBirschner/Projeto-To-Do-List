const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/**
 * Função para adicionar uma task na 'to-do list'
 * Caso não tenha algo escrino no campo que recebe o texto, um alerta aparece
 * 
 */
function addTask() {

    if (inputBox.value === '') {
        alert("Você deve escrever algo!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
/**
 * Evento para sempre que clicar no container com as tarefas ele verifica onde foi o click
   e adiciona uma classe ao elemento, se o elemento estiver lista, ele marca como 'checado', se o click for no 'x' (elemento span), ele deleta o elemento pai, ou seja, o elemento que estava na lista)
*/
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

/**
 * Evento para adicionar uma tarefa quando "Enter" é pressionado no teclado
 */
window.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (inputBox.value === '') {
            alert("Você deve escrever algo!");
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }
})

/**
 * Função para salvar os dados no browser. Ao atualizar o site, não perde os dados.
 */
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Função que fornece ao navegador todos os dados armazenados com o nome "data"
 */
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
