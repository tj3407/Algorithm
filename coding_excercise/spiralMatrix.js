const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

const spiralMatrix = (matrix) => {
    let colStart = 0;
    let colEnd = matrix[0].length -1;
    let rowStart = 0;
    let rowEnd = matrix.length - 1;

    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            console.log(matrix[rowStart][i]);
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            console.log(matrix[i][colEnd]);
        }
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            console.log(matrix[rowEnd][i]);
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            console.log(matrix[i][colStart]);
        }
        colStart++;
    }
}

spiralMatrix(matrix);