x = 0;
y = 0;
function preload(){
    clown = loadImage("https://i.postimg.cc/7LHBv670/images-1.png");
}
function setup(){
    canvas = createCanvas(350, 300);
    canvas.center();
    cam = createCapture(VIDEO);
    cam.size(350, 300);
    cam.hide();
    posenet = ml5.poseNet(cam, modelLoaded);
    posenet.on("pose", gotResult);
}
function draw(){
    image(cam, 0, 0, 350, 300);
    // fill("#d91616"); 
   // stroke("#d91616");
   // circle(x, y, 20);
    image(clown, x, y, 35, 35);
}
function saveimage(){
    save("Myselfie.png");
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotResult(result) {

    if(result.length > 0){
        
        console.log(result);
        console.log("nose:x=" + result[0].pose.nose.x);
        console.log("nose:y=" + result[0].pose.nose.y);
        x = result[0].pose.nose.x - 15;
        y = result[0].pose.nose.y - 10;
    }

}