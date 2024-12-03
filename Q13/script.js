let cont = 0;

for (let i = 0; i < 20; i++) {
    let num = parseFloat(prompt('Digite os seus números para a verificação de intervalo entre 0-100: '));

    if (num > 0 && num < 100) {
      cont++; 
    }
}   alert(cont + ' dos números digitados estão no intervalo.');  