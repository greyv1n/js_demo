function burger() {
    const btn = document.querySelector('.burger'),
        nav= document.querySelector('.header__nav ');

    btn.onclick = () => {

        if (btn.classList.contains('active') == false) {
            nav.classList.add('header__nav--sm');
            btn.classList.add('active');
        } else {
            nav.classList.remove('header__nav--sm');
            btn.classList.remove('active');
        }
        
    }
}
burger();