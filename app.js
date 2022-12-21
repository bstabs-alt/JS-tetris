document.addEventListener('DOMContentLoaded', () => {

    //const grid = document.querySelector('.grid')
    const width = 10;
    const ScoreDisplay = document.querySelector('#score');
    const StartButton = document.querySelector('#start-button');

    let grid = document.getElementsByClassName('grid')[0];
    for (let i = 0; i < 210; i++) {
        let element = document.createElement('div');
        if (i >= 200) {
            element.classList.add('taken');
        }
        grid.appendChild(element);
    }
    let squares = Array.of(grid);

    //Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3],
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3]
    ]
    const zTetromino = [
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3],
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3]
    ]
    const tTetromino = [
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3],
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3]
    ]
    const oTetromino = [
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3],
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3]
    ]
    const iTetromino = [
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3],
        [1, width+1, width*2+1, 2],
        [width*2, width*2+1, width*2+3, width*3+3]
    ]
    const Tetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]
    let currPos = 4
    let currTetro = Tetrominoes[0][0];

    //draw tetromino
    // function draw() = {
    //     currTetro.forEach(index => {
    //         squares[currPos + index].classList.add('tetromino')
    //     })
    // }
    //draw()

})

