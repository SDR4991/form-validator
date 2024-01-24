const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmpass = document.getElementById('confirmpass');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatched = false;

function validateForm() {
    
    isValid=form.checkValidity();

    if(!isValid){
        message.textContent = 'Ooops... Please fill up all fields';
        message.style.color ='red';
        messageContainer.style.borderColor = 'red';
    }

    if(password === confirmpass){
        passwordMatched = true;
        password.style.borderColor = 'green';
        confirmpass.style.borderColor = 'green';
    }else{
        passwordMatched = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password.style.borderColor = 'red';
        confirmpass.style.borderColor = 'red';
    }

    if (isValid && passwordMatched){
        message.textContent = 'Successfully Registrated!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData (){
    client = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value
    }

    console.log(client);
}

function processFormData(e){
    e.preventDefault();
    validateForm();
    if(isValid && passwordMatched){
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);