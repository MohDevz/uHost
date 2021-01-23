var backdrop = document.querySelector('.backdrop');
var selectPlanbutton = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalActionNegative = document.querySelector('.modal__action--negative');

for(var i = 0 ; i< selectPlanbutton.length ; i++) {
    selectPlanbutton[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

modalActionNegative.addEventListener('click', function() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});
