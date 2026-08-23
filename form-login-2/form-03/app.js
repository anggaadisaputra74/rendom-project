// Fitur Toggle Intaktif Password
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');
const eyeIcon = document.querySelector('#eyeIcon');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Ganti ikon mata
        if (type === 'text') {
            eyeIcon.setAttribute('data-feather', 'eye-off');
        } else {
            eyeIcon.setAttribute('data-feather', 'eye');
        }
        feather.replace();
    });
}