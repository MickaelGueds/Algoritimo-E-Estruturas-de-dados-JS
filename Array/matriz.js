const matriz3x3x3 = []
for(let x = 0; x < 3; x++){
    // voce precisa inicializar antes de passar para o proximo arrey
    matriz3x3x3[x] = []
    for(let y = 0; y < 3; y++){
        matriz3x3x3[x][y] = []
        for(let z=0;z <3; z++){
            matriz3x3x3[x][y][z] = x + y + z
        }
    }
}
for(let x = 0; x< matriz3x3x3.length;x++){
    for(let y = 0; y< matriz3x3x3[x].length;y++){
        for(let z = 0; z< matriz3x3x3[x][y].length;z++){
            console.log(matriz3x3x3[x][y][z])
        }
    }
}