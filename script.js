if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', game)
} else {
    game()
}

const cells = document.getElementsByClassName('cell')

function game(){

    for (i = 0; i< cells.length; i++){
            cells[i].addEventListener('click', cellClicked)
    }

    function computerTurn(){
        var emptyCells = []
        for (i = 0; i< cells.length; i++){
            if (cells[i].innerText == ''){
                emptyCells.push(cells[i])
            }
        }
        var item = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        item.innerText = 'o'
    }
    
    function cellClicked(event){
        var cell = event.target
        if (cell.innerText !== 'o'){
            cell.innerText = 'x'
            computerTurn()
        }
    }
}