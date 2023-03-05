const open = document.querySelectorAll('.open');

open.forEach(function(element) {
    element.addEventListener('click', e => {
        e.stopPropagation();
        const targetId = e.target.getAttribute('data-target');
        const hidden = document.getElementById(targetId);
        if(hidden != null){

                setTimeout(() => {
                    hidden.classList.toggle('template-hidden');
                }, 350); // tiempo en milisegundos
        }
    });
});

