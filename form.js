// Select the DOM
const form = document.querySelector('.form');
const msg = document.querySelector('.message');
const name_input = document.querySelector('input[name="name"]');
const email_input = document.querySelector('input[name="email"]');


let isFormValid = false;

const validate_inputs = () => {
    name_input.nextElementSibling.classList.add('hidden');
    isFormValid = true;

    if(!name_input.value) {
        name_input.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
};

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate_inputs();
    if (isFormValid){
        form.remove();
        msg.classList.remove("hidden");
    }
});

name_input.addEventListener('input', () => {
    validate_inputs();
});


    