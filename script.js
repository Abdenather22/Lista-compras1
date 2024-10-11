let itemList = [];

// Adicionar item à lista
document.getElementById("addItemButton").onclick = function() {
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = document.getElementById("itemQuantity").value;

    if (itemName && itemQuantity) {
        itemList.push({ name: itemName, quantity: itemQuantity });
        document.getElementById("itemName").value = ""; // Limpa o campo de entrada
        renderItems(); // Atualiza a lista
        document.getElementById("itemName").focus(); // Foca no campo de entrada
    } else {
        alert("Por favor, preencha o nome e a quantidade do item.");
    }
};

// Renderiza os itens na lista
function renderItems() {
    const itemListDiv = document.getElementById("itemList");
    itemListDiv.innerHTML = ''; // Limpa a lista atual

    itemList.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        itemDiv.innerHTML = `
            <span>${item.name} - ${item.quantity}</span>
            <button class="removeButton" onclick="removeItem(${index})">Remover</button>
        `;

        itemListDiv.appendChild(itemDiv);
    });

    // Adiciona o botão de finalizar lista apenas se houver itens
    const finalizeButton = document.getElementById("finalizeListButton");
    finalizeButton.style.display = itemList.length > 0 ? 'block' : 'none';
}

// Remover item da lista
function removeItem(index) {
    itemList.splice(index, 1);
    renderItems(); // Atualiza a lista
}

// Finalizar lista
document.getElementById("finalizeListButton").onclick = function() {
    if (itemList.length > 0) {
        localStorage.setItem('shoppingList', JSON.stringify(itemList));
        window.location.href = "fornecedores.html"; // Redireciona para a página de fornecedores
    } else {
        alert("Adicione pelo menos um item antes de finalizar a lista.");
    }
};

// Mostrar modal de confirmação
document.getElementById("newListButton").onclick = function() {
    document.getElementById("confirmationModal").style.display = "block";
};

// Confirmar a nova lista
document.getElementById("confirmYes").onclick = function() {
    itemList = []; // Limpa a lista atual
    renderItems(); // Atualiza a visualização da lista
    document.getElementById("confirmationModal").style.display = "none"; // Fecha o modal
};

// Cancelar nova lista
document.getElementById("confirmNo").onclick = function() {
    document.getElementById("confirmationModal").style.display = "none"; // Fecha o modal sem fazer alterações
};

// Ao carregar a página, verifica se há lista salva
window.onload = function() {
    const storedList = localStorage.getItem('shoppingList');
    if (storedList) {
        itemList = JSON.parse(storedList);
        renderItems();
    }
};
