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