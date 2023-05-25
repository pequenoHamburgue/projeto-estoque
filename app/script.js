let stock = [];

function addItem() {
  const itemName = document.getElementById('item-name').value;
  const itemQuantity = parseInt(document.getElementById('item-quantity').value);

  if (itemName && itemQuantity) {
    const item = {
      name: itemName,
      quantity: itemQuantity
    };

    stock.push(item);

    displayStock();
    clearForm();
  }
}

function editItem(index) {
  const newQuantity = parseInt(prompt('Digite a nova quantidade:'));
  if (!isNaN(newQuantity)) {
    stock[index].quantity = newQuantity;
    displayStock();
  }
}

function deleteItem(index) {
  stock.splice(index, 1);
  displayStock();
}

function displayStock() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';

  stock.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML = `${item.name} - ${item.quantity}`;

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Editar';
    editButton.addEventListener('click', () => editItem(index));

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Excluir';
    deleteButton.addEventListener('click', () => deleteItem(index));

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    itemList.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById('item-name').value = '';
  document.getElementById('item-quantity').value = '';
}

