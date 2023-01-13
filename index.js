const btn = document.querySelector('.btn-login')
const modalPurchase = document.querySelector('.modal-purchase')
const background = document.querySelector('.background')
const btnCancel = document.querySelector('.btn-cancel')
const modalCancel = document.querySelector('.modal-cancel')

btn.addEventListener('click', () => {
    modalPurchase.classList.toggle('on')
    modalPurchase.style.top = '50%'
    background.classList.toggle('background-on')
    setTimeout(() => {
        modalPurchase.classList.toggle('off')
        modalPurchase.style.top = ''
        background.classList.remove('background-on')
    }, 2000);
    
})

btnCancel.addEventListener('click', () => {
    modalCancel.classList.toggle('on')
    modalCancel.style.top = '50%'
    background.classList.toggle('background-on')
    setTimeout(() => {
        modalCancel.classList.toggle('off')
        modalCancel.style.top = ''
        background.classList.remove('background-on')
    }, 2000);
})