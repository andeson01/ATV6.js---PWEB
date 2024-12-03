let nomeMNovo = '';
let maisNovo = 1000;

    for (let i = 0; i < 10; i++) {
        let nome = prompt('Digite o nome da pessoa: ')
        let idade = parseFloat(prompt('Digite a idade de(a) ' + nome + ':'));

        if (idade < maisNovo) {
            maisNovo = idade;
            nomeMNovo = nome;
        }
    } alert('Pode-se concluir que a pessoas mais nova é o(a): ' + nomeMNovo);
    