let sum = 0;
    
    for (let i = 0; i < 20; i++) {
        let idades = parseFloat(prompt('Digite as idades para somar:'))
        result = sum += idades;
        media = result / 20;
        
    }   //mostra a soma das idades apenas para complementar
        alert('O resultado da soma das idades digitados é: ' + result);
        alert('A média das idades digitadas é: ' + media);
    