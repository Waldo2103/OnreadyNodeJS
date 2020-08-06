const Vehiculo = require('./vehiculo.js');
class Auto extends Vehiculo{
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio)
        this.puertas = puertas;
    }
}
module.exports = Auto;