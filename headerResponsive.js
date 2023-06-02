
const mobilebutton = document.getElementById('check');

function ToggleMenu() {

    const headerUL = document.getElementById('header-nav-ul');
headerUL.classList.toggle('mobileOpen')
    
}

mobilebutton.addEventListener('click', ToggleMenu);