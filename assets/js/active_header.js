const active = () => {
    const headerItems = document.querySelectorAll('.header__item');

    function activeClass(num = 4) {
        headerItems.forEach((elem, index )=> {
            elem.classList.remove('active');

            if (num == index) {
                elem.classList.add('active');
            }          
        })
    }    
    activeClass();

    headerItems.forEach((elem, i) => {
        elem.addEventListener('click', (e) => {
                e.preventDefault();
                activeClass(i);      
        })        
    })
}

active();