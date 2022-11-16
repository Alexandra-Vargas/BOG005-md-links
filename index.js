const { resolverRuta, acumularArchivosMds } = require("./funciones")

const posRuta = process.argv[2]

const mdLinks = (ruta) => {
return new Promise ((resolve, reject)=>{
  const rutaResuelta = resolverRuta(ruta)
  const rutasMds = acumularArchivosMds(rutaResuelta)
  resolve()
})

}
mdLinks(posRuta)
.then(res=>console.log('resultado: ', res))
.catch(err=>console.log(err))


module.exports = mdLinks

