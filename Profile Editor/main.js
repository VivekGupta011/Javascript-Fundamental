
function handleFormSubmit(e){
    e.preventDefault();
    if(editButton.textContent==='Edit Profile'){
        editButton.textContent='Save Profile';
        hide(firstNameText);
        hide(lastNameText);
        show(firstNameInput);
        show(lastNameInput);
    }else{
        editButton.textContent='Edit Profile';


        
        hide(firstNameInput);
        hide(lastNameInput);
        show(firstNameText);
        show(lastNameText);
    }
}



function handleFirstNameChange() {
    firstNameText.textContent = firstNameInput.value;
    helloText.textContent = (
        'Hello ' +
        firstNameInput.value + ' ' +
        lastNameInput.value + '!'
    )
}

function handleLastNameChange() {
    lastNameText.textContent = lastNameInput.value;
    helloText.textContent = (
        'Hello ' +
        firstNameInput.value + ' ' +
        lastNameInput.value + '!'
    );
}

function hide(el) {
    el.style.display = 'none';
}

function show(el) {
    el.style.display = '';
}
var editButton = document.getElementById('editButton');
var firstNameInput = document.getElementById('firstNameInput');
var firstNameText = document.getElementById('firstNameText');
var lastNameInput = document.getElementById('lastNameInput');
var lastNameText = document.getElementById('lastNameText');
var helloText = document.getElementById('helloText');
var form = document.getElementById('form');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
