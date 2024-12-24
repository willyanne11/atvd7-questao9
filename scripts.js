let resultado = 1;

for (let i = 1; i <= 5; i++) {

    let numero = Number(prompt("Digite o numero " + i + ":"));

    resultado *= numero;
}

alert("O resultado da multiplicacao dos 5 números e: " + resultado);
