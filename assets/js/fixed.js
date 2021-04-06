const header = document.querySelector('.header'),
    headerWrap = document.querySelector('.header__wrap');


window.addEventListener('scroll', function(e) {


        let a = pageYOffset;
        let b = '';

        timeoutID = window.setTimeout(function() {
            b = pageYOffset;

            if (a > b) headerWrap.classList.remove('hide-header');            
            if (a < b) headerWrap.classList.add('hide-header');

        }, 100)

});