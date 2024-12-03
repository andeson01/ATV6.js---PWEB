let cont = 0;
    
    for (let i = 0; i < 20; i++) {
        let idades = parseFloat(prompt('Digite a idade das pessoas para verificar:'))
        
        if (idades >= 18) {
            cont++;
        }
    }   alert(cont + ' das pessoas digitadas são maiores de idade.')
