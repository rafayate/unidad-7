
function calcularSnacks() {
    let edadActual = 16;
    let edadMaxima = 85;
    let snackFavorito = "papas fritas";
    let snacksPorDia = 2;

    let snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;

    alert("Necesitarás " + snacksRestantes + " de " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");

    let precioPorSnack = 1000;
    let gastoTotal = snacksRestantes * precioPorSnack;

    alert("Gastarás $" + gastoTotal + " en total durante tu vida.");
}

function calcularViaje() {
    let diasDeViaje = 18;
    let presupuestoMaximo = 900000;
    let comidasPorDia = 3;

    let comidasTotales = diasDeViaje * comidasPorDia;

    let dineroPorComida = presupuestoMaximo / comidasTotales;

    alert("Podés gastar $" + dineroPorComida + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
}
