const limpiar = document.getElementById('borrar');
const calcular = document.getElementById('resumen');
const total = document.getElementById('totalPagar');

calcular.addEventListener('click',resumen);
limpiar.addEventListener('click',borrar);

function borrar(){
    total.innerHTML = 'Total a Pagar : $'
} 

function resumen(){
    const cantidadEntradas = document.getElementById('cantidad').value;
    const categoria = document.getElementById('categoria').value;
    console.log(categoria)

    switch (categoria) {
        case 'estudiante': total.innerHTML = (cantidadEntradas*200)*(0.2);
        break;
        case 'trainee': total.innerHTML = (cantidadEntradas*200)*(0.5);
        break;
        default: total.innerHTML = (cantidadEntradas*200)*(0.85);
        break;
    }

    
}