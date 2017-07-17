var images = ['cra.png', 'Ecaflip.png', 'Eniripsa.png', 'Feca.png', 'sacri.png', 'Sram.png', 'Xelor.png', 'cra.png', 'Ecaflip.png', 'Eniripsa.png', 'Feca.png', 'sacri.png', 'Sram.png', 'Xelor.png'];


function shuffleArray(images) {
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i];
        images[i] = images[j];
        images[j] = images;
    }
    return images;
}

var x = document.getElementByClassName("flex-item");
if (x.addEventListener) {
    x.addEventListener("click", retourner);
    } else if (x.attachEvent) {
    x.attachEvent("onclick");
}

function retourner() {
    
}
