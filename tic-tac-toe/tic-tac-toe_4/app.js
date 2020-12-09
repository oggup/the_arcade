const status = $(".status");
const reset = $(".reset");
const cells = $(".cell");
let playerX = "eddie"
let playerO = "monkey1"
$(".playerX").html(playerX);
$(".playerO").html(playerO);
let gameIsLive = true; 
//if this is true the game is going, if someone won or game tied, we manually change this to false
let xTurn = true; 
//if this is true it is X's turn if false it is O's turn
 
function updateGameStatus (){
    const cell1 = cells[0].classList[2];
    const cell2 = cells[1].classList[2];
    const cell3 = cells[2].classList[2];
    const cell4 = cells[3].classList[2];
    const cell5 = cells[4].classList[2];
    const cell6 = cells[5].classList[2];
    const cell7 = cells[6].classList[2];
    const cell8 = cells[7].classList[2];
    const cell9 = cells[8].classList[2];
    /*
    [1,2,3]
    [4,5,6]
    [7,8,9]
    [1,4,7]
    [2,5,8]
    [3,6,9]
    [1,6,9]
    [3,5,7]
    */
    function xWin(){
        gameIsLive = false;
        winner = playerX;
        status.html(`${winner} is victorious!`);   
        $(".winner").html(`♛${winner} won!♛`);
        $(".gameResult").addClass("show");
    }
    function oWin(){
        gameIsLive = false;
        winner = playerO;
        status.html(`${winner} is victorious!`);   
        $(".winner").html(`♛${winner} won!♛`);
        $(".gameResult").addClass("show");

    }

    if(cell1 === "x" && cell1 === cell2 && cell1 === cell3){
        xWin();
    } else if (cell1 === "o" && cell1 === cell2 && cell1 === cell3){
        oWin();
    } 

    if(cell4 === "x" && cell4 === cell5 && cell4 === cell6){
        xWin();
    } else if(cell4 === "o" && cell4 === cell5 && cell4 === cell6){
        oWin();
    }
    
    if(cell7 === "x" && cell7 === cell8 && cell7 === cell9){
        xWin();
    } else if(cell7 === "o" && cell7 === cell8 && cell7 === cell9){
        oWin();
    }

    if(cell1 === "x" && cell1 === cell4 && cell1 === cell7){
        xWin();
    } else if(cell1 === "o" && cell1 === cell4 && cell1 === cell7){
        oWin();
    }

    if(cell2 === "x" && cell2 === cell5 && cell2 === cell8){
        xWin();
    } else if(cell2 === "o" && cell2 === cell5 && cell2 === cell8){
        oWin();
    }  
    if(cell3 === "x" && cell3 === cell6 && cell3 === cell9){
        xWin();
    }  else if(cell3 === "o" && cell3 === cell6 && cell3 === cell9){
        oWin();
    }  

    if(cell1 === "x" && cell1 === cell5 && cell1 === cell9){
       xWin();
    }  else if(cell1 === "o" && cell1 === cell5 && cell1 === cell9){
        oWin();
     }  

    if(cell3 === "x" && cell3 === cell5 && cell3 === cell7){
        xWin();
    } else if(cell3 === "o" && cell3 === cell5 && cell3 === cell7){
        oWin();
    }
    //tie
    else if(cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8&& cell9){
    gameIsLive = false;
    winner = "No one";
    status.html(`${winner} is victorious!`);
    $(".winner").html("DRAW!");
    $(".gameResult").addClass("show");
    };
};

//eventHandlers
function resetClickHandler (event){
    xTurn = true; 
    status.html(`${playerX}s next`);
    gameIsLive = true;
    cells.removeClass("x o");
    $(".gameResult").removeClass("show");
    $(".playerX").css("color", "rgb(185, 177, 177)");
    $(".playerO").css("color", "rgb(185, 177, 177)");
};

//when we console.log the event we can see that the class for the number of the cell
//is stored under target, then inside that classList, and then it is in the index position 1
function cellClickHandler (event){
   /* console.log(event)
    console.log(event.target.classList)
    */
    const classList = $(this.classList);
    if (!gameIsLive || classList[2]=== "x" || classList[2] === "o" ){
        return;
        //when we do this we check if we already have x or o as a class
        //when we make it RETURN
        //we stop the function and dont check the rest of the if statements
        //this allows us to not add both x and o in a single cell
    }
    if (xTurn){
       $(this).addClass("x");
       xTurn =! xTurn;
       status.html(`${playerO}'s turn`);
       $(".playerO").css("color", "rgb(247, 237, 183)");
       $(".playerX").css("color", "rgb(185, 177, 177)");
       updateGameStatus ();
   } else {
       $(this).addClass("o");
       xTurn = !xTurn;
       status.html(`${playerX}'s turn`)
       $(".playerX").css("color", "rgb(247, 237, 183)");
       $(".playerO").css("color","rgb(185, 177, 177)");
       updateGameStatus();
   }
};


reset.on("click", resetClickHandler);
cells.on("click", cellClickHandler);
