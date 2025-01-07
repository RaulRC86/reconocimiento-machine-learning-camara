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
    createCanvas(640, 480);
    video= createCapture(VIDEO)
    video.hide();
    classifier.classifyStart(video, gotResults);
}

function draw(){
    background(220);
    image(video, 0, 0, width, height)
    
    rectMode(CENTER);
    fill(0);
    rect(width/2, height-50, width, 50)
    textSize(32)
    fill(255)
    textAlign(CENTER, CENTER)
    noStroke();
    text(label, width/2, height-50)

    if(label==="lemon"){
        background(255, 255, 0, 100);
    } else if (label ==="cello, violoncello") {background(0, 0, 0, 100);
    }
}