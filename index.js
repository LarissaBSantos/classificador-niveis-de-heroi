//Variavel que armazena um heroi e o seu nível
let heroi = ["Super Choque", 8500];

let xp = heroi[1];
let nivel;

//Verificando nivel do herói
    if(xp < 1000) {
        nivel = "Ferro";
    } 
    else if(xp < 2001) {
        nivel = "Bronze";
    }
    else if(xp < 5001) {
        nivel = "Prata";
    }
    else if(xp < 7001) {
      nivel = "Ouro";
    }
    else if(xp < 8001) {
        nivel = "Platina";
    }
    else if(xp < 9001){
        nivel = "Ascendente";
    }
    else if(xp < 10001){
        nivel = "Imortal";
    }
    else {
        nivel = "Radiante";
    }

//Saida
console.log("O Herói " + heroi[0] + " está no nível " + nivel);
