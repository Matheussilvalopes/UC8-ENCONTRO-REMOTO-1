let nomePeças= "Disco de freio";
let pesoPeças= 80;
let listaPeças= ["Bateria","Chassi","Volante", "Carburador","Câmbio"];

if (pesoPeças<100) {
    console.log("Peça menor que 100g, não podemos cadastrar.")
    
} else {
    console.log("Peça cadastrada!")
    
}

if (listaPeças.length>=10) {
    console.log("Estoque cheio, não podemos cadastar.")
    
} else {
    console.log("Peça cadastrada!")
    
}

if (nomePeças.length < 3) {
    console.log("Nome de peça muito curto, não podemos cadastrar.")
    
} else {
    console.log("Nome válido, peça cadastrada!")
    
}