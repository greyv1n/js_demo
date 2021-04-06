const slider = () => {

    const btn = document.querySelectorAll('.reviews__btn'),
        info = document.querySelectorAll('.reviews__item'),
        next = document.querySelector('.btn--rigth'),
        prev = document.querySelector('.btn--left');

    let step = 0;

    function hideSlide () {
        info.forEach(item => {
            item.style.display = 'none'
        });
    }
    
    function showSlide(i) {
        info.forEach((elem, index) => {
            if (i === index) {
                elem.style.display = 'block';
            }
        })
    }

    hideSlide();
    showSlide(step);


    prev.onclick =(e)=> {
        e.preventDefault();
        if (step <= 0) {
            step = info.length - 1;
            hideSlide();
            showSlide(step)
        } else {
            step--;
            hideSlide();
            showSlide(step)
        }
    }

    next.onclick =(e)=> {
        e.preventDefault();
        if (step >= info.length - 1) {
            step = 0;
            hideSlide();
            showSlide(step)
        } else {
            step++;
            hideSlide();
            showSlide(step)
        }
    }   
}

slider();