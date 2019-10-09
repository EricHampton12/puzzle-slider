var app = document.getElementById('app');
app.setAttribute('class', 'container');

var win = ['0', '1', '2', '3', '4', '5', '6', '7', '8', ' 9', '10', '11', '12', '13', '14', '15'];
var tiles = [];
class Tile {
    constructor(index, location, ) {
        this.index = index;
        this.location = location;
        this.isBlank = false;
    };
};


class blankTile {
    constructor(index, location, ) {
        this.index = index;
        this.location = location;
        this.isBlank = true;

    };
};



function createGame() {
    var title = document.createElement('div');
    title.setAttribute('class', "text-center display-3");
    title.innerHTML = "Solve The Puzzle!";
    app.appendChild(title);



    var myContainer = document.createElement('div');
    myContainer.setAttribute('class', 'container display-2 bg-dark');

    var myRow = '';


    for (var i = 0; i < 16; i++) {


        if (i % 4 == 0) {
            myRow = document.createElement('div');
            myRow.setAttribute('class', 'row h-200px');

        }

        var myCol = document.createElement('div');
        myCol.setAttribute('class', 'col-3 px-3 py-3 text-center border border-dark h-100px');
        var tile;
        if (i == 0) {
            tile = new blankTile(i, i);

        } else {
            tile = new Tile(i, i);
        }
        //     newTile = (i, i);
        tiles.push(tile);
        // console.log(tiles);
        // }

        var btn = document.createElement('button');
        btn.setAttribute('id', i);
        btn.innerHTML = [i];
        // newTile.id = i;
        // newBlankTile = i;
        btn.addEventListener('click', moveTiles);
        btn.setAttribute('class', 'btn-md btn-dark btn-tile')
        myCol.appendChild(btn);
        myRow.appendChild(myCol);
        // console.log(newTile);
        // console.log(btn);



        if ((i % 4) - 3 == 0) {


        }



        app.appendChild(myContainer);
        myContainer.appendChild(myRow);
        app.appendChild(myRow);
    }



    var shuffle = document.createElement('button');
    shuffle.setAttribute('class', 'btn btn-dark mt-5 ml-5 display-5');
    shuffle.innerHTML = "Shuffle";
    shuffle.addEventListener('click', shuffle);
    app.appendChild(shuffle);

    var uploadImage = document.createElement('button');
    uploadImage.setAttribute('class', 'btn btn-dark mt-5 ml-5');
    uploadImage.addEventListener('click', uploadImage);
    uploadImage.innerHTML = "Upload Image";
    app.appendChild(uploadImage);


}


function moveTiles(e) {
    console.log(tiles);
    e.target.id
    var x = 0;
    for(var x = 0; x < tiles.length; x++){
        if(x == 0){
            // return x;
            console.log(x);
        }
    }
    // get the index in the array of where the blank tile has location equal to 0

    // get the current clicked on tile's id (e.target.id)
    // see if the index + 1 or index -1 or index + 4 or index - 4 is equal to the tile's id
    // if the switch is allowed, 
    // change the location of the tile array index and tile array clicked id
    // update the html elements of the blank tile and clicked tile
    // run the checkWin method after any updates are ran
    // don't allow the blank tile to be clicked or ignore the click of the blank tile
}



function Shuffle() {

}

    
    
function uploadImage() {

}


function init() {
    createGame();
}