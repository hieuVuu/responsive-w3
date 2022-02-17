const modal = document.getElementById('modal');
const modalBody = document.querySelector('.modal-body')
const closeBtns = document.querySelectorAll('.close-btn');
const openBtns = document.querySelectorAll('.buy-btn');
const menuBtn = document.querySelector('.menu-btn');

//show hide modal
const hideModal = () => {
    console.log(1);
    modal.style.display = 'none';
}
const showModal = () => {
    modal.style.display = 'flex';
}
for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', hideModal)
}

for (const openBtn of openBtns) {
    openBtn.addEventListener('click', showModal)
}

modal.addEventListener('click', hideModal)
modalBody.addEventListener('click', (event) => {
    event.stopPropagation();
})

// open close menu btn
let toggleBtn = true;
menuBtn.addEventListener('click', () => {
    if (toggleBtn) {
        document.getElementById('header').style.height = 'auto'
        toggleBtn = false;
    } else {
        document.getElementById('header').style.height = '46.5px'
        toggleBtn = true;
    }
})