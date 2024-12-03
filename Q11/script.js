let cont = 0;

for (let i = 0; i < 20; i++) {
    let num = parseFloat(prompt('Digite os seus números para a verificação: '));

    if (num > 8) {
      cont++; 
    }
}   alert(cont + ' dos números digitados são maiores que 8.');  