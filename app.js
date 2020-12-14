const status = $(".status");
const reset = $(".reset");
const cells = $(".cell");
let playerX = prompt("what is first players name?")
let playerO = prompt("what is second players name?")
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
    const cell10 = cells[9].classList[2];
    const cell11 = cells[10].classList[2];
    const cell12 = cells[11].classList[2];
    const cell13 = cells[12].classList[2];
    const cell14 = cells[13].classList[2];
    const cell15= cells[14].classList[2];
    const cell16 = cells[15].classList[2];

    /*
    [1,2,3,4]
    [5,6,7,8]
    [9,10,11,12]
    [13,14,15,16]
    [1,5,9,13]
    [2,6,10,14]
    [3,7,11,15]
    [4,8,12,16]
    [1,6,11,16]
    [13,10,7,4]
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

    if(cell1 === "x" && cell1 === cell2 && cell1 === cell3 && cell1===cell4){
        xWin();
    } else if (cell1 === "o" && cell1 === cell2 && cell1 === cell3 && cell1 === cell4){
        oWin();
    } 

    if(cell5 === "x" && cell5 === cell6 && cell5 === cell7 && cell5===cell8){
        xWin();
    } else if (cell5 === "o" && cell5 === cell6 && cell5 === cell7 && cell5 === cell8){
        oWin();
    } 
    if(cell9 === "x" && cell9 === cell10 && cell9 === cell11 && cell9===cell12){
        xWin();
    } else if (cell9 === "o" && cell9 === cell10 && cell9 === cell11 && cell9 === cell12){
        oWin();
    } 
    if(cell13 === "x" && cell13 === cell14 && cell13 === cell5 && cell13===cell16){
        xWin();
    } else if (cell13 === "o" && cell13 === cell14 && cell13 === cell15 && cell13 === cell16){
        oWin();
    } 
    if(cell1 === "x" && cell1 === cell5 && cell1 === cell9 && cell1===cell13){
        xWin();
    } else if (cell1 === "o" && cell1 === cell5 && cell1 === cell9 && cell1 === cell13){
        oWin();
    } 
    if(cell2 === "x" && cell2 === cell6 && cell2 === cell10 && cell2===cell14){
        xWin();
    } else if (cell2 === "o" && cell2 === cell6 && cell2 === cell10 && cell2 === cell14){
        oWin();
    } 
    if(cell3 === "x" && cell3 === cell7 && cell3 === cell11 && cell3===cell15){
        xWin();
    } else if (cell3 === "o" && cell3 === cell7 && cell3 === cell11 && cell3 === cell15){
        oWin();
    } 
    if(cell4 === "x" && cell4 === cell8 && cell4 === cell12 && cell4===cell16){
        xWin();
    } else if (cell4 === "o" && cell4 === cell8 && cell4 === cell12 && cell4 === cell16){
        oWin();
    } 
    if(cell1 === "x" && cell1 === cell6 && cell1 === cell11 && cell1===cell16){
        xWin();
    } else if (cell1 === "o" && cell1 === cell6 && cell1 === cell11 && cell1 === cell6){
        oWin();
    } 
    if(cell13 === "x" && cell13 === cell10 && cell13 === cell7 && cell13===cell4){
        xWin();
    } else if (cell13 === "o" && cell13 === cell10 && cell13 === cell7 && cell13 === cell4){
        oWin();
    } 
    //tie
    else if(cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8&& cell9 &&cell10 &&cell11 &&cell12 &&cell13 &&cell14 &&cell15 &&cell16 ){
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
