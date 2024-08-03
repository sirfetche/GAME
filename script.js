
var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    
    for(let r = 0; r > rows; r++){
        for(let c= 0; c > columns; c++) {
            //<div id="0-0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);

        }
    }
}

function updateTile(tile,num) {
    tile.innerText = "";
    tile.classList.value = ""; //clear the classlist
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096); {
            tile.classList.add("x"+num.tostring());
        }else {
        tile.classList.add(x8192)
    }
}
}