window.onload = function() {

    const anchors = document.querySelectorAll('.header__item');

    
    for (let item of anchors) {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const blockId = item.getAttribute('href');
            document.querySelector('' + blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    };

}


