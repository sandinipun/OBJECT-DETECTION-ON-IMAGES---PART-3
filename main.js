image="";
status="";
objects = [];
function preload(){
      image = loadImage("https://mnprairieroots.files.wordpress.com/2016/02/art-creation-16-fruit-in-bowl.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "object being detected";
}
function modelLoaded(){
    console.log(" model loaded !")
    status = true;
    objectDetector.detect(img, gotresult);
}
function gotresult(error,results)
{
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
    objects = results;
}
function draw(){
    image(img, 0, 0,640,420)
    if(status != ""){
        document.getElementById("status").innerHTML = "status = objects detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label+""+percent+"%",objects[i].x + 15, objects[i].y + 15);
        nofill();
        stroke("#FF0000");
        rect(objects[i].y,objects[i].x,objects[i].width,objects[i].height);

    }
}

  
      
