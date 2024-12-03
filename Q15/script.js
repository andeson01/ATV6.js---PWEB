let soma = 0;

while (true) {
    let nums = parseFloat(prompt('Digite os seus números para somar: '));
    let resultSoma = soma += nums;

        if (nums < 0) {
            break;
        }
    console.log('A soma dos números digitados é igual á: ' + resultSoma);
}   