const header = document.getElementById('myHeader');
const scrollThreshold = 10; // Adjust this value to control when the header appears
const mobilebutton = document.getElementById('check');

let lastScrollPosition = window.pageYOffset;
let isScrollingUp = false;

function ToggleMenu() {
  const headerUL = document.getElementById('header-nav-ul');
  headerUL.classList.toggle('mobileOpen');
}

function handleScroll() {
    const currentScrollPosition = window.pageYOffset;
  
    if (currentScrollPosition < lastScrollPosition) {
      // Scrolling upwards
      isScrollingUp = true;
      header.classList.add("show");
      header.classList.remove("hidden");
    } else if (currentScrollPosition > lastScrollPosition + scrollThreshold) {
      // Scrolling downwards beyond the scrollThreshold
      isScrollingUp = false;
      header.classList.add("hidden");
      header.classList.remove("show");
    }
  
    lastScrollPosition = currentScrollPosition;
  }

window.addEventListener('scroll', handleScroll);
mobilebutton.addEventListener('click', ToggleMenu);
