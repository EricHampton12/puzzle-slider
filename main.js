var app = document.getElementById('app');
app.setAttribute('class', 'container');


var winArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', ' 9', '10', '11', '12', '13', '14', '15'];
var tiles = [];
var imgSrc = 'devito.png';

class Tile {
    constructor(index, location) {
        this.index = index;
        this.location = location;
        this.isBlank = false;

        this.render = function () {
            var k = 0;
            for (var i = 0; i < tiles.length; i++) {
                if (tiles[i].index == this.index) {
                    k = i;
                }
            }

            // for (var i = 0; i < 16; i++) {
            var image = document.createElement('img');
            image.setAttribute("id", "img-" + k);
            var v = -135;
            var ml = "margin-left:" + ((this.location % 4) * v) + "px;";
            var mt = "margin-top:" + (parseInt(this.location / 4) * v) + "px;";
            image.setAttribute('style', ml + " " + mt);

            //   var devito = document.createElement('img');
            //   devito.setAttribute("style", "margin-left:-100px; margin-top:0px; max-width:100%;");
            image.src = imgSrc;
            document.getElementById(k).innerHTML = "";

            document.getElementById(k).appendChild(image);

            // }
        }
    };
};


class blankTile {
    constructor(index, location) {
        this.index = index;
        this.location = location;
        this.isBlank = true;
        this.render = function () {
            var k = 0;
            for (var i = 0; i < tiles.length; i++) {
                if (tiles[i].index == this.index) {
                    k = i;
                }
            }

            // for (var i = 0; i < 16; i++) {
                var image = document.createElement('img')
                image.setAttribute("id", "img-" + k);
                // if (i == 0) {
                    image.setAttribute('style', 'opacity: 0;');
                // }
                
                // else {
                    // image.setAttribute('style', "margin-left:-100px; margin-top:0px; max-width:100%;");
                // }
                //   var devito = document.createElement('img');
                //   devito.setAttribute("style", "margin-left:-100px; margin-top:0px; max-width:100%;");
                image.src = imgSrc;
                document.getElementById(k).innerHTML = "";

                document.getElementById(k).appendChild(image);

            // }
        }
    }
}


function createGame() {
    var title = document.createElement('div');
    title.setAttribute('class', "text-center display-3");
    title.innerHTML = "Click to Solve The Puzzle!";
    app.appendChild(title);

    var myContainer = document.createElement('div');
    myContainer.setAttribute('class', 'container display-2 bg-dark');

    var myRow = '';

    for (var i = 0; i < 16; i++) {


        if (i % 4 == 0) {
            myRow = document.createElement('div');
            myRow.setAttribute('class', 'row');

        }

        var myCol = document.createElement('div');
        myCol.setAttribute('class', 'col-3 p-0 border border-dark');
        myCol.setAttribute('style', 'max-height:135px; overflow:hidden;');
        // console.log(tiles);
        // }
        myCol.setAttribute('id', i);
        // newTile.id = i;
        // newBlankTile = i;
        myCol.addEventListener('click', moveTiles);

        myRow.appendChild(myCol);
        // console.log(newTile);
        // console.log(btn);



        if ((i % 4) - 3 == 0) {


        }



        app.appendChild(myContainer);
        myContainer.appendChild(myRow);
        app.appendChild(myRow);

        var tile;
        if (i == 0) {
            tile = new blankTile(i, i);

        } else {
            tile = new Tile(i, i);
        }
        //     newTile = (i, i);

        tiles.push(tile);
        tile.render();
    }



    var shuffle = document.createElement('button');
    shuffle.setAttribute('class', 'btn btn-dark mt-5 ml-5 display-5');
    shuffle.id = "shuffle";
    shuffle.innerHTML = "Shuffle";
    shuffle.addEventListener('click', shuffleTiles);
    app.appendChild(shuffle);

    var uploadImage = document.createElement('button');
    uploadImage.setAttribute('class', 'btn btn-dark mt-5 ml-5');
    uploadImage.addEventListener('click', uploadImage);
    uploadImage.innerHTML = "uploadImage";
    app.appendChild(uploadImage);


}


function moveTiles(e) {
    // console.log(tiles);
    // var tiles = [];
    // let currentTile = n;
    var id = e.target.id;
    if(id.indexOf("-") > 0){
        id = e.target.id.split("-")[1];
    } 
    var clickedTileID = parseInt(id);
    var i = 0;
    for (i = 0; i < tiles.length; i++) {
        if (tiles[i].isBlank) {
            console.log('found blank tile');
            // console.log(tiles[i]);
            break;
        }
    }
    // console.log(tiles[clickedTileID]);
    //  console.log(tiles[i]);
    if (i + 1 === clickedTileID
        || i - 1 === clickedTileID
        || i + 4 === clickedTileID
        || i - 4 === clickedTileID) {


        // console.log("can move");


        var temp = tiles[i];
        var tempLocation = tiles[i].location;
        // console.log(temp);
        tiles[i] = tiles[clickedTileID];
        tiles[clickedTileID] = temp;
        // console.log(tiles);
        tiles[i].render();
        tiles[clickedTileID].render();
        checkWin();
    }

}
function checkWin() {
    var correctTile = 0;
    for (i = 0; i < 16; i++) {
        if (tiles[i].location === i) {
            correctTile++;


            console.log("1 tile");
        }
        if (correctTile == 16) {

            alert("Holy Shit! You won!")
        }
    }
}


function shuffleTiles() {
    // for (var i = 0; i < 500; i++) {
    //     console.log('random');
    //     let random = Math.floor(Math.random() * 16);
    //     document.getElementById(random).click();
    // }
    var l = tiles.length - 1;
    for(var i = l; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = tiles[i]
        tiles[i] = tiles[j]
        tiles[j] = temp;
        tiles[i].render();
        tiles[j].render();
      }



}




function uploadImage(e) {
    tiles = [];
    let imageDevito = URL.createObjectURL(e.target.tiles[0]);
    imgSrc = imageDevito;
    init();

}


function init() {
    createGame();
}