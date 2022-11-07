// import { Deptos } from "./proto.mjs"
// import { calculoFecha } from "./proto.mjs";
// import { propietarioOb } from "./proto.mjs";
// import { inquilinoOb } from "./proto.mjs";
//import { calculoRenovacion } from "./proto.mjs";
// require('./styles/style.css');
// require('./proto').default;



//const { on } = require("../../backend/CRUDServerDB2/src/models/contrato");

// import ContratoService from './services/contratoService';
// import { FormData } from 'node-fetch';
// import { webpack } from 'webpack';
// import { fromByteArray } from 'ipaddr.js';


// THEME
function styleDark(){
   document.body.classList.toggle('dark')
   if(document.body.classList=='dark'){
      document.getElementById("img").src = "./assets/btnTheme dark.png";
      document.documentElement.style.backgroundColor = "rgb(0,10,10)";
   } else {
      document.getElementById("img").src = "./assets/btnThemeRandom.png";
      document.documentElement.style.backgroundColor = "rgb(231, 231, 230)";      
   }
};
function randomColor(){
   document.body.style.background = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}

var divImp = document.getElementById("imprimir");
divImp.style.display="none"
// //capturar eventos
// document.getElementById("operaciones")
//    .addEventListener('submit',e =>{
//       nombrePInput = document.getElementById("nombreP").value;
//       apellidoPInput = document.getElementById("apellidoP").value;
//       dniPInput = document.getElementById("dniP").value;
//       cbuPInput = document.getElementById("cbuP").value;
//       celularPInput = document.getElementById("celularP").value;
//       emailPInput = document.getElementById("emailP").value;   
//       direccionPInput = document.getElementById("direccionP").value;
//       nombreIInput = document.getElementById("nombreI").value;
//       apellidoIInput = document.getElementById("apellidoI").value;
//       dniIInput = document.getElementById("dniI").value;
//       cbuIInput = document.getElementById("cbuI").value;
//       celularIInput = document.getElementById("celularI").value;
//       emailIInput = document.getElementById("emailI").value;   
//       garantiaIInput = document.getElementById("garantiaI").value;
//       idInput = document.getElementById("id").value;
//       direccionInput = document.getElementById("direccion").value   ;
//       inicioContratoInput = document.getElementById("inicioContrato").value;
//       valor1Input = document.getElementById("valor1").value;
//       valor2Input = document.getElementById("valor2").value;
//       valor3Input = document.getElementById("valor3").value;
//       obligacionesInqInput = document.getElementById("obligacionesInq").value;
//       observacionesInput = document.getElementById("observaciones").value;
//       descripcionInput = document.getElementById("descripcion").value;
//       imagenesInput = document.getElementById("imagenesFile").files;;
//       contratoInput = document.getElementById("contratoFile").files;;
//       e.preventDefault(); 
//       console.log("emailIInput",emailIInput)
//       console.log("garantiaIInput",garantiaIInput)
//       console.log("idInput",idInput)
//       console.log("direccionInput",direccionInput)
//       console.log("inicioContratoInput",inicioContratoInput)
      
//       crear();
      
      
// })

//Levantar inputs
var contratos = []
var indices = []
console.log('indices',indices)

var nombrePInput = '';
var apellidoPInput = '';
var celularPInput = '';
var emailPInput = '';
var dniPInput = '';
var cbuPInput = '';
var direccionPInput = '';

var nombreIInput = '';
var apellidoIInput = '';
var celularIInput = '';
var emailIInput = '';
var dniIInput = '';
var cbuIInput = '';
var garantiaIInput = '';

var idInput = '';
var direccionInput = '';
//var propietarioInput = '';
//var inquilinoInput = '';
var inicioContratoInput = '';
var valor1Input = '';
var descripcionInput = '';
//var obligacionesInqIn = [];
var valor2Input = 0;
var valor3Input = 0;
var imagenesInput = [];
var contratoInput = [];
var observacionesInput = "";
var obligacionesInqInput = '';
//document.querySelector('#btn').addEventListener('click',ejecutar);

