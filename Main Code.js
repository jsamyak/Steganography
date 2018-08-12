function clearbits(colorval){
  var x = Math.floor(colorval/16)*16;
  return x;
}
function chop2hide(image){
  for (var px of image,values()){
    px.setRed(clearbits(px.getRed()));
    px.setGreen(clearbits(px.getGreen()));
    px.setBlue(clearbits(px.getBlue()));
  }
  return image;
}
function shift(image){
  for (var px of image.values()){
    px.setRed(px.getRed()/16);
    px.setGreen(px.getGreen()/16);
    px.setBlue(px.getBlue()/16);
  }
  return image;
}
function combine(show, hide){
  var answer = new SimpleImage(show.getWidth(). show.getHeight());
  for(var px of answer.values()){
    var x = px.getX();
    var y = px.getY();
    var showPixel = show.getPixel(x,y);
    var hidePixel = hide.getPixel(x,y);
    px.getRed(showPixel.getRed() + hidePixel.getRed());
    px.getGreen(showPixel.getGreen() + hidePixel.getGreen());
    px.getBlue(showPixel.getBlue() + hidePixel.getBlue());
  }
  return answer;
}
var start = new SimpleImage("bird.jpg"); //Just for reference. Can be any file 
var hide = new SimpleImage("sky.jpg");  //Just for reference. Can be any file 

start = chop2hide(start);
hide = shift(hide);
var stego = combine(start,hide);
print(stego);
