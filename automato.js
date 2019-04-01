/* 
entradas: 
    δ: conjunto de todas as regras do automato
    um conjunto de entradas que consiste em 3 informaçoes, no formato seguinte: (posição atual, letra, posição atualizada)
    então essa entrada será um array de arrays com 3 elementos

    q0: estado inicial

    qf's: conjunto de estados finais separados por ;

    palavras: a palavra que vai ser processada pelo automato separados por ;


    as entradas vão ter uma função individual com validações individuais e todas vão ser chamadas em uma função entrada principal

*/

/* SESSÃO PARA TRATAMENTO DE INPUTS*/
var delta = [];
var q0;
var qf = [];
var w = [];

//Adicionando um delta a lista
document.getElementById('btnδ').onclick = function addδ(){
    deltaAux = document.getElementById('δ').value;
    deltaAux = deltaAux.split(',');
    wLength = deltaAux[1].split('');
    wLength = wLength.length;

    if( (deltaAux.length != 3) || (wLength != 1) ){
        alert('Formato de entrada do δ inválido!');
    } else{
        delta.push(deltaAux);
        console.log('Novo elemento '+ deltaAux +' adicionado com sucesso! Delta atual: ');
        console.log(delta);
    }  
}

function addQ0(){
    q0 = document.getElementById('q0').value;  
}

document.getElementById('btnqf').onclick = function addQF(){
    qfAux = document.getElementById('qf').value;
    qf.push(qfAux);
    console.log('Nova posição final '+ qfAux + ' adicionado com sucesso! Nova lista de qf\'s:');
    console.log(qf);
}

document.getElementById('btnw').onclick = function addW(){
    wAux = document.getElementById('w').value;
    w.push(wAux);
    console.log('Nova palavra '+ wAux + ' adicionado com sucesso! Nova lista de palavras:');
    console.log(w);
}

function dataValidation(d,q,f,p){
    if((d.length >= 1) || (q !== 'undefined') || (f.length >= 1) || (p.length >= 1)){
        return true;
    }else{
        return false;
    }
}

document.getElementById('btnStart').onclick = function() { 
    addQ0();
    if(dataValidation(delta, q0, qf, w)){
        // chamada de funções
        automato(delta, q0, qf, w);
    }else{alert('Algum dos dados está em branco, por favor certifique-se de preencher tudo!')};
}

/* CÓDIGO AUTOMATO */
function automato(d,q,f,p){
    currentWord = 0;
    do{
        currentPos = q; // é iniciado na posição inicial definida pelo usuário
        letraAtual = 0; //a primeira letra a da palavra é a da posição 0
        letraMax = p.length-1; // o pMax é a última letra da palavra

        for (let index = 0; index < d.length; index++) { //é iterado por todas as possibilidades entradas
            if(d[index][0] == currentPos && d[index][1] == p[currentWord][letraAtual]){   
                currentPos = d[index][2];
                if(letraAtual < letraMax){
                    letraAtual += 1; // avança para a próxima letra da palavra
                }else{currentPos = 'posição indefinida';}
                index = -1; //reseta o index para recomeçar a contagem do zero até que seja concluído todas letras da palavra
                }
        }
        console.log('================ INICIO ====================');
        console.log('posição onde o automato se encerrou: '+currentPos);
        if(f.indexOf(currentPos, 0) >= 0){
            console.log('A palavra: '+ p[currentWord]+' foi aceita com sucesso')
        }else{
            console.log('A palavra: '+ p[currentWord]+' não foi aceita')
        }
        console.log('letra atual:' +letraAtual);

        currentWord += 1;
    }while(currentWord !== p.length);
}



