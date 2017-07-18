var images = ['img/pc/cra.png', 'img/pc/Ecaflip.png', 'img/pc/Eniripsa.png', 'img/pc/Feca.png', 'img/pc/sacri.png', 'img/pc/Sram.png', 'img/pc/Xelor.png', 'img/pc/cra.png', 'img/pc/Ecaflip.png', 'img/pc/Eniripsa.png', 'img/pc/Feca.png', 'img/pc/sacri.png', 'img/pc/Sram.png', 'img/pc/Xelor.png'];
var image = document.getElementsByTagName('img');
console.log(images);

function shuffleArray(images) {
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i];
        images[i] = images[j];
      
        images[j] = temp;
    }

}

shuffleArray(images);
console.log(images);
for (let i = 0; i < images.length; i++) {
	
	image[i].addEventListener("click", function () {
		this.src=images[i];}
	
	) };