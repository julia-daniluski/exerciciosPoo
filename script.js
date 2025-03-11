class pessoa { // modelo para criar pessoa
    constructor(nome, idade, tempo) {
        this.nome = nome;
        this.idade = idade;
        this.tempo = tempo;
    }
    apresentar() {
        return `O funcionário ${this.nome} está na nossa equipe há ${this.tempo} anos.`;
    }
}

class medico extends pessoa {
    medicar() {
        return `Olá, sou o ${this.nome} e tenho ${this.idade} anos de idade.`;
    }
}

const Stranger = new medico("Dr. Stranger", 45, 12);
const Grey = new medico("Dra. Grey", 31, 4);
const Buck = new medico("Dr. Buck", 35, 6);
const Grant = new medico("Dra. Grant", 39, 9);
const Lizzie = new medico("Dra. Lizzie", 28, 1);
const Sharma = new medico("Dra. Sharma", 30, 2);

// Espera o conteúdo carregar antes de executar o JS
window.onload = () => {
    const respostaContainer = document.getElementById("respostas");

    // Função para adicionar as informações do médico na página
    function appendDoctorInfo(doctor) {
        const respostaElement = document.createElement("div");
        respostaElement.classList.add("ms-2", "d-flex", "mb-3");

        const iconElement = document.createElement("span");
        iconElement.classList.add("custom-icon");

        const textElement = document.createElement("div");
        textElement.innerHTML = `<i class="bi bi-hospital"></i><p>${doctor.apresentar()}</p><i class="bi bi-person"></i><p>${doctor.medicar()}</p>`;

        respostaElement.appendChild(iconElement);
        respostaElement.appendChild(textElement);
        respostaContainer.appendChild(respostaElement);
    }

    appendDoctorInfo(Stranger);
    appendDoctorInfo(Grey);
    appendDoctorInfo(Buck);
    appendDoctorInfo(Grant);
    appendDoctorInfo(Lizzie);
    appendDoctorInfo(Sharma);
};
