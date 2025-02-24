// Aguardar o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Capturar o botão de envio
    const submitBtn = document.getElementById("submitBtn");

    // Função para capturar os dados do formulário e exibir a mensagem
    submitBtn.addEventListener("click", function () {
        // Capturar os valores dos campos
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const cidade = document.getElementById("cidade").value;

        // Verificar se todos os campos estão preenchidos
        if (nome && idade && cidade) {
            // Exibir a mensagem formatada
            const resultado = document.getElementById("resultado");
            resultado.style.display = "block"; // Mostrar o resultado
            resultado.textContent = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
