function redireccionar(select) {
    if (select.value !== "") {
        var win = window.open(select.value, '_blank');
        win.focus();
    }
}
