document.addEventListener('DOMContentLoaded', function() {
    // CÓDIGO EXISTENTE PARA EL MENÚ HAMBURGUESA
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ************** CÓDIGO DEL SPINNER DE CARGA **************
    const loaderWrapper = document.getElementById('loader-wrapper');
    if (loaderWrapper) {
        // Función para ocultar el spinner con una transición de opacidad
        const hideLoader = () => {
            loaderWrapper.style.opacity = '0'; // Inicia el desvanecimiento
            setTimeout(() => {
                loaderWrapper.style.display = 'none'; // Oculta completamente después de la transición
            }, 500); // 500ms es la duración de la transición CSS 'opacity'
        };

        // Tiempo mínimo que queremos que el spinner se muestre (4 segundos)
        const minDisplayTime = 2000; // 4000 milisegundos = 4 segundos

        // Registrar el tiempo en que el DOM ha cargado completamente
        const domLoadedTimestamp = Date.now();

        // Establecer un timeout para ocultar el loader
        // Este setTimeout inicial de 0ms simplemente asegura que el control del loader se ejecute
        // después de que el navegador haya procesado la visibilidad inicial del loader.
        setTimeout(() => {
            const currentTime = Date.now();
            const timePassedSinceDOMLoaded = currentTime - domLoadedTimestamp;
            const remainingTimeToWait = Math.max(0, minDisplayTime - timePassedSinceDOMLoaded);
            setTimeout(hideLoader, remainingTimeToWait);

        }, 0); 
    }
    // ****************************************************
});