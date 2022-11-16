var face_size = []
var face_x = []
var face_y = []
var face_num = 3
var song
var songIsplay=false //設定此變數為"假"，收到按下滑鼠把變數改為"真"，音樂撥放
var amp
function preload(){
  song = loadSound("10℃.mp3"); 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  for(var i=0;i<face_num;i++){
  face_size[i] = random(100,400)
  face_x[i] = random(0,width)
  face_y[i] = random(0,height)
  }
}


function draw() {
  background(220);

  for(var j=0;j<face_num;j++){
  push()
  translate(face_x[j],face_y[j])
     //尾巴
     if(!songIsplay){
      fill(180)
      beginShape()
     curveVertex(face_size[j]/4,face_size[j]/5)
     curveVertex(face_size[j]/3.5,face_size[j]/2.5)
     curveVertex(face_size[j]/1.5,face_size[j]/3)
     curveVertex(face_size[j]/1.3,face_size[j]/-5)
     curveVertex(face_size[j]/1.5,face_size[j]/-5)
     curveVertex(face_size[j]/1.6,face_size[j]/25)
     curveVertex(face_size[j]/1.9,face_size[j]/05)
     curveVertex(face_size[j]/15,face_size[j]/8)
     endShape(CLOSE)
    }
    else{
      vol = amp.getLevel() 
      fill(mouseY%256,213,206+mouseX/3)
    beginShape()
     curveVertex(face_size[j]/4,face_size[j]/5)
     curveVertex(face_size[j]/3.5,face_size[j]/2.5)
     curveVertex(face_size[j]/1.5,face_size[j]/3)
     curveVertex(face_size[j]/1.3,face_size[j]/-5)
     curveVertex(face_size[j]/1.5,face_size[j]/-5)
     curveVertex(face_size[j]/1.6,face_size[j]/25)
     curveVertex(face_size[j]/1.9,face_size[j]/05)
     curveVertex(face_size[j]/15,face_size[j]/8)
   endShape(CLOSE)
   }

    beginShape()
     curveVertex(face_size[j]/4,face_size[j]/5)
     curveVertex(face_size[j]/3.5,face_size[j]/2.5)
     curveVertex(face_size[j]/1.5,face_size[j]/3)
     curveVertex(face_size[j]/1.3,face_size[j]/-5)
     curveVertex(face_size[j]/1.5,face_size[j]/-5)
     curveVertex(face_size[j]/1.6,face_size[j]/25)
     curveVertex(face_size[j]/1.9,face_size[j]/05)
     curveVertex(face_size[j]/15,face_size[j]/8)
   endShape(CLOSE)
 
    fill(180)
    triangle(face_size[j]/-1.8,face_size[j]/-1.8,face_size[j]/-9.8,face_size[j]/-2.3,face_size[j]/-2.2,face_size[j]/-6);
    triangle(face_size[j]/-2,face_size[j]/-2,face_size[j]/-10,face_size[j]/-2.5,face_size[j]/-2.4,face_size[j]/-6.2);

    triangle(face_size[j]/1.8,face_size[j]/-1.8,face_size[j]/9.8,face_size[j]/-2.3,face_size[j]/2.2,face_size[j]/-6);
    triangle(face_size[j]/2,face_size[j]/-2,face_size[j]/10,face_size[j]/-2.5,face_size[j]/2.4,face_size[j]/-6.2);
    ellipse(0,0,face_size[j])  //臉


    //左眼
    fill(255)
    ellipse(-face_size[j]/5,-face_size[j]/5,face_size[j]/4.5)
    fill(0)
    ellipse(-face_size[j]/5,-face_size[j]/5,face_size[j]/6)
    fill(255)
    ellipse(-face_size[j]/4.7+map(mouseX,0,width,-face_size[j]/15+face_size[j]/20,face_size[j]/20),-face_size[j]/4.5+map(mouseY,0,height,-face_size[j]/15+face_size[j]/20,face_size[j]/16),face_size[j]/25)
    noFill()
    //右眼
    fill(255)
    ellipse(face_size[j]/5,-face_size[j]/5,face_size[j]/4.5)
    fill(0)
    ellipse(face_size[j]/5,-face_size[j]/5,face_size[j]/6)
    fill(255)
    ellipse(face_size[j]/5.5+map(mouseX,0,width,-face_size[j]/15+face_size[j]/20,face_size[j]/20),-face_size[j]/4.5+map(mouseY,0,height,-face_size[j]/15+face_size[j]/20,face_size[j]/16),face_size[j]/25)
    

    if(!songIsplay){
      fill(255,0,0)
      fill(180)
    }
    else{
      vol = amp.getLevel() 
      fill(255,0,0)
      arc(0,face_size[j]/35,face_size[j]/10,map(vol,0,0.5,face_size[j]/5,face_size[j]/10),0,180)
    }
    
    fill(180)
    arc(-face_size[j]/10,-face_size[j]/180,face_size[j]/5,face_size[j]/5,0,90)
    arc(face_size[j]/10,-face_size[j]/180,face_size[j]/5,face_size[j]/5,90,180)
    ellipse(0,0,face_size[j]/20) 

    arc(-face_size[j]/2.7,-face_size[j]/50,face_size[j]/5,face_size[j]/180,0,180)
    arc(-face_size[j]/2.5,face_size[j]/20,face_size[j]/5,face_size[j]/180,0,180)
    arc(-face_size[j]/2.7,face_size[j]/8,face_size[j]/5,face_size[j]/180,0,180)

    arc(face_size[j]/2.7,-face_size[j]/50,face_size[j]/5,face_size[j]/180,0,180)
    arc(face_size[j]/2.5,face_size[j]/20,face_size[j]/5,face_size[j]/180,0,180)
    arc(face_size[j]/2.7,face_size[j]/8,face_size[j]/5,face_size[j]/180,0,180)
    
    arc(-face_size[j]/2,-face_size[j]/2,face_size[j]/5,face_size[j]/3,-face_size[j]/2,-face_size[j]/2)


    noFill()
  pop()
  }

}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
