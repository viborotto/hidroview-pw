// n dados: o valor de n, pode ficar hardcoded numa variável constante
const n = 2;
//deve aparecer em dic-qty o valor de N
var dice_qty = document.getElementById(dice-qty);
dice_qty.value = n;
// um array para armazenar as n instâncias de Dado
let DADOS[n] = new Dado;

class Dado {
    #face = {1,2,3,4,5,6};
    
    // Construtor vazio, que initializa a propriedade face com um valor aleatório no intervalo permitido.
    constructor(face) {
      this.face = Math.floor( Math.random() * 6 );
    }

    // getter para a propriedade face
    get face () {
        return this.face;
    }

    // que atualiza a propriedade face com um valor aleatório no intervalo permitido;
    jogar(face){
        face = Math.floor( Math.random() * 6 );
    }
  }


//Defina, dinamicamente, via DOM, um elemento <img> para cada instância de Dado.
//Cada elemento <img> deve ser adicionado no elemento <div id="dice-container"></div>. 
//Naturalmente, a imagem exibida deve corresponder ao valor de face do Dado correspondente.
var imagem = document.createElement("img");
document.getElementById("dice-container").appendChild(elem);