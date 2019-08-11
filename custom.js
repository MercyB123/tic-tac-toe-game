const player_One_Symbol ='X';
const player_Two_Symbol ='O';



class ticTocToeGame {

    handleSquareClick(e){
        this.executeMove(e.target.id)
    }

    executeMove(moveIndex){
        if(this.board[moveIndex] == ""){
            this.board[moveIndex] = this.currentplayer;

            this.updateBoard();
            if(!this.gameHasWinner()){
                this.currentplayer = (this.currentplayer == player_One_Symbol ?
                    player_Two_Symbol : player_One_Symbol);
            }else 
                {
                    
                    alert('player ' + this.currentplayer + ' is the winner!');
                    //restart the game
                    this.start();
            }


            
                console.log(this.board)
        }
    }
    
    updateBoard(){
        let gameBoard = document.getElementById('gameBoard');
        let squareElement = gameBoard.childNodes;
        squareElement.forEach((element, index) => {
            if(element.innerText !== this.board[index]){
                element.innerText = this.board[index];
            }
        })
    }

    gameHasWinner(){
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal winnings
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical winnings
            [0, 4, 8], [2, 4, 6]             //diagonal winnings
        ];

        return winningCombinations.find(combo => {
            if(this.board[combo[0]] != "" && this.board[combo[1]] != "" && this.board[combo[2]] != "" &&
                this.board[combo[0]] == this.board[combo[1]] && this.board[combo[1]] && this.board[combo[2]]){
                    return true;
                    
                }else 
                return false;

            
        });
    }

    //method to create the initial empty board for the game
    drawBoard(){
        document.body.innerHTML = "";
        let gameBoard = document.createElement('div');
        gameBoard.id = 'gameBoard';
        gameBoard.classList.add('board');
        gameBoard.addEventListener('click', this.handleSquareClick.bind(this))

        this.board.forEach((square, index) => {
            let squareElement = document.createElement('div');
            squareElement.id = index;
            squareElement.classList.add('square');
            gameBoard.appendChild(squareElement);
        })
     document.body.appendChild(gameBoard);   
    }

    //when the game start, the board will have 9 empty boxes
    start(){
        this.board = ["", "", "",
                      "", "", "", 
                      "", "", ""];
        
        this.currentplayer = player_One_Symbol              
         
        this.drawBoard();              
    }


}

const game = new ticTocToeGame();
game.start();