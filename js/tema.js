(function () {
    var guardado = localStorage.getItem('tema');
    if (guardado) {
        document.documentElement.setAttribute('data-theme', guardado);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.querySelector('.theme-toggle');
        if (!btn) return;

        function pintar() {
            var claro = document.documentElement.getAttribute('data-theme') === 'light';
            btn.textContent = claro ? '🌙' : '☀️';
            btn.setAttribute('aria-pressed', String(claro));
            btn.title = claro ? 'Activar modo oscuro' : 'Activar modo claro';
        }

        btn.addEventListener('click', function () {
            var claro = document.documentElement.getAttribute('data-theme') === 'light';
            var nuevo = claro ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', nuevo);
            localStorage.setItem('tema', nuevo);
            pintar();
        });

        pintar();
    });
})();