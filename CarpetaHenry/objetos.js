var deportes ={
    conBalon: ["Futbol","Basketball","Rugby"],
    sinBalon: ["Boxeo","Surf","Trekking"],
};

var persona={
    nombre:'Carlos',
    edad:24,
    estudios:{esProgramador:true}
};

// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
autos.marcas.push('Kia');
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

//Crear funciones
var misFunciones={saludar: function(){console.log('Hola');}};
misFunciones.saludar();


// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);


//FOR IN
var mundo={
    'Oceanos':7,
    'Paises':195,
    'Mares':5
};
console.log(todasLasPropiedades);
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}

//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    
 };
 mascota["info"]=() => {
    console.log('Mi perro es un  ' + mascota.raza);
 
 };

 mascota.info();



 var objeto={
    'precio':80,
    'porcentajeDeDescuento':0.15
 }

 objeto['calcularPrecioDescuento']=() =>{
    return objeto.precio*objeto.porcentajeDeDescuento;
 }
 precioFinal=objeto.precio-objeto.calcularPrecioDescuento();

 console.log(objeto.calcularPrecioDescuento());
 console.log(precioFinal);
 