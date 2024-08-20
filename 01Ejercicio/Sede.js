class Sede {
    constructor(company, ubicacion) {
        this.ubicacion = ubicacion
        this.company = company
    }

    mostrarDetalles() {
        return this.ubicacion
    }
}

export default Sede;