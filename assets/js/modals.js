function modals(triggerSelectoor, modalSelectot, closeSelector) {
    let trigger = document.querySelectorAll(triggerSelectoor),
        modal = document.querySelector(modalSelectot),
        close = document.querySelector(closeSelector);

        trigger.forEach(elem => {
            elem.onclick =(e)=> {
                if (e.target) {
                    e.preventDefault();
                }       
                let filterClass = elem.dataset['modal'];
                if (filterClass == modal.id) {
                    modal.style.display = 'flex';
                }
                console.log(filterClass)
                console.log(modal.id)
            }
        })

        close.onclick = () => {
            modal.style.display = 'none';
        }

        modal.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

}

modals('.btn__order', '#modal__order', '#modal__order .modal__close');
// modals('.portfolio__item', '#modal__order', '#modal__order .modal__close');
modals('.portfolio__item',  '#modal__works', '#modal__works .modal__close');


let modal = document.querySelectorAll('portfolio__item ');

modal.forEach(elem => {
    elem.onclick = () => {
        console.log('ok')
    }
})


