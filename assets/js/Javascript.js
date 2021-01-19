function openLogin(input1 , input2) {
    var a = document.querySelector(input1);
    a.style.display = 'flex';

    var open = document.querySelector(input2);
    open.style.display = 'block';
}

function closeLogin(input1 , input2) {
    var a = document.querySelector(input1);
    a.style.display = 'none';

    var open = document.querySelector(input2);
    open.style.display = 'none';
}

function showModal(input1 , input2) {
    var tmp = document.querySelector(input1);
    tmp.classList.toggle(input2);
}

function closeModal_Navbar(input1 , input2) {
    var a = document.querySelector(input1);
    a.style.display = 'none';

    var open = document.querySelector(input2);
    open.style.transform = 'translateX(-100%)';
}

function openModal_Navbar(input1 , input2) {
    var a = document.querySelector(input1);
    a.style.display = 'block';

    var open = document.querySelector(input2);
    open.style.transform = 'translateX(0%)';
    open.style.opacity = 1;
}


