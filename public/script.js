
// Código da funcionalidade de exibir as pessoas que precisam receber a doação 
// busca todos os receptores do banco
    function carregarReceptores() {
        fetch('http://localhost:3000/api/receptores')
            .then(response => response.json())
            .then(receptores => {
                const listaElement = document.getElementById('listaReceptores');
                listaElement.innerHTML = '';  

                receptores.forEach(receptor => {
                    const item = document.createElement('li');
                    item.innerHTML = `
                        <strong>Nome:</strong> ${receptor.nome}<br>
                        <strong>Tipo Sanguíneo:</strong> ${receptor.tipoSanguineo}<br>
                        <strong>Urgente:</strong> ${receptor.urgencia ? 'Sim' : 'Não'}<br>
                        <strong>Data da Solicitação:</strong> ${receptor.dataSolicitacao}
                    `;
                    listaElement.appendChild(item);
                });
            })
            .catch(error => console.error('Erro ao carregar os receptores:', error));
    }

    window.onload = carregarReceptores;