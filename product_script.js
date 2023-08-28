var Mainimage = document.getElementById('main-image');
var Smallimage = document.getElementsByClassName("small-img");
var image=document.getElementsByClassName("image");



Smallimage[0].onclick = function () {
    Mainimage.src = Smallimage[0].src;
}
Smallimage[1].onclick = function () {
    Mainimage.src = Smallimage[1].src;
}
Smallimage[2].onclick = function () {
    Mainimage.src = Smallimage[2].src;
}
Smallimage[3].onclick = function () {
    Mainimage.src = Smallimage[3].src;
}

