function redireccionar(select) {
    if (select.value !== "") {
        try {
            var win = window.open(select.value, '_blank');
            if (win) {
                win.focus(); // Esto da foco a la nueva pestaña
            } else {
                alert('La ventana emergente fue bloqueada. Intenta habilitar pop-ups.');
            }
        } catch (e) {
            alert('Error al intentar abrir la ventana emergente: ' + e.message);
        }
    }
}