const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('formGroupExampleInput');
const emailInput = document.querySelector('exampleInputEmail1');
const dtInput = document.querySelector('date');
const msg = document.querySelector('.msg');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value=== '' ||
    dtInput === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
    }else{
        console.log('success');
    }
}