const Vehiculo = require('./vehiculo.js');
class Moto extends Vehiculo{
    constructor(marca, modelo, precio, cilindrada){
        super(marca, modelo, precio)
        this.cilindrada = cilindrada;
    }
}
module.exports = Moto;