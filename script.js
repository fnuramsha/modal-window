
'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const showModal = document.querySelectorAll('.show-modal')
const modalHidden = document.querySelector('.modal hidden')
const closeModal = document.querySelector('.close-modal')

const hideModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i=0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', openModal)

}

closeModal.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal )



document.addEventListener('keydown', function(e) {
    console.log(e)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        hideModal()
    }


})