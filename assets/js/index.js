let openInfoBtns = document.querySelectorAll('.questions-list-title_btn');
let textOpenInfoBtns = document.querySelectorAll('.questions-list-title_text');

openInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('open_questions-info')
        btn.children[0].classList.toggle('rotateIcon')
    })
});

textOpenInfoBtns.forEach(btnText => {
    btnText.addEventListener('click', () => {
        btnText.parentElement.parentElement.classList.toggle('open_questions-info')
        btnText.parentElement.children[1].children[0].classList.toggle('rotateIcon')
    })
});
