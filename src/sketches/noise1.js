/*
0. Vibrant
1. Light Vibrant
2. Dark Vibrant
3. Muted
4. Light Muted
5. Dark Muted
*/

export const Noisy = (p,processedImageData, size = 512) => {
  const SQsize = size/10;
  const offset = SQsize/10;
  p.setup = function() {
    let canvas = p.createCanvas(size, size);
    canvas.parent('canvasContainer');
    p.colorMode(p.HSB, 360, 100, 100);
    p.noLoop();
    p.strokeCap(p.SQUARE);
    //console.log("loaded");
    // listen for imageProcessed event to proceed
    document.addEventListener("imageProcessed", function() {
      console.log("'imageProcessed' event received in Sslines.");
      if (window.processedImageData) {
        p.redraw(); // draw
      }
    });
  };

  p.draw = () => {
    //console.log("loaded2");
    //p.background(220); // white background

  function* processData(pixdata){
    
    let length = pixdata.length;
    while(true){
      for(let i = 0; i < length;i++){
        for(let j = 0; j < 4;j++){
          yield parseInt(pixdata[i][j]);
        }

      }
    }
  }

    
  function DrawNoisySin(x,y){
    p.push();
    p.translate(x,y);
    p.beginShape();
    for(let i = 0; i < p.width; i++){
      let u = 100*p.noise(i,y);
      //console.log(u);
      p.vertex(i,u);
    }
    p.endShape();
    p.pop();
  }




    
      // color palette 
    const colors = processedImageData?.colorPalette || ["rgb(0, 0, 0)"]; // Fallback to black if colorPalette is missing
    const pixdata = processedImageData?.pixelCluster || ["rgb(0,0,0)"];    
    const randgen = processData(pixdata); //generator init
    
    console.log(`Running Noisy pattern with ${colors[0]} and ${colors[1]}`);
   
  p.noiseSeed(randgen.next().value);    
  p.strokeWeight(1);
  p.stroke("red");
  for(let j = 0; j < p.height; j+=50){
    DrawNoisySin(0,j);

  }
  //p.circle(100,100,100);


    
  }
};


