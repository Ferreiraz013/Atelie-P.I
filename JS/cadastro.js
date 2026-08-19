const cadastroForm = document.getElementById('cadastroForm');

if (cadastroForm) {
    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!cadastroForm.checkValidity()) {
            cadastroForm.reportValidity();
            return;
        }

        const senha = document.getElementById('senha');
        const confirmarSenha = document.getElementById('confirmarSenha');

        if (!senha || !confirmarSenha || senha.value !== confirmarSenha.value) {
            alert('As senhas precisam ser iguais.');
            return;
        }

        alert('Cadastro realizado com sucesso! Faça login para acessar o site.');
        cadastroForm.reset();
        window.location.href = 'login.html';
    });
}