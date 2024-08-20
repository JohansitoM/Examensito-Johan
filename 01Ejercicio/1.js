import Company from "./Company.js"

document.getElementById("crearCompanyBtn").addEventListener("click", () => {
    let nombreC = document.getElementById("nombreCompany").value
    let ubicacionS = document.getElementById("sede").value
    console.log(nombreC.length, ubicacionS)
    if(nombreC && ubicacionS) {
        let newCompany = new Company(nombreC, ubicacionS) 
    
        let listaI = document.createElement("li")
        listaI.innerText = newCompany.mostrarDetalles()
    
        document.getElementById("resultado").appendChild(listaI)
    } else if (nombreC.length == 0 || ubicacionS.length == 0) {
        let listaI = document.createElement("li")
        listaI.innerText = "Debes llenar los dos campos 😾"
        document.getElementById(listaI)
        console.log(listaI)
        document.getElementById("resultado").appendChild(listaI)
    }
})