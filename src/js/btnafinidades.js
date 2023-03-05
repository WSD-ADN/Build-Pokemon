const toggleVer = document.querySelectorAll('.toggle-ver');
const cardAfinidad = document.querySelectorAll('.card-afinidad');

toggleVer.forEach((toggle, index) => {
    
    toggle.onclick = function(){
        cardAfinidad[index].classList.toggle('active-afinidad');
    }
});