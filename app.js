let btn = document.querySelector('#generate')
let qrcode = document.querySelector('.qrcode')

btn.addEventListener('click' , (e) => {
    e.preventDefault()

    let text = document.querySelector('#text').Value;

    if (text = '') {
        alert('Enter Text or URL into Textbox')
    }
    else{
        let qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(text)';

        qrcode.classList.add('active')
        qrcode.src = qr 
    }
})