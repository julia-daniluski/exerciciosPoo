class pessoa { // modelo para criar pessoa
    #salário
    constructor(nome, idade, tempo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.tempo = tempo;
        this.#salário = salario;
    }
    apresentar() {
        return `O(a) funcionário(a) ${this.nome} está na nossa equipe há ${this.tempo} anos.`;
    }
}

class medico extends pessoa {
    medicar() {
        return `Olá, sou o(a) ${this.nome} e tenho ${this.idade} anos de idade.`;
    }
}

class enfermeiro extends pessoa {
    enfermar() {
        return `Olá, sou o(a) ${this.nome}, não sou médico(a), mas tenho tanta importância quanto um.`;
    }
}

class faxineira extends pessoa {
    faxinar() {
        return `Olá, sou o(a) ${this.nome}, eu quem mantenho o lugar limpo, o que ajuda na segurança de todos os pacientes.`;
    }
}

const Stranger = new medico("Dr. Stranger", 45, 12, "R$ 10.000,00");
const Grey = new medico("Dra. Grey", 31, 4, " R$ 7.000,00");
const Buck = new enfermeiro("Buck", 35, 6, "R$ 4.800,00");
const Grant = new enfermeiro("Athena Grant", 39, 9, "R$ 5.000,00");
const Lizzie = new medico("Dra. Lizzie", 28, 1, " R$ 14.000,00");
const Sharma = new medico("Dra. Sharma", 30, 2, " R$ 9.000,00");
const Baek = new faxineira("Sophie Baek", 29, 1, "R$ 2.220,00");

// Espera o conteúdo carregar antes de executar o JS
window.onload = () => {
    const respostaContainer = document.getElementById("respostas");

    // Função para adicionar as informações do funcionário na página
    function appendFuncioInfo(funcionario) {
        const respostaElement = document.createElement("div");
        respostaElement.classList.add("ms-2", "d-flex", "mb-3");

        const iconElement = document.createElement("span");
        iconElement.classList.add("custom-icon");

        const textElement = document.createElement("div");

        // Verificar o tipo do funcionário e adicionar o texto correto
        if (funcionario instanceof medico) {
            textElement.innerHTML = `<i class="bi bi-hospital"></i><p>${funcionario.apresentar()}</p><i class="bi bi-person"></i><p>${funcionario.medicar()}</p>`;
        } else if (funcionario instanceof enfermeiro) {
            textElement.innerHTML = `<i class="bi bi-hospital"></i><p>${funcionario.apresentar()}</p><i class="bi bi-person"></i><p>${funcionario.enfermar()}</p>`;
        } else if (funcionario instanceof faxineira) {
            textElement.innerHTML = `<i class="bi bi-hospital"></i><p>${funcionario.apresentar()}</p><i class="bi bi-person"></i><p>${funcionario.faxinar()}</p>`;
        }

        respostaElement.appendChild(iconElement);
        respostaElement.appendChild(textElement);
        respostaContainer.appendChild(respostaElement);
    }

    //Append é uma função que adiciona elementos ao final de uma lista ou conjunto de elementos.
    appendFuncioInfo(Stranger);
    appendFuncioInfo(Grey);
    appendFuncioInfo(Buck);
    appendFuncioInfo(Grant);
    appendFuncioInfo(Lizzie);
    appendFuncioInfo(Sharma);
    appendFuncioInfo(Baek);
};
