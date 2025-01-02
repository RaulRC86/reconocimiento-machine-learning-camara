let classifier;
let video;
let label;


function preload(){
    classifier=ml5.imageClassifier("MobileNet");
 
}

function gotResults(results){
    label = results[0].label
}

function setup(){
    createCanvas(400, 400);
    video= createCapture(VIDEO)
    video.hide();
    classifier.classifyStart(video, gotResults);
}

function draw(){
    background(220);
    image(video, 0, 0, width, height)
    
    rectMode(CENTER);
    fill(0);
    rect(200, 200, 400, 50)
    textSize(32)
    fill(255)
    textAlign(CENTER, CENTER)
    noStroke();
    text(label, 200, 200)
}