function ejecutar(){
   //propietario
   nombrePInput = document.getElementById("nombreP").value;
   apellidoPInput = document.getElementById("apellidoP").value;
   dniPInput = document.getElementById("dniP").value;
   cbuPInput = document.getElementById("cbuP").value;
   celularPInput = document.getElementById("celularP").value;
   emailPInput = document.getElementById("emailP").value;   
   direccionPInput = document.getElementById("direccionP").value;
   //inquilino
   nombreIInput = document.getElementById("nombreI").value;
   apellidoIInput = document.getElementById("apellidoI").value;
   dniIInput = document.getElementById("dniI").value;
   cbuIInput = document.getElementById("cbuI").value;
   celularIInput = document.getElementById("celularI").value;
   emailIInput = document.getElementById("emailI").value;   
   garantiaIInput = document.getElementById("garantiaI").value;
   //depto
   idInput = document.getElementById("id").value;
   direccionInput = document.getElementById("direccion").value;
   inicioContratoInput = document.getElementById("inicioContrato").value;
   valor1Input = document.getElementById("valor1").value;
   valor2Input = document.getElementById("valor2").value;
   valor3Input = document.getElementById("valor3").value;
   obligacionesInqInput = document.getElementById("obligacionesInq").value;
   observacionesInput = document.getElementById("observaciones").value;
   descripcionInput = document.getElementById("descripcion").value;
   // imagenesInput = document.getElementById("imagenesFile").value;
   // contratoInput = document.getElementById("contratoFile").value;
   crear();
}

var propietarioOb = {};
var inquilinoOb = {};
var depto = {};
function check(){
   inicioContratoInput = document.getElementById("inicioContrato").value;
   nombreIInput = document.getElementById("nombreI").value;
   apellidoIInput = document.getElementById("apellidoI").value;
   valor1Input = document.getElementById("valor1").value;
   valor2Input = document.getElementById("valor2").value;
   valor3Input = document.getElementById("valor3").value;
   idInput = document.getElementById("id").value;
   direccionInput = document.getElementById("direccion").value;
   if(inicioContratoInput==''){
      alert('Colocá la fecha de inicio de contrato')      
      return false
   } else if (valor1Input == '' && valor2Input == '' && valor3Input == '') {
      alert('No colocaste ningun valor de alquiler')
      return false
   } else if (nombreIInput == '' || apellidoIInput == '') {
      alert('No colocaste nombre o apellido del inquilino, es un dato necesario para el recibo, completalo')
      return false
   } else if (idInput == '' || direccionInput == '') {
      alert('No colocaste la direccion del departamento ni el ID')      
      return false
   } else {
      ejecutar()
      return true 
}}

function crear(){   
   propietarioOb = new Propietario({
      nombre: nombrePInput,
      apellido:apellidoPInput,
      celular:celularPInput,
      email:emailPInput,
      dni:dniPInput,
      cbu: cbuPInput,
      direccionP:direccionPInput,
   });
   inquilinoOb = new Inquilino({
      nombre:nombreIInput,
      apellido:apellidoIInput,
      celular:celularIInput,
      email:emailIInput,
      dni:dniIInput,
      cbu: cbuIInput,
      garantia:garantiaIInput,
   });
   depto = new Deptos({
      id:idInput,
      direccion:direccionInput,
      inicioContrato: inicioContratoInput,
      valor1: parseInt(valor1Input),
      valor2: parseInt(valor2Input),
      valor3: parseInt(valor3Input),
      obligacionesInq: obligacionesInqInput,
      observaciones: observacionesInput,
      descripcion: descripcionInput,
      imagenes: imagenesInput,
      contrato: contratoInput,
   });
   console.log('depto',depto)
   console.log('propietarioOb',propietarioOb)
   console.log('inquilinoOb',inquilinoOb)
   var nuevoContrato = {
      id: depto._id,
      propietario: propietarioOb,
      inquilino: inquilinoOb,
      departamento: depto,
   };
   Object.seal(nuevoContrato);
   for (var item in nuevoContrato){
      Object.seal(nuevoContrato[item]);
   };
   console.log(Object.getOwnPropertyDescriptors(nuevoContrato))
   cargarInfo();
   for(var item of contratos){
      Object.seal(item)
   };
   console.log('contratos',contratos);
   contratos.push(nuevoContrato);
   console.log('contratos',contratos);
   console.log('nuevoContrato',nuevoContrato);
   
   
   var empujar = [contratos[contratos.length-1].id,contratos[contratos.length-1].departamento._direccion]
   
   console.log('indice',empujar)
   indices.push(empujar)
   console.log('indices',indices)
   
   console.log('contratos',contratos);
   
   guardarInfo();
   //imprimirContrato(nuevoContrato)
   alert(`Creaste un nuevo contrato en calle ${nuevoContrato.departamento._direccion} con el ID: ${nuevoContrato.id}`)
}


//Guardar y cargar datos
var indicesGuardados = [];
var contratosGuardados = [];
var NUM = 0;

function guardar(variable, savedItemName){
   localStorage.setItem(savedItemName,JSON.stringify(variable))
}
function guardarInfo(){
   guardar(indices,"indices");
   guardar(contratos,"contratos");
   guardar(NUMERACION,"NUMERACION");
   console.log('Datos guardados');   
};
function cargarInfo(){
   if (indicesGuardados==null || contratosGuardados ==null){
      console.log(indicesGuardados,contratosGuardados)
   } else {
      indicesGuardados = JSON.parse(localStorage.getItem("indices"));
      indices = [...indicesGuardados];
      contratosGuardados = JSON.parse(localStorage.getItem("contratos"));
      contratos = [...contratosGuardados];
      NUM = JSON.parse(localStorage.getItem("NUMERACION"));
      NUMERACION = NUM;

      console.log('Datos cargados');
      console.log('indices',indices);
      console.log('contratos',contratos);
      console.log('NUMERACION',NUMERACION);
   }
}
function deleteLocalStorage(){   
   if (confirm('Vas a borrar toda la base d e datos!!??')){
      localStorage.removeItem('indices');
      localStorage.removeItem('contratos');
      console.log('BD eliminada')
      indices = [];
      contratos = [];
      guardarInfo()
   }
}
function deleteContrato(n){
   indices.splice(n,1);
   contratos.splice(n,1);
   guardarInfo()
   console.log(`Se borro el contrato en la posicion ${n}`)
}

function indiceContratos(){
   var div = document.getElementById("imprimir");
   div.innerHTML = '';   
   for(var item of indices){      
      div.innerHTML += `Index[<strong>${indices.indexOf(item)}</strong>] => Id: <span>${item[0]}</span> | direccion: <span>${item[1]}</span><br>`;      
   }   
   div.style.display="block"
}
//imprimir booletas


//Buscar e imprimir
var itemEncontrado = '';
var indiceItemEncontrado;
function buscar(id){
   var idBuscar;
   idBuscar = document.getElementById('buscarInput').value.toLowerCase();
   if(idBuscar == ''){
      idBuscar = itemEncontrado.id;
   } else {
      idBuscar = document.getElementById('buscarInput').value.toLowerCase();
   }
   indiceItemEncontrado = contratos.findIndex(el=> el.id === idBuscar);
   if(indiceItemEncontrado == -1){
      alert('contrato inexistente');
      document.getElementById('buscarInput').value = '';   
   } else {
      var dataImprimir = contratos[indiceItemEncontrado];
      console.log(dataImprimir);
      //imprimirContrato(dataImprimir);
      levantarContrato(dataImprimir);
      document.getElementById('buscarInput').value = '';
      itemEncontrado = dataImprimir;
   }
   // indiceItemEncontrado = contratos.findIndex(el=> el.id === idBuscar); console.log('contrato inexistente');
   impInq()
}
function buscarCalle(){
   var nameBuscar = '';
   nameBuscar = (document.getElementById('buscarCalleInput').value).toLowerCase();
   indiceItemEncontrado = contratos.findIndex(el=> el.departamento._direccion.toLowerCase().includes(nameBuscar));
   if(indiceItemEncontrado == -1){
      alert('contrato inexistente');      
      document.getElementById('buscarCalleInput').value = '';
   } else {   
      var dataImprimir = contratos[indiceItemEncontrado];
      console.log('Contrato obtenido',dataImprimir);
      //imprimirContrato(dataImprimir);
      levantarContrato(dataImprimir);
      document.getElementById('buscarCalleInput').value = '';
      itemEncontrado = dataImprimir;
   }
   impInq();
}
function imprimirContrato(contrato){
   var div = document.getElementById("imprimir");
   div.innerHTML = '';
   var deptoObject = Object.entries(contrato.departamento);
   var propietarioObject = Object.entries(contrato.propietario);
   var inquilinoObject = Object.entries(contrato.inquilino);
   var array = []
   array.push(deptoObject)
   array.push(propietarioObject)
   array.push(inquilinoObject)
   for(var item of array){
      for (var el of item){
         div.innerHTML += `<strong>${el[0]}:</strong>  <span>${el[1]}</span><br>`
      }
   }   
}
//Editar Contrato
function levantarContrato(itemEncontrado){
   document.getElementById("nombreP").value = itemEncontrado.propietario._nombre;
   document.getElementById("apellidoP").value = itemEncontrado.propietario._apellido;
   document.getElementById("dniP").value = itemEncontrado.propietario._dni;
   document.getElementById("cbuP").value = itemEncontrado.propietario._cbu;
   document.getElementById("celularP").value = itemEncontrado.propietario._celular;
   document.getElementById("emailP").value = itemEncontrado.propietario._email; 
   document.getElementById("direccionP").value = itemEncontrado.propietario._direccionP;
    
   document.getElementById("nombreI").value = itemEncontrado.inquilino._nombre;
   document.getElementById("apellidoI").value = itemEncontrado.inquilino._apellido;
   document.getElementById("dniI").value = itemEncontrado.inquilino._dni;
   document.getElementById("cbuI").value = itemEncontrado.inquilino._cbu;
   document.getElementById("celularI").value = itemEncontrado.inquilino._celular;
   document.getElementById("emailI").value = itemEncontrado.inquilino._email;
   document.getElementById("garantiaI").value = itemEncontrado.inquilino._garantia;
   
   document.getElementById("id").value = itemEncontrado.departamento._id;
   document.getElementById("id").value = itemEncontrado.id;
   document.getElementById("direccion").value = itemEncontrado.departamento._direccion;
   document.getElementById("inicioContrato").value = itemEncontrado.departamento._inicioContrato;
   document.getElementById("valor1").value = itemEncontrado.departamento._valor1;
   document.getElementById("valor2").value = itemEncontrado.departamento._valor2;
   document.getElementById("valor3").value = itemEncontrado.departamento._valor3;
   document.getElementById("obligacionesInq").value = itemEncontrado.departamento._obligacionesInq;
   document.getElementById("observaciones").value = itemEncontrado.departamento._observaciones;
   document.getElementById("descripcion").value = itemEncontrado.departamento._descripcion;
   // document.getElementById("imagenesFile").value = itemEncontrado.departamento._imagenes;
   // document.getElementById("contratoFile").value = itemEncontrado.departamento._contrato;
}
function editarContrato(itemEncontrado){
   if(confirm("Vas a sobre escribir todos los datos de este contrato estas segura, chequeaste todos los campos?")){
      let contrato = contratos[indiceItemEncontrado]
      contrato.id = document.getElementById("id").value;
      contrato.propietario._nombre = document.getElementById("nombreP").value;
      contrato.propietario._apellido = document.getElementById("apellidoP").value;
      contrato.propietario._celular = document.getElementById("celularP").value;
      contrato.propietario._email = document.getElementById("emailP").value;
      contrato.propietario._dni = document.getElementById("dniP").value;
      contrato.propietario._cbu = document.getElementById("cbuP").value;
      contrato.propietario._direccion = document.getElementById("direccionP").value;
      contrato.inquilino._nombre = document.getElementById("nombreI").value;
      contrato.inquilino._apellido = document.getElementById("apellidoI").value;
      contrato.inquilino._celular = document.getElementById("celularI").value;
      contrato.inquilino._email = document.getElementById("emailI").value;
      contrato.inquilino._dni = document.getElementById("dniI").value;
      contrato.inquilino._cbu = document.getElementById("cbuI").value;
      contrato.inquilino._garantia = document.getElementById("garantiaI").value;
      contrato.departamento._id = document.getElementById("id").value;
      contrato.departamento._direccion = document.getElementById("direccion").value 
      contrato.departamento._inicioContrato = document.getElementById("inicioContrato").value;
      contrato.departamento._valor1 = document.getElementById("valor1").value;
      // propietarioInput = '';
      // inquilinoInput = '';
      contrato.departamento._observaciones = document.getElementById('observaciones').value;
      contrato.departamento._descripcion = document.getElementById('descripcion').value;
      contrato.departamento._obligacionesInq = document.getElementById('obligacionesInq').value;
      contrato.departamento._valor2 = document.getElementById('valor2').value;
      contrato.departamento._valor3 = document.getElementById('valor3').value;
      // contrato.departamento._imagenes = document.getElementById('imagenesFile').value;
      // contrato.departamento._contrato = document.getElementById('contratoFile').value;
      guardarInfo();
      buscar();
   };   
};
//Borrar Contrato
function borrarContrato(){
   if(confirm("vas a borrar este contrato, estas segura?")){
      contratos.splice(indiceItemEncontrado,1);
      indices.splice(indiceItemEncontrado,1);
      guardarInfo();
   };   
}

