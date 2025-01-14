let video;

let bodyPose;

let poses = [];

function preload(){
    bodyPose = ml5.bodyPose("MoveNet");
}

function mousePressed(){
    console.log(poses);
}

function gotPoses(results){
   poses= results;
}   

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO, {flipped: true});
    video.hide();
    bodyPose.detectStart(video, gotPoses)
}

function draw(){
    Image(video, 0, 0)
} 