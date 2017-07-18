var images = ['img/pc/cra.png', 'img/pc/Ecaflip.png', 'img/pc/Eniripsa.png', 'img/pc/Feca.png', 'img/pc/sacri.png', 'img/pc/Sram.png', 'img/pc/Xelor.png', 'img/pc/cra.png', 'img/pc/Ecaflip.png', 'img/pc/Eniripsa.png', 'img/pc/Feca.png', 'img/pc/sacri.png', 'img/pc/Sram.png', 'img/pc/Xelor.png'];
var image = document.getElementsByTagName('img');
var source = "";
var imgBack = image[0].src;
var clickLock = 0;

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

    image[i].addEventListener("click", function() {
            comparer(i);
        }

    )
};

function comparer(index) {

    if (clickLock == 0 && image[index].src == imgBack) {

        if (source == "") {
            image[index].src = images[index];
            source = image[index];
        } else {
            image[index].src = images[index];
            if (source.src != image[index].src) {
                clickLock = 1;
                setTimeout(function() {
                    clickLock = 0;
                    source.src = imgBack;
                    image[index].src = imgBack;
                    source = "";
                }, 1500);
            } else {
                source = "";
            }

        }
    }
}
