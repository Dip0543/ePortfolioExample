// template_oirnoti
// service_ysl1jxo
// zypVdKY5tsMEQQfeU
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    event.preventDefault()
    
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_ysl1jxo',
            'template_oirnoti',
            event.target,
            'zypVdKY5tsMEQQfeU'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
        console.log('worked')
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is tempirarily unavailable. Please contact directly on EMAIL")
    })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
    }
}