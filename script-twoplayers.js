if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', game)
} else {
    game()
}

function game(){

    const cells = document.getElementsByClassName('cell') // reports 9 divs

    var movesMade = 0

    for (i = 0; i< cells.length; i++){
        cells[i].addEventListener('click', cellClicked) // Checks if one of the cells is clicked
    }

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

    function clearGrid(){
        for (i = 0; i < cells.length; i++){
            cells[i].innerText = ''
            movesMade = 0
        }
    }

    function checkForWinOrLoss(){
        //Checks if X won//
        for (i = 0; i < possibleWins.length; i++){
            if ((possibleWins[i][0].innerText == 'x') && (possibleWins[i][1].innerText == 'x') && (possibleWins[i][2].innerText == 'x')){
                document.getElementsByClassName('win-loss')[0].innerText = 'X won!'
                setTimeout(function (){
                    clearGrid()
                    document.getElementsByClassName('win-loss')[0].innerText = ''
                }, 1500);
            }
        }

        //Checks if O won//
        for (i = 0; i < possibleWins.length; i++){
            if ((possibleWins[i][0].innerText == 'o') && (possibleWins[i][1].innerText == 'o') && (possibleWins[i][2].innerText == 'o')){
                document.getElementsByClassName('win-loss')[0].innerText = 'O won!'
                setTimeout(function (){
                    clearGrid()
                    document.getElementsByClassName('win-loss')[0].innerText = ''
                }, 1500);
            }
        }
    }

    function cellClicked(event){
        console.log(movesMade)
        var cell = event.target
        if (movesMade%2 == 0){
            if (cell.innerText !== 'o'){
                if (cell.innerText !== 'x'){
                    cell.innerText = 'x'
                    movesMade = movesMade + 1
                }
            }
        } else {
            if (cell.innerText !== 'x'){
                if (cell.innerText !== 'o'){
                    cell.innerText = 'o'
                    movesMade = movesMade + 1
                }
            }
        }
        checkForWinOrLoss()
    }
}