var NUMERACION;
var hoy = new Date().toLocaleDateString('sp-us',{day:"numeric",month:"numeric",year:"numeric"});
const localDateFormat = ['sp-us',{day:"numeric",month:"numeric",year:"numeric"}]
var sumarParaTotal = 0;
var sumarParaTotalProp = 0;
var valAlq = 0;
var comi = 0;

//inputs and prints
function impInq(){
    if (itemEncontrado!=''){
        //var numeracionInput = document.getElementById('numInput');
        var numeracionPrint = document.getElementById('num');
        var numeracionPrintProp = document.getElementById('numProp');
        //var fechaInput = document.getElementById('dateInput');
        var fechaPrint = document.getElementById('date');
        var fechaPrintProp = document.getElementById('dateProp');
        var seniorPrint = document.getElementById('senior');
        var domicilioInqPrint = document.getElementById('domicilio');
        var pesosLetrasInput = document.getElementById("pesos").value;
        var pesosLetraPrint = document.getElementById("pesosLetra")
        var venceInput = document.getElementById("vence").value;
        var vencePrint = document.getElementById("vencePrint");
        var nuevoGastoInput = document.getElementById("nuevoGasto").value;
        var nuevoMontoInput = document.getElementById("nuevoMonto").value;
        var mesAlquilerPrint = document.getElementById("mes-alq");
        //var mesAlquilerInput = document.getElementById("mesAlq").value;
        var mesAlquilerPropPrint = document.getElementById("mesAlqProp");
        var montoAlquilerPrint = document.getElementById("monto-alq");
        var montoAlquilerPrintProp = document.getElementById("montoAlqProp")
        var contenedorDetalle = document.createElement('div');
        contenedorDetalle.id = ("cont-detalle");
        var contCuerpoDetalle = document.createElement("div");
        contCuerpoDetalle.id = ("cuerpo-det");
        var contMontoDet = document.createElement("div");
        contMontoDet.id = ("monto");
        var totalDet = document.createElement("div");
        totalDet.id = ("total");
        var montoComision = document.getElementById("montoComision");
        var totalDetalle = document.getElementById("total");
        var observacionesPrint = document.getElementById("observacionesPrint");
        var observacionesPrintProp = document.getElementById("obsProp");
        var observacionesInput = document.getElementById("observacionesInput").value;
        //var observacionesInputProp = document.getElementById("observacionesInputProp").value;
        var locadorPrint = document.getElementById("locadorPrint")
        var totalDetProp = document.getElementById("totalDetProp");
        var totalFinal = document.getElementById("total-final")
        var totalFinalProp = document. getElementById("total-finalProp")
        var domicilioAlq = document.getElementById("dirDeptoAlq")
        //asignaciones
        numeracionPrint.innerHTML = NUMERACION;
        numeracionPrintProp.innerHTML = NUMERACION;
        fechaPrint.innerHTML = hoy;
        fechaPrintProp.innerHTML = hoy;
        seniorPrint.innerHTML = itemEncontrado.inquilino._nombre.toUpperCase()+' '+itemEncontrado.inquilino._apellido.toUpperCase();
        domicilioInqPrint.innerHTML = itemEncontrado.departamento._direccion.toUpperCase();
        domicilioAlq.innerHTML = itemEncontrado.departamento._direccion.toUpperCase();
        pesosLetraPrint.innerHTML = pesosLetrasInput.toUpperCase();
        const opDate = {year:'numeric',month:'numeric',day:'numeric'};
        const opDate2 = {year:'numeric',month:'short'};
        var v=vencedateParse = Date.parse(venceInput)+86400000
        var dateInv = new Date(v).toLocaleDateString("sp-IN", opDate)
        var dateShort = new Date(v).toLocaleDateString("sp-IN", opDate2)
        console.log('Input',venceInput);
        console.log(vencedateParse);
        console.log(vencedateParse+86400000);
        console.log('Invertida',dateInv);
        console.log('InvertidaSort',dateShort);
        vencePrint.innerHTML = dateInv;
        mesAlquilerPrint.innerHTML = dateShort.toUpperCase();
        mesAlquilerPropPrint.innerHTML = dateShort.toUpperCase();
        
        valorAlquiler()
        console.log(valAlq,comi)
        montoAlquilerPrint.innerHTML = "$ "+valAlq;
        montoAlquilerPrintProp.innerHTML = "$ "+valAlq;
        montoComision.innerHTML = "$ -"+comi;
        //observacionesPrint.innerHTML = observacionesInput;
        locadorPrint.innerHTML = itemEncontrado.propietario._nombre.toUpperCase()+' '+itemEncontrado.propietario._apellido.toUpperCase();
        //observaciones()
        console.log(dateShort)
        const obsSugeridas = observaciones(dateShort)
        observacionesPrint.innerHTML = obsSugeridas;
        observacionesPrintProp.innerHTML = obsSugeridas;
        console.log(obsSugeridas);
        //observacionesinputProp
        createObs();
        console.log(observacionesInput)
        //observacionesPrint.innerHTML = createObs();
        function createObs() {
            if (observacionesInput==""){
                    observacionesPrint.innerHTML = obsSugeridas;
                    observacionesPrintProp.innerHTML = obsSugeridas;
                } else {
                    observacionesPrint.innerHTML =  observacionesInput;
                    observacionesPrintProp.innerHTML = observacionesInput;
                }
            } 
        // sumarDetalleInq()
        // sumarDetalleProp()
        sumarParaTotal = parseInt(valAlq) - detalleTotal;
        sumarParaTotalProp = parseInt(valAlq) - comi - detalleTotalProp;
        totalDetalle.innerHTML = "$ "+sumarParaTotal;
        totalFinal.innerHTML = sumarParaTotal;   
        totalDetProp.innerHTML = sumarParaTotalProp;
        totalFinalProp.innerHTML = sumarParaTotalProp;
    } else {
        alert('Carg?? algun contrato, no cargaste ninguno. Dale despabilate!');        
        document.getElementById("buscarCalleInput").focus();
    }
}
var detalleTotal = 0;
var detalleTotalProp = 0;
// sumarParaTotal = parseInt(valAlq) - detalleTotal;
// sumarParaTotalProp = parseInt(valAlq) - comi - detalleTotalProp;
function sumarDetalleInq(nuevoMonto){
    detalleTotal -= nuevoMonto;
}
function sumarDetalleProp(nuevoMonto){
    detalleTotalProp -= nuevoMonto;
}

