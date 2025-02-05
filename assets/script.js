let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

// Đóng menu khi bấm ra ngoài
document.addEventListener('click', function(event) {
    let isClickInsideMenu = nav.contains(event.target) || menu.contains(event.target);
    
    if (!isClickInsideMenu) {
        nav.classList.remove('open');
        menu.classList.remove('bx-x');
    }
});