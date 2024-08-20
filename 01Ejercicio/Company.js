import Sede from './Sede.js'

class Company {
    constructor(nombre, ubicacionS) {
        this.nombre = nombre
        this.sede = new Sede(this.nombre, ubicacionS)
    }

    mostrarDetalles() {
        return `Compañia: ${this.nombre}
        Sede: ${this.sede.mostrarDetalles()}`
    }
}

export default Company;