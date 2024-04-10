//Haz tú validación en javascript acá
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.formcontato__form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario por defecto

            const nombre = form.querySelector('[name="nombre"]').value;
            const email = form.querySelector('[name="email"]').value;
            const asunto = form.querySelector('[name="asunto"]').value;
            const mensaje = form.querySelector('[name="mensaje"]').value;

            // Por ahora, solo los mostraremos en la consola
            console.log('Nombre:', nombre);
            console.log('Email:', email);
            console.log('Asunto:', asunto);
            console.log('Mensaje:', mensaje);

            // Limpia el formulario después de enviar
            form.reset();
        });
    });

