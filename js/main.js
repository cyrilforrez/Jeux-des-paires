//-------------------------------Declaration of variable----------------------------------------
var images = ['img/pc/cra.png', 'img/pc/Ecaflip.png', 'img/pc/Eniripsa.png', 'img/pc/Feca.png', 'img/pc/sacri.png', 'img/pc/Sram.png', 'img/pc/Xelor.png', 'img/pc/cra.png', 'img/pc/Ecaflip.png', 'img/pc/Eniripsa.png', 'img/pc/Feca.png', 'img/pc/sacri.png', 'img/pc/Sram.png', 'img/pc/Xelor.png'];
var image = document.getElementsByTagName('img');
var source = "";
var imgBack = image[0].src;
var clickLock = 0;
var compteur = 0;
var confirmcompt = 0;


//------------------------------------------Random Function---------------------------------------
function shuffleArray(images) {
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i];
        images[i] = images[j];

        images[j] = temp;
    }

}

shuffleArray(images);
for (let i = 0; i < images.length; i++) {

    image[i].addEventListener("click", function() { //----------Returns the card to the click
            comparer(i);
        }

    )
};


//------------------------------------------Main Function---------------------------------------
function comparer(index) {

    if (clickLock == 0 && image[index].src == imgBack) {

        if (source == "") {
            image[index].src = images[index]; //----------------------Displays an image of the index
            source = image[index];

        } else {
            image[index].src = images[index];

            if (source.src != image[index].src) { //----------Compare the 2 cards back
                compteur++;    //--------------------Add 1 point for each pair not found
                clickLock = 1; //-----------Blocks the click if 2 cards are returned
                setTimeout(function() {
                    clickLock = 0;
                    source.src = imgBack;
                    image[index].src = imgBack; //------------Returns cards if they are different
                    source = "";
                }, 1500);
            } else {
                source = "";
                confirmcompt++;    //-----------------------Add 1 point for each pair find
            }


        }
    }
    document.getElementById('compteur').innerHTML = "Nombre d'essaie" + ":" + " " + compteur; //----Displays the counter
    if ((confirmcompt) == 7) {
        alert("Vous avez gagné!");
        if (confirm = confirm("Voulez vous rejouer?")) { //--------------Output option
            window.location.reload(); //--------------Reload page
        } else {
            document.getElementById("end").style.display = 'block'; //---------Poster page goodbye
            document.getElementById("end").style.zIndex = '1';
        }
    }
}