var items = [];
function insertarDetalles(){
    var nuevoGastoInput = document.getElementById("nuevoGasto").value;
    var nuevoMontoInput = document.getElementById("nuevoMonto").value;
    var contNewDet = document.getElementById("cont-new-det")
    contNewDet.style.display="flex";
    var contNewDet = document.getElementById("cont-detalle");
    contNewDet.style.display="block";
    var contNewMonto = document.getElementById("cont-montos");
    contNewMonto.style.display="flex";
    var contNewDetProp = document.getElementById("cont-detalleProp");
    contNewDetProp.style.display="block";
    var contNewMontoProp = document.getElementById("cont-montosProp");
    contNewMontoProp.style.display="flex";

    var newItem = [nuevoGastoInput,nuevoMontoInput]
    sumarDetalleInq (newItem[1]);
    sumarDetalleProp (newItem[1]);
    items.push(newItem);
    document.getElementById("cont-detalle").value = '';
    document.getElementById("cont-montos").value = '';
    contNewDet.innerHTML += "- "+newItem[0]+"<br>";
    contNewMonto.innerHTML += "$ "+newItem[1]+"<br>";
    contNewDetProp.innerHTML += "- "+newItem[0]+"<br>";
    contNewMontoProp.innerHTML += "$ "+newItem[1]+"<br>";    
    document.getElementById("nuevoGasto").value = '';
    document.getElementById("nuevoMonto").value = '';
    document.getElementById("nuevoGasto").focus();
    impInq();
}

function valorAlquiler(){
    let today = new Date(Date.now());
    let d2 = itemEncontrado.departamento._inicioP2;
    let d3 = itemEncontrado.departamento._inicioP3;
    let [day3,month3,year3] = d3.split('/');
    let dateTemp3 = new Date(+year3,+month3-1,+day3);
    let [day2,month2,year2] = d2.split('/');
    let dateTemp2 = new Date(+year2,+month2-1,+day2);
    console.log(today);
    console.log(dateTemp2);
    console.log(dateTemp3);
    if (today > dateTemp3){
        comi = valorComision(itemEncontrado.departamento._valor3)
        console.log('3er a??o',comi);
        valAlq = itemEncontrado.departamento._valor3
        
    } else if (today > dateTemp2) {
        comi = valorComision(itemEncontrado.departamento._valor2)
        console.log('2do a??o',comi)
        valAlq = itemEncontrado.departamento._valor2
        
    } else if (today < dateTemp2) {
        comi = valorComision(itemEncontrado.departamento._valor1)
        valAlq = itemEncontrado.departamento._valor1
    }
}
function valorComision(valor){
    var comSel = document.getElementById("comisionSelect").value;
    let comAdmin = parseInt(valor)*0.05;    
    let comRenov = parseInt(itemEncontrado.departamento._valor1)*36*0.0415;
    if(comSel === 'administracion'){
        return comAdmin;
    } else if (comSel === 'firma') {
        return comRenov;
    } else {
        alert('ocurrio algun error')
    }
}


function observaciones(mes){
    var x = mes;
    return `Recib?? comprobantes de pago de expensas ordinarias(${x}), expensas extraordinarias(${x}), agua(${x}), gas(${x}), luz(${x}), ABL(${x})`
}

function nuevo(){
    location.reload()
    contador();
    document.getElementById("buscarCalleInput").focus()
}

function contador(){
    if(confirm('Confirma que la impresion es correcta. Si confirmas, se pasara a la proxima boleta')){
        console.log(NUMERACION);
        NUMERACION = parseInt(NUMERACION);
        console.log(NUMERACION);
        NUMERACION += 1;
        console.log(NUMERACION);
        guardar(NUMERACION,"NUMERACION");
        console.log(NUMERACION);
    }
}