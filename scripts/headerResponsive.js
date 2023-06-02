const header = document.getElementById('myHeader');
const scrollThreshold = 10; // Adjust this value to control when the header appears
const mobilebutton = document.getElementById('check');
const mobilebuttonIcon = document.getElementById('mobileBtnIcon');
const navElements = document.querySelectorAll('#header-nav-ul li, .header-item1');


let lastScrollPosition = window.pageYOffset;
let isScrollingUp = false;


function toggleScrolling() {
  if (mobilebutton.checked) {
    // Enable scrolling
    document.body.style.overflow = 'hidden';
    
  } else {
    // Disable scrolling
    document.body.style.overflow = 'auto';
    
  }
}

function enableNavElements() {
  for (const navElement of navElements) {
    navElement.style.pointerEvents = "auto";
  }
}

function disableNavElements() {
  for (const navElement of navElements) {
    navElement.style.pointerEvents = "none";
  }
}

function ToggleMenu() {
  const headerUL = document.getElementById('header-nav-ul');
  headerUL.classList.toggle('mobileOpen');
}

function changeBtnIcon() {

  if(mobilebutton.checked) {

    mobilebuttonIcon.classList.replace("fa-bars","fa-times-circle");
console.log("changed icon from bars to X")
  }
  else {

    mobilebuttonIcon.classList.replace("fa-times-circle","fa-bars");
    console.log("changed icon from X to bars")
  }


}

function handleScroll() {
    const currentScrollPosition = window.pageYOffset;
  
    if (currentScrollPosition < lastScrollPosition) {
      // Scrolling upwards
      isScrollingUp = true;
      header.classList.add("show");
      header.classList.remove("hidden");
      enableNavElements();
    } else if (currentScrollPosition > lastScrollPosition + scrollThreshold) {
      // Scrolling downwards beyond the scrollThreshold
      isScrollingUp = false;
      header.classList.add("hidden");
      header.classList.remove("show");
      disableNavElements();
    }
  
    lastScrollPosition = currentScrollPosition;
  }

window.addEventListener('scroll', handleScroll);
mobilebutton.addEventListener('click', ToggleMenu);
mobilebutton.addEventListener('change', toggleScrolling);
mobilebutton.addEventListener('change', changeBtnIcon);
