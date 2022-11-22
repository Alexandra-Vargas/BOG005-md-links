const fs = require('fs');
const path = require('path');

//leer la terminal
const posRuta = process.argv[2]

//función resolver ruta
const resolverRuta = (ruta) => {
    if(path.isAbsolute(ruta)){
        return ruta
    } else {
       return path.resolve(ruta)
    }
}


//función recursiva
const acumularArchivosMds = (ruta) => {
    let arrayMds = []
    if(fs.statSync(ruta).isFile() && path.extname(ruta) === '.md'){
        arrayMds.push(ruta)
    } else if(fs.statSync(ruta).isFile() && path.extname(ruta) !== '.md') {
        console.log ('no es un archivo md')
    } else {
        const elementos = fs.readdirSync(ruta) //leee el contenido de la carpeta
        elementos.forEach((elem)=>{
            const nuevaRuta = path.join(ruta, elem)
            if(fs.statSync(nuevaRuta).isFile() && path.extname(ruta) === '.md'){
                arrayMds.push(nuevaRuta)
            }else {
                arrayMds = arrayMds.concat(acumularArchivosMds(nuevaRuta))
            }
        })
    }
    return arrayMds
}

//buscar links de un solo md

//leer el contenido de los archivos Md
const leerMd = (ruta) => {
    let read = fs.readFileSync(ruta, "utf-8");
    //console.log("este es el contenido del archivo", read, 44);
  };
//console.log( leerMd ("D:/Mi unidad/Laboratoria/Git Proyects/BOG005-md-links/recursiva/otra/file.md"));

//extraer unicamente los links de los archivos Md
const extraerLinks = (ruta) =>{
    let extraer = fs.
}

//buscar el resultado de links encontrados en la función anterior





//exportar módulos
module.exports = {resolverRuta, acumularArchivosMds}


/*
const saludar = (nombre) => {
    return 'Hola ' + nombre
}
// console.log(saludar('aPixar'))

const saludarTodxs = (arrayNombres) => {
    return arrayNombres.map((nombre)=>{
        return saludar(nombre)
    })
}

console.log(saludarTodxs(['Lina', 'Nata', 'Gene', 'Sergio']))
 */