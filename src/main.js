(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const btnHello = document.querySelector('#btnHello');

        if (btnHello) {
            btnHello.addEventListener('click', function () {
                alert('Welcome to Tiny Vite Example');
            });
        }
    });
})();
