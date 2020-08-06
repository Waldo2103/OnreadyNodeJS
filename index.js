const Auto = require('./clases/autos.js');
const Moto = require('./clases/motos.js');
const Vehiculo = require('./clases/vehiculo.js');
mostrarVehiculo();

function mostrarVehiculo(){
    var autos = [];
    var motos = [];
    var todos = [];
    let vehiculos = [
        {
          marca: "Peugeot",
          modelo: "206",
          precio: 200000,
          puertas: 4
        },
        {
            marca: "Honda",
            modelo: "Titan",
            precio: 60000,
            cilindrada: "125c"
        },
        {
            marca: "Peugeot",
            modelo: "208",
            precio: 250000,
            puertas: 5
        },
        {
            marca: "Yamaha",
            modelo: "YBR",
            precio: 80500.50,
            cilindrada: "160c"
        }
        
      ]

      for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].puertas) {
            let auto = new Auto(vehiculos[i].marca,vehiculos[i].modelo, vehiculos[i].precio, vehiculos[i].puertas);
            //autos.push(auto);
            todos.push(auto);
            console.log(
                "Marca: ", auto.marca, "// Modelo: ", auto.modelo, "// Puertas: ", auto.puertas, "// Precio: $", formatMoney(auto.precio,2, ",", ".")
            );
        } else if (vehiculos[i].cilindrada) {
            let moto = new Moto(vehiculos[i].marca,vehiculos[i].modelo, vehiculos[i].precio, vehiculos[i].cilindrada);
            //motos.push(moto);
            todos.push(moto);
            console.log(
                "Marca: ", moto.marca, "// Modelo: ", moto.modelo, "// Cilindrada: ", moto.cilindrada, "// Precio: $", formatMoney(moto.precio,2, ",", ".")
            );
        } else {
            console.log("El vehiculo no corresponde a un AUTO o una MOTO");
        }

        if (vehiculos.length === (i+1)) {
            console.log("===========================");
        }        
        
      }
      vehiculoCaro(todos);
      vehiculoBarato(todos);
      contieneLetra('y', todos);
      console.log("===========================");
      vehiculosOrdenados(todos, "precio", -1);
      //console.log("Vehiculos: ", "\nAutos: ",autos, "\nMotos: ",motos)

      
}

function vehiculosOrdenados(vehiculos, paramOrden, ordenBy) {
    var ordenados = [];
    vehiculos.sort(function (a, b){
        return (b.precio - a.precio)
    })
    for (let v = 0; v < vehiculos.length; v++) {
        console.log(vehiculos[v].marca, vehiculos[v].modelo)
        
    }
}

function contieneLetra(letra, vehiculos){
    letra = letra.toUpperCase();
    var contieneL;
    var modelo;
    for (let v = 0; v < vehiculos.length; v++) {
        modelo = vehiculos[v].modelo.toUpperCase()
        //vehiculos[v].modelo = vehiculos[v].modelo.indexOf(letra);
        //console.log(modelo.indexOf(letra),"ssssssssssss")
        if (modelo.indexOf(letra) === 0) {
            let precio =  formatMoney(vehiculos[v].precio, 2, ",", ".")
            console.log(`Vehiculo que contiene en el modelo la letra '${letra}': ${vehiculos[v].marca} ${vehiculos[v].modelo} $${precio}`);
        }
        
    }
}

function vehiculoBarato(vehiculos){
    var barato;
    var precio;
    for (let v = 0; v < vehiculos.length; v++) {
        //vehiculos[v].precio
        if (v === 0) {
            precio = vehiculos[v].precio;
            barato = vehiculos[v];
        }else{
            if (vehiculos[v].precio < precio) {
                barato = vehiculos[v];
                precio = vehiculos[v].precio;
            } 
        }
    }
    console.log(`Vehículo más barato: ${barato.marca} ${barato.modelo}`);
}

function vehiculoCaro(vehiculos){
    var caro;
    var precio = 0;
    for (let v = 0; v < vehiculos.length; v++) {
        if (vehiculos[v].precio > precio) {
            caro = vehiculos[v];
            precio = vehiculos[v].precio;
        } 
    }
    console.log(`Vehículo más caro: ${caro.marca} ${caro.modelo}`);
}

function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
  
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };
  