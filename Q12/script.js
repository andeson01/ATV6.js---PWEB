let cont = 0;

for (let i = 0; i < 20; i++) {
    let num = parseFloat(prompt('Digite os seus números para a verificação de par/ímpar: '));

    if (num % 2 == 0) {
      cont++; 
    }
}   alert(cont + ' dos números digitados são números pares.');  