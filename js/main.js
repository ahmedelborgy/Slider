









var imgs = document.querySelectorAll('.item img');
var closeIcone = document.querySelector('.closeIcone');
var model = document.querySelector('.model');
var prtofImg = document.querySelector('.protfo img');
var arrowRight = document.querySelector('.rightIcone');
var arrowLeft = document.querySelector('.leftIcone');
var count = 0;
var imag;
//list of src of img
var imgList = [];
// to put values of src of item img in list of array by using nodelist img
for (var i = 0; i < imgs.length; i++) {
    // imgList[i] = imgs[i].getAttribute('src')
    // imgList[i] = imgs[i].src
    imgList.push(imgs[i].src);
}
// ******************
//when make click on img  display model and display the img in prtofolio .
//  loop for all img to add the event to all .itme img
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        //display model
        model.classList.remove('d-none');

        // send imag that had made event click as parameter  to display in prtofo
        protofoiloImg(e.target.src);

        imag = e.target.src;
    });
}

//diplay the imag that made click to it in protfoilo
function protofoiloImg(imag) {

    prtofImg.setAttribute('src', imag);
}
// close model 
closeIcone.onclick = function (e) {
    //to undisplay the model when click on close Icone
    model.classList.add('d-none');

}
//Flips photos in order by

//function Flips photos in order to right
//to get next image
function getNextImg() {
    //  to select index of imge that made event cilck;
    for (var i = 0; i < imgList.length; i++) {
        if (imag == imgList[i]) {
            count = i;
            break;

        }
    }
    // anthor away to to select index of imge that made event cilck;
    // count=imgList.indexOf(imag)

    count++;
    if (count == imgList.length)
        count = 0;
    imag = imgList[count];

    protofoiloImg(imag);
}
//function Flips photos in order to left
//get previse imag
function getPreviseImg() {
    // to select index of imge that made event cilck;
    // for(var i=0;i<imgList.length;i++){
    //     if(imag==imgList[i]){
    //      count=i;
    //      break;

    // }}
    // anthor away to to select index of imge that made event cilck;
    count = imgList.indexOf(imag);

    count--;
    if (count == -1)
        count = imgList.length - 1;
    imag = imgList[count];
    protofoiloImg(imag);
}
//to  Flips photos in order to right by arrow right icone
arrowRight.onclick = function (e) {

    getNextImg();
}



//to  Flips photos in order to left by arrow left icone
arrowLeft.onclick = function (e) {
    getPreviseImg();
}



//to  Flips photos in order by keyborade 
window.onkeyup = function (e) {

    //to  Flips photos in order to right by arrow right keyborade 
    if (e.keyCode === 39)
        getNextImg();


    //to  Flips photos in order to left by arrow keyboarde
     if (e.keyCode === 37)
        getPreviseImg();

        if(e.keyCode===27)
        model.classList.add('d-none');


}










