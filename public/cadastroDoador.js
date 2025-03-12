// Adicionando a função da lógica do cadastro
// Eu coloquei algumas informações que eu achei importante para um cadastro de um doador, se quiser pode adicionar ou tirar algum. 
function enviarCadastro(event) {
    event.preventDefault(); 
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let tipoSanguineo = document.getElementById('TipoSanguineo').value.trim();
    let numeroTelefone = document.getElementById('numeroTelefone').value.trim();
    let sexo = document.getElementById('sexo').value.trim();

    //validações do email e numero de telefone 
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefoneValido = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;


    if (nome === '' || email === '' || senha === '' || tipoSanguineo === '' || numeroTelefone === '' || sexo === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return false;
    } 
    
    if (!emailValido.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return false;
    }

    if (!telefoneValido.test(telefone)) {
        alert('Por favor, insira um número de telefone válido!');
        return false;
    }


  // Botão de enviar cadastro 
     if (event.submitter.id === 'btnCadastarDoador') {
        alert('Cadastro realizado com sucesso!'); 

    return true;
}
 return false;
}
document.getElementById('senhaMostrar').addEventListener('change', function () {
    let senhaInput = document.getElementById('senha');
    senhaInput.type = this.checked ? 'text' : 'password';
});