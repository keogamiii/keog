
const menuBtn = document.querySelector('.menu');
const menuNav = document.querySelector('.main_menu');

if (menuBtn && menuNav) {
  menuBtn.addEventListener('click', () => {
    const isHidden = menuNav.style.display === 'none' || !menuNav.style.display;
    menuNav.style.display = isHidden ? 'flex' : 'none';
  });
}