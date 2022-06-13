let autos = require("./autos")
let concesionaria = {
   autos: autos,
   buscarAuto:function (patente){
      for ( let i = 0; i <= autos.length ; i ++){
         if (autos[i].patente == patente){
            return autos[i]}
            }return null
         },
   venderAuto: function (patente) {
  let autoVendido = this.buscarAuto(patente)
  if (autoVendido.vendido == false ){
   autoVendido.vendido = true
 } return autos} ,
   autosParaLaVenta: function(){
      let lista = this.autos
      let autosNoVendidos = lista.filter(lista => lista.vendido == false)
   return autosNoVendidos}
   ,
   autosNuevos: function () {
      let listaNoVendidos = this.autosParaLaVenta()
      let autos0KM  = listaNoVendidos.filter(listaNoVendidos => listaNoVendidos.km < 100)
      return autos0KM
   }
    ,
   listaDeVentas: function () {
    let autosVendidos = this.autos.filter(auto=>auto.vendido)
    return autosVendidos.map(auto=>auto.precio)
    },
    totalDeVentas: function(){
       return this.listaDeVentas().reduce((acumulador,precio) => acumulador + precio, 0)
    },
    puedeComprar: function(auto,persona){
       return (auto.precio<=persona.capacidadDePagoTotal) && (auto.precio/auto.cuotas)<=persona.capacidadDePagoEnCuotas
    },
    autosQuePuedeComprar(persona){
   let autosDisponibles = this.autosParaLaVenta()
   return autosDisponibles.filter(auto=>this.puedeComprar(auto,persona))
    }
    }
   