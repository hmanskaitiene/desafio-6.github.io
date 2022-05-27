const pais = {
    nombre:'Argentina',
    habitantes:47000000
}

//Operador ternario
const crecimiento = (pais.habitantes > 40000000) ? true : false;
console.log(crecimiento ? 'La población ha crecido' : 'La población no creció');

//Operador nullish
console.log(pais.nombre ?? 'El país no tiene nombre');
console.log(pais.presidente ?? 'El país no tiene presidente');

//Desestructuación
const {nombre,habitantes} = pais;
console.log(`Nombre: ${nombre}`);
console.log(`Habitantes: ${habitantes}`);
