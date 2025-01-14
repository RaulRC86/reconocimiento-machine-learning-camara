
let video;

let bodyPose;

let poses = [];

function preload(){
    bodyPose = ml5.bodyPose("MoveNet", {flipped: true});
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
    image(video, 0, 0)

    if(poses.length>0){
        let pose = poses[0];
        let x =  pose.right_wrist.x;
        let y = pose.right_wrist.y;
        fill(255);
        circle(x, y, 50);
    }
} 
