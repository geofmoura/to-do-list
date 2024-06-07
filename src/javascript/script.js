window.onload = function() {
    console.log("Script carregado");

    var checksSim = document.getElementById('checksim');
    var checksNao = document.getElementById('checknao');

    if (checksSim) {
        checksSim.addEventListener('click', function() {
            console.log('Checkbox "sim" clicado');
            showMessage('Você clicou em "sim"');
        });
    } else {
        console.log('Checkbox "sim" não encontrado');
    }

    if (checksNao) {
        checksNao.addEventListener('click', function() {
            console.log('Checkbox "não" clicado');
            showMessage('Você clicou em "não"');
        });
    } else {
        console.log('Checkbox "não" não encontrado');
    }
};
