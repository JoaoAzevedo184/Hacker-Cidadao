// Tela de login
// Adicionando a função da lógica do login
// Eu coloquei algumas informações que eu achei importante para o login de um doador, se quiser pode adicionar ou tirar algum. 
function enviarLogin(event) {
    event.preventDefault(); 

    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();


    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return false;
    } 
    
    if (!emailValido.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return false;
    }


  // Botão de enviar cadastro 
     if (event.submitter.id === 'btnLoginDoador') {
        alert('Login realizado com sucesso!'); 

    return true;
}
 return false;
}
document.getElementById('senhaMostrar').addEventListener('change', function () {
    let senhaInput = document.getElementById('senha');
    senhaInput.type = this.checked ? 'text' : 'password';
});