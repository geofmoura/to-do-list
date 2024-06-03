const checksim = document.getElementById('checksim');
const checknao = document.getElementById('checknao');
const mensagemsim = document.getElementById('mensagemsim');
const mensagemnao = document.getElementById('mensagemnao');


checkboxsim.addEventListener('click', function() {
    if (checkboxsim.checked) {
        mensagemsim.innerText = 'UAU, VOCÊ É FERA!';

    } else {
        mensagemsim.innerText = '';
    }
});

checkboxnao.addEventListener('click', function() {
    if (checkboxnao.checked) {
        mensagemnao.innerText = 'POXA, VAMOS MELHORAR!';
    } else {
        mensagemnao.innerText = '';
    }
});

