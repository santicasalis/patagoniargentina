const destino=[];
const agregarAlFinal=document.getElementById("agregarAlFinal")
const botonFinal=document.querySelector("#botonComprar") 
const carritoFinal=document.querySelector("#agregarAlFinal")



class Destinos{
    constructor(provincia , precio, foto) {
      this.provincia = provincia.toUpperCase();
      this.precio = parseInt(precio)
      this.foto =foto
    }
    descuentoEfectivo(){
        this.precio = this.precio * 0.80;
        return this.precio
    }

}




let tierraDelFuego= destino.push(new Destinos ("tierra del fuego", 20000,"imagenes/tierra del fuego.jpg"));
let santaCruz= destino.push(new Destinos ("santa cruz",16000, "imagenes/santa cruz.jpg" ));
let chubut= destino.push(new Destinos("chubut", 18000,"imagenes/chubut.jpg"));
let rioNegro= destino.push(new Destinos("rio negro", 16000,"imagenes/rio negro.jpg"));
let nuequen=destino.push(new Destinos("neuquen", 14000,"imagenes/neuquen.jpg"));



document.addEventListener("DOMContentLoaded",producto )
function producto(){
 for (i = 0; i < destino.length; i++) {
       document.getElementById("listaProvincias").innerHTML+= `
       <div class=" g-col-4"> 
       <div class="card carta card border-success" style="width: 18rem;">
       <img src="${destino[i].foto}" class="card-img-top imagen" alt="...">
       <div class="card-body">
         <h5 class="card-title titulo">${destino[i].provincia}</h5>
         <p class="card-text precio">$${destino[i].precio}</p>
         <a  href="#carroCompras"><button  class="btn btn-primary botonAgregado" value="${destino[i].provincia}">Agregar al carrito</button></a>
       </div>
       </div>
       </div>
       `
  }
  const botonAgregado=document.getElementsByClassName("botonAgregado")


for (let boton of botonAgregado) {
  boton.addEventListener("click",botonAgregaCarro)
}
  function botonAgregaCarro (event){
   const infoBoton=event.target
   const cartaBoton=infoBoton.closest(".carta")
   const cartaTitulo=cartaBoton.querySelector(".titulo").textContent
   const cartaPrecio=cartaBoton.querySelector(".precio").textContent
   const cartaImagen=cartaBoton.querySelector(".imagen").src
   
   agregarProvinciaCarrito(cartaTitulo, cartaPrecio, cartaImagen)
  }

}


function agregarProvinciaCarrito(cartaTitulo, cartaPrecio, cartaImagen){
  const agregarCarta=document.createElement("tr");
  agregarCarta.className="botonBorrar"
  const agregadoAlcarrito= ` 
  <th scope="row"><img src="${cartaImagen}" class="imagenCarrito img-thumbnail img-fluid"></th>
  <th>${cartaTitulo}</th>
  <th class="precio">${cartaPrecio}</th>
  <th> <input class="col-md-2 contador" type="number" value=1>   </th>
  <td><button type="button" id="borrar" class="btn btn-danger">X</button></td>    
`
agregarCarta.innerHTML=agregadoAlcarrito
agregarAlFinal.append(agregarCarta)


agregarCarta.querySelector("#borrar").addEventListener("click", borrarDelCarrito)

agregarCarta.querySelector(".contador").addEventListener("change",cambiaCantidad)


sumarTotal()

}



function sumarTotal(){
let total=0
const totalCarrito=document.querySelector(".totalCarrito")
const provinciaAgregada=document.querySelectorAll(".botonBorrar")
provinciaAgregada.forEach(provincia=>{
const provinciaPrecio=provincia.querySelector(".precio")
const soloProvinciaPrecio=Number(provinciaPrecio.textContent.replace("$",""))
const contador=provincia.querySelector(".contador")
const valorContador=Number(contador.value)

total=total+soloProvinciaPrecio*valorContador

})

totalCarrito.innerHTML=`Total: ${total}$`
}


  function borrarDelCarrito(event){
const botonX =event.target
botonX.closest(".botonBorrar").remove()
sumarTotal()

  }

  function cambiaCantidad(event){
    const ingreso =event.target
    ingreso.value<=0? (ingreso.value=1):null
    sumarTotal()


  }



botonFinal.addEventListener("click",comprar)
 
  


function comprar(){
  
 carritoFinal.innerHTML=" "
  sumarTotal()
  swal("Gracias por la compra!", "disfruta el viaje", "success")
  
}


