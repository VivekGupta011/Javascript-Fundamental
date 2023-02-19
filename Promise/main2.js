let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('seccess');
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;


// handleTextare
function handleTextareaChange() {
    if (textarea.value.length === 0) {
        disable(button);
    } else {
        enable(button);
    }
}

function enable(el) {
    el.disabled = false;
}

function disable(el) {
    el.disabled = true;
}

function hide(el) {
    el.style.diplay = 'none';
}
function show(el) {
    el.style.diplay = '';
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() == 'istanbul') {
                resolve();
            } else {
                reject(new Error("Good guess but a wrong answer.Try again!"));
            }
        },1500);
    })
}


async function handleFormSubmit(e){
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try{
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    }catch(err){
        show(errorMessage);
        errorMessage.textContent='wrong!';
    }
}