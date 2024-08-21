let inputTitle = document.querySelector('#input-title');
let inputText = document.querySelector('#input-text');
let submitBtn = document.querySelector('#submit-button'); 


function submitButton() {
    if (inputTitle.value === '' && inputText.value === ''){
        alert('You must input all details');
        deleteBtn.remove();
        editBtn.remove();

    }
    let secondDiv = document.querySelector('#second-div');
    let yourTitle = document.createElement('h2');
    yourTitle.setAttribute('id', 'your-title');
    yourTitle.innerText = inputTitle.value ;
    let yourText = document.createElement('p');
    yourText.setAttribute('id', 'your-text');
    yourText.innerText = inputText.value ;

    secondDiv.appendChild(yourTitle);
    secondDiv.appendChild(yourText);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('id', 'edit-button');
    editBtn.innerText = 'EDIT';

    secondDiv.appendChild(editBtn);
    function editButton(){
        inputTitle.value = yourTitle.innerText;
        inputText.value  = yourText.innerText;
        yourTitle.remove();
        yourText.remove();
        editBtn.remove();
        deleteBtn.remove();

    };
    editBtn.addEventListener('click', editButton);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'delete-button');
    deleteBtn.innerText = 'DELETE';

    secondDiv.appendChild(deleteBtn);
    function deleteButton(){
        yourTitle.remove();
        yourText.remove();
        editBtn.remove();
        deleteBtn.remove();


    };
    deleteBtn.addEventListener('click', deleteButton);
    inputTitle.value = '';
    inputText.value = '';
    

};
submitBtn.addEventListener('click', submitButton);
