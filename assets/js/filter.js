// filter works

function filterWorks() {
    const link = document.querySelector('.works__nav'),
            items = document.querySelectorAll('.potrfolio__col'),
            allLinks = document.querySelectorAll('.works__nav--link');


    function activeClass(num = 0) {
        allLinks.forEach((elem, index )=> {
            elem.classList.remove('active');
            if (num == index) {
                elem.classList.add('active');
            }          
        })
    }    
    activeClass();

    
    allLinks.forEach((elem, i) => {
        elem.addEventListener('click', (e) => {
                e.preventDefault();
                activeClass(i);

                if(e.target.tagName !== 'A') return false;

                let filterClass = e.target.dataset['filter'];
                showItem(filterClass);      
        })        
    })


    function showItem(filter) {
        items.forEach(elem => {
            elem.classList.add('hide');

            if (elem.classList.contains(filter)) {
                elem.classList.remove('hide');
            } 
            if (filter == 'all') {
                elem.classList.remove('hide');
            }
        })
    }


}

filterWorks();





