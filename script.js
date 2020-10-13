if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', game)
} else {
    game()
}

function game(){

    const cells = document.getElementsByClassName('cell')
    var movesMade = 0

    for (i = 0; i< cells.length; i++){
        cells[i].addEventListener('click', cellClicked)
    }

    function clearGrid(){
        for (i = 0; i < cells.length; i++){
            cells[i].innerText = ''
            movesMade = 0
        }
    }

    function pickRandom(){
        var emptyCells = []
        for (i = 0; i < cells.length; i++){
            if (cells[i].innerText == ''){
                emptyCells.push(cells[i])
            }
        }
        var emptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        emptyCell.innerText = 'o'
    }

    function checkForWinOrLoss(){
        if (cells[0].innerText == 'x'){
            if (cells[1].innerText == 'x'){
                if (cells[2].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
            if (cells[4].innerText == 'x'){
                if (cells[8].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
            if (cells[3].innerText == 'x'){
                if (cells[6].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[8].innerText == 'x'){
            if (cells[7].innerText == 'x'){
                if (cells[6].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
            if (cells[5].innerText == 'x'){
                if (cells[2].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[6].innerText == 'x'){
            if (cells[4].innerText == 'x'){
                if (cells[2].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[1].innerText == 'x'){
            if (cells[4].innerText == 'x'){
                if (cells[7].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[3].innerText == 'x'){
            if (cells[4].innerText == 'x'){
                if (cells[5].innerText == 'x'){
                    alert('You won!')
                    clearGrid()
                    return
                }
            }
        }

        //------------------------------------------//

        if (cells[0].innerText == 'o'){
            if (cells[1].innerText == 'o'){
                if (cells[2].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
            if (cells[4].innerText == 'o'){
                if (cells[8].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
            if (cells[3].innerText == 'o'){
                if (cells[6].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[8].innerText == 'o'){
            if (cells[7].innerText == 'o'){
                if (cells[6].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
            if (cells[5].innerText == 'o'){
                if (cells[2].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[6].innerText == 'o'){
            if (cells[4].innerText == 'o'){
                if (cells[2].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[1].innerText == 'o'){
            if (cells[4].innerText == 'o'){
                if (cells[7].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
        }

        if (cells[3].innerText == 'o'){
            if (cells[4].innerText == 'o'){
                if (cells[5].innerText == 'o'){
                    alert('You lost')
                    clearGrid()
                    return
                }
            }
        }

    }

    function computerTurn(){
        var possibleWins = [
            [cells[0], cells[1], cells[2]], //horizontal 1
            [cells[3], cells[4], cells[5]], //horizontal 2
            [cells[6], cells[7], cells[8]], //horizontal 3

            [cells[0], cells[3], cells[6]], //vertical 1
            [cells[1], cells[4], cells[7]], //vertical 2
            [cells[2], cells[5], cells[8]], //vertical 3

            [cells[0], cells[4], cells[8]], //diagonal 1
            [cells[6], cells[4], cells[2]]  //diagonal 2
        ]
        if (movesMade == 1){
            pickRandom()
        }
        
        if (movesMade > 1){
            for (i = 0; i < possibleWins.length; i++){
                //check if there's a chance for win//
                if (((possibleWins[i][0].innerText == 'o') && (possibleWins[i][2].innerText == 'o')) && (possibleWins[i][1].innerText == '')){
                    console.log(possibleWins[i][0], possibleWins[i][2], 'win')
                    possibleWins[i][1].innerText = 'o'
                    return
                }
                if (((possibleWins[i][0].innerText == 'o') && (possibleWins[i][1].innerText == 'o')) && (possibleWins[i][2].innerText == '')){
                    console.log(possibleWins[i][0], possibleWins[i][1], 'win')
                    possibleWins[i][2].innerText = 'o'
                    return
                }
                if (((possibleWins[i][1].innerText == 'o') && (possibleWins[i][2].innerText == 'o')) && (possibleWins[i][0].innerText == '')){
                    console.log(possibleWins[i][1], possibleWins[i][2], 'win')
                    possibleWins[i][0].innerText = 'o'
                    return
                }

                // check if need to defend //
                if (((possibleWins[i][0].innerText == 'x') && (possibleWins[i][2].innerText == 'x')) && (possibleWins[i][1].innerText == '')){
                    console.log(possibleWins[i][0], possibleWins[i][2], 'defend')
                    possibleWins[i][1].innerText = 'o'
                    return
                }
                if (((possibleWins[i][0].innerText == 'x') && (possibleWins[i][1].innerText == 'x')) && (possibleWins[i][2].innerText == '')){
                    console.log(possibleWins[i][0], possibleWins[i][1], 'defend')
                    possibleWins[i][2].innerText = 'o'
                    return
                }
                if (((possibleWins[i][1].innerText == 'x') && (possibleWins[i][2].innerText == 'x')) && (possibleWins[i][0].innerText == '')){
                    console.log(possibleWins[i][1], possibleWins[i][2], 'defend')
                    possibleWins[i][0].innerText = 'o'
                    return
                }
            }
            // if there's no chance to win or defend //
            pickRandom()
            return
        }
    }
    
    function cellClicked(event){
        var cell = event.target
        if (cell.innerText !== 'o'){
            if (cell.innerText !== 'x'){
                cell.innerText = 'x'
                movesMade = movesMade + 1
                if (movesMade < 5){
                    computerTurn()
                }
            }
        }
        checkForWinOrLoss()
    }
}