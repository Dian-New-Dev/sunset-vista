let numberGrid = [
    [1 ,2 ,3],
    [4, 5 ,6],
    [7, 8, 9]
];

for (let i = 0; i < numberGrid.length; i++) {
    for (let ii = 0; ii < 3; ii++) {
        if (typeof numberGrid[i][ii] === 'number')
            console.log("create div and insert image")
        else
            console.log("not a number, next")
    };
    
};

//declara novo grid + iteração "novogrid = numberGrid"
    // checa se tem index no grid vago
        // se sim, inscreve na primeira célula vaga a imagem
        // se não, volta lá em cima e cria novo grid + 1