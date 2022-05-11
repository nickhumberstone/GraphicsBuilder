const btnDownload = document.querySelector ("#btnDownload");
const igSize = document.querySelector ("#igSize");
const twSize = document.querySelector ("#twSize");
const fbSize = document.querySelector ("#fbSize");
const myCanvas = document.querySelector ("#myCanvas");


//Set Size of Canvas for different Social Media Uses
igSize.addEventListener("click", function() {
    myCanvas.style.width = '1080px';
    myCanvas.style.height = '1080px';
});

fbSize.addEventListener("click", function() {
    myCanvas.style.width = '1200px';
    myCanvas.style.height = '630px';
});

twSize.addEventListener("click", function() {
    myCanvas.style.width = '1200px';
    myCanvas.style.height = '675px';
});

//Download Canvas Image
btnDownload.addEventListener("click", function() {
    // IE/Edge Support (PNG Only says a guy on the internet)
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(myCanvas.msToBlob(), "graphic-generated.png");
    } else {
        const a = document.createElement("a");

        document.body.appendChild(a);
        a.href = myCanvas.toDataURL ();
        a.download = "graphic-generated.png";
        a.click();
        document.body.removeChild(a);
    }
})

//Adding Image to Canvas
//Might need a server for uploading files to - uh-oh...
function drawScreen() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var myImage = new Image();
    myImage.src = "thumbnail.png";
    myImage.onload = function () {
        context.drawImage(myImage,0,0,1000,1920);
    }
}
window.onload=drawScreen;