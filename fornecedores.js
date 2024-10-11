const fornecedores = {
    Toko: [],
    Mercado: [],
    Copal: [],
    Ambev: [],
    Tirol: [],
    Caixas: [],
    Sorvete: []
};

// Carrega a lista de itens da lista principal
function carregarLista() {
    const savedItemList = localStorage.getItem('shoppingList'); // Corrigido para 'shoppingList'
    if (savedItemList) {
        const itemList = JSON.parse(savedItemList);
        itemList.forEach(item => {
            const fornecedor = determinarFornecedor(item.name); // Use item.name
            if (fornecedor) {
                adicionarItemFornecedor(fornecedor, item);
            }
        });
    }
}

// Adiciona item ao fornecedor correto
function adicionarItemFornecedor(fornecedor, item) {
    if (fornecedores[fornecedor]) {
        fornecedores[fornecedor].push(item);
    }
}

// Exibe a lista de fornecedores e seus itens
function exibirFornecedores() {
    const fornecedorList = document.getElementById('fornecedorList');
    fornecedorList.innerHTML = ''; // Limpa a lista antes de exibir novamente

    for (const fornecedor in fornecedores) {
        if (fornecedores[fornecedor].length > 0) {
            const fornecedorDiv = document.createElement('div');
            fornecedorDiv.classList.add('fornecedor');

            const fornecedorTitle = document.createElement('h2');
            fornecedorTitle.textContent = fornecedor;
            fornecedorDiv.appendChild(fornecedorTitle);

            const itemList = document.createElement('ul');
            fornecedores[fornecedor].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - ${item.quantity}`; // Exibe o nome e a quantidade
                itemList.appendChild(listItem);
            });

            fornecedorDiv.appendChild(itemList);
            fornecedorList.appendChild(fornecedorDiv);
        }
    }
}

// Determina o fornecedor de um item
function determinarFornecedor(item) {
    // Lógica para determinar o fornecedor
    const fornecedorMapping = {
        'mussarela': 'Toko',
        'lombo': 'Toko',
        'bacon': 'Toko',
        'parmessao': 'Toko',
        'provolone': 'Toko',
        'catupiry': 'Toko',
        'cheddar': 'Toko',
        'presunto': 'Toko',
        'coco': 'Toko',
        'pano': 'Toko',
        'oregano': 'Toko',
        'mesinha': 'Toko',
        'divisoria': 'Toko',
        'creme de leite': 'Toko',
        'luva': 'Toko',
        'amendoin': 'Toko',
        'confete': 'Toko',
        'marnjericao': 'Toko',
        'azeitona': 'Toko',
        'ovo': 'Toko',
        'milho': 'Toko',
        'palmito picado': 'Toko',
        'palmito rodela': 'Toko',
        'molho': 'Toko',
        'atum': 'Toko',
        'ervilha': 'Toko',
        'bisnaga preto': 'Toko',
        'bisnaga branco': 'Toko',
        'rustica': 'Copal',
        'batata': 'Copal',
        'aimpim': 'Copal',
        'polenta': 'Copal',
        'cerveja': 'Ambev',
        'requeijao': 'Tirol',
        'cheddar p': 'Tirol',
        'big': 'Caixas',
        'grande': 'Caixas',
        'media': 'Caixas',
        'broto': 'Caixas',
        'cebola': 'Mercado',
        'tomate': 'Mercado',
        'alface': 'Mercado',
        'detergente': 'Mercado',
        'banana': 'Mercado',
        'banana': 'Mercado',
        'lixa': 'Mercado',
        'fraldinha': 'Mercado',
        'picanha': 'Mercado',
        'file': 'Mercado',
        'alcool 70': 'Mercado',
        'veja': 'Mercado',
        
    };

    for (const key in fornecedorMapping) {
        if (item.toLowerCase().includes(key)) {
            return fornecedorMapping[key];
        }
    }
    return null; // Se não encontrar um fornecedor
}

// Função para voltar e manter a lista
document.getElementById('backButton').onclick = function () {
    window.history.back(); // Volta para a página anterior
};

// Carrega a lista de itens ao abrir a página
carregarLista();
exibirFornecedores();
