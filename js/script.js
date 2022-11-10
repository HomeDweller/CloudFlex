const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
}

const link = document.querySelectorAll(".link");

link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    links.classList.remove("active");
}
const cookie = document.querySelector('.cookie');
function accept() {
    cookie.classList.add("visually-hidden");
}



const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    if (nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
};



const nameDiv = document.getElementById('name-control');
const emailDiv = document.getElementById('email-control');
function validityCheck() {
    if (nameDiv.classList.contains('success') && emailDiv.classList.contains('success')) {
        document.getElementById('form').classList.toggle('visually-hidden');
    }

    else if (nameDiv.classList.contains('error') && emailDiv.classList.contains('error')) {
        console.log("nay");
    }

    else if (nameDiv.classList.contains('success') || emailDiv.classList.contains('success')) {
        console.log('meh');
    }
}