//FREZZAR CONTRATO.PROPERTIES ==> NOS SE PUEDE DESFREEZAR PARA EDITARLOS
function cargarInfoFreezada(){
   cargarInfo()
   for(var item of contratos){
      Object.freeze(item)
   }
   for(var contrato of contratos){
      Object.keys(contrato).forEach(key=> {
         Object.freeze(contrato[key])
      })
   }
}
//cargarInfo();

function isObject(subject){
   return typeof subject == 'object'
}
function isArreglo(subject){
   return Array.isArray(subject)
}

// DEEPcOPY
function deepCopy(subject){
   let copySubject;
   const subjectIsObject = isObject(subject);
   const subjectIsArray = isArreglo(subject);

   if(subjectIsArray){
      copySubject = [];
   } else if (subjectIsObject) {
      copySubject = {};
   } else {
      return subject;
   }

   for (key in subject){
      const keyIsObject = isObject(subject[key]);
      if (keyIsObject) {
         copySubject[key] = deepCopy(subject[key])
      } else {
         if (subjectIsArray) {
            copySubject.push(subject[key]);
         } else {
            copySubject[key] = subject[key];
         }
      }
   }

   return copySubject;
};

function imprimir(){
   window.print()
}

function imprimirBoleta(div){
   if (itemEncontrado!=''){
      impInq();
      var ficha = document.getElementById(div);
      var wImp = window.open('','popimp');
      wImp.document.write(`<html><head><title>Print it!</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,500;0,700;1,200;1,600&display=swap" rel="stylesheet"><link rel="stylesheet" type="text/css" href="./styles/imp.css"></head><body><div class="bodyInt">${ficha.innerHTML}</div></body></html>`);
      
      // wImp.onload = function () {
      //    wImp.print();
      // }
      setTimeout(async() => {
         wImp.print()         
      }, 100);
      wImp.document.close();
      //wImp.close();
        
   } else {
      alert('Cargá algun contrato, no cargaste ninguno. Dale despabilate!');
      document.getElementById("buscarCalleInput").focus();
   }
}


cargarInfo();
