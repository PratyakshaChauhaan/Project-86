const { fabric } = require("./fabric");

var canvas = new fabric.canvas("myCanvas");

player_x = 10;
player_y = 10;

superhero_image_widht  = 30;
superhero_image_height = 30;

player_object = "";
superhero_object = "";

function update_player()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidht(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        superhero_object = Img;
        superhero_object.scaleToWidht(superhero_image_widht);
        superhero_object.scaleToHeight(superhero_image_height);
        superhero_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(superhero_object);
    });
}
  window.addEventListener("keybord", my_keydown);
  function my_keydown(e) {

  }   