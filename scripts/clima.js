console.log("apis")
const climaCiudad=document.querySelector("#climaCiudad")
const climaRawson=document.querySelector("#climaRawson")
const climaNeuquen=document.querySelector("#climaNeuquen")
const climaSantaCruz=document.querySelector("#climaSantaCruz")
const climaRioNegro=document.querySelector("#climaRioNegro")


const tierraDelFuego="https://api.openweathermap.org/data/2.5/weather?q=Ushuaia&appid=8c7dc5bef97f2348c663b10f54cda394&units=metric&lang=es"
const Chubut="https://api.openweathermap.org/data/2.5/weather?q=Rawson&appid=8c7dc5bef97f2348c663b10f54cda394&units=metric&lang=es"
const neuquen="https://api.openweathermap.org/data/2.5/weather?q=Neuquen&appid=8c7dc5bef97f2348c663b10f54cda394&units=metric&lang=es"
const santaCruz="https://api.openweathermap.org/data/2.5/weather?q=SantaCruz&appid=8c7dc5bef97f2348c663b10f54cda394&units=metric&lang=es"
const rioNegro="https://api.openweathermap.org/data/2.5/weather?q=Viedma&appid=8c7dc5bef97f2348c663b10f54cda394&units=metric&lang=es"

fetch(tierraDelFuego)
 .then(res=>res.json())
 .then(data=>{
     console.log(data);
     const { main,name,weather}=data

     const nuevoDiv= document.createElement("div")
     nuevoDiv.className="nuevoDivClima"
     
     const datos= `
     <h2>${name} </h2>
     <h3>${Math.round(main.temp)} <sup>°C</sup> </h3>
     <figcaption>${weather[0]["description"]}</figcaption>
     
     `
     nuevoDiv.innerHTML=datos
     climaCiudad.appendChild(nuevoDiv)


 })



fetch(Chubut)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const { main,name,weather}=data

    const nuevoDiv= document.createElement("div")
    nuevoDiv.className="nuevoDivClima"
    
    const datos= `
    <h2>${name} </h2>
    <h3>${Math.round(main.temp)} <sup>°C</sup> </h3>
    <figcaption>${weather[0]["description"]}</figcaption>
    
    `
    nuevoDiv.innerHTML=datos
    climaRawson.appendChild(nuevoDiv)


})


fetch(neuquen)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const { main,name,weather}=data

    const nuevoDiv= document.createElement("div")
    nuevoDiv.className="nuevoDivClima"
    
    const datos= `
    <h2>${name} </h2>
    <h3>${Math.round(main.temp)} <sup>°C</sup> </h3>
    <figcaption>${weather[0]["description"]}</figcaption>
    
    `
    nuevoDiv.innerHTML=datos
   climaNeuquen.appendChild(nuevoDiv)


})


fetch(santaCruz)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const { main,name,weather}=data

    const nuevoDiv= document.createElement("div")
    nuevoDiv.className="nuevoDivClima"
    
    const datos= `
    <h2>${name} </h2>
    <h3>${Math.round(main.temp)} <sup>°C</sup> </h3>
    <figcaption>${weather[0]["description"]}</figcaption>
    
    `
    nuevoDiv.innerHTML=datos
    climaSantaCruz.appendChild(nuevoDiv)


})



fetch(rioNegro)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const { main,name,weather}=data

    const nuevoDiv= document.createElement("div")
    nuevoDiv.className="nuevoDivClima"
    
    const datos= `
    <h2>${name} </h2>
    <h3>${Math.round(main.temp)} <sup>°C</sup> </h3>
    <figcaption>${weather[0]["description"]}</figcaption>
    
    `
    nuevoDiv.innerHTML=datos
    climaRioNegro.appendChild(nuevoDiv)


})






