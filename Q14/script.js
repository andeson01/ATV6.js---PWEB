let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

for (let i = 0; i < 5; i++) {
    let num = parseFloat(prompt('Digite os seus números para a verificação: '));

    if (num > 0 && num <= 100) {
      cont1++; 
    }
    if (num > 101 && num < 200) {
      cont2++;
    }
    if (num > 200) {
      cont3++;
    }
}   console.log(cont1 + ' dos números digitados estão no intervalo entre 0-100.');
    console.log(cont2 + ' dos números digitados estão no intervalo entre 101-200.');
    console.log(cont3 + ' dos números digitados são maiores que 200.');