$(document).ready(function(){
  $('.moving-hotspots').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    speed: 150,
    fade: true,
    cssEase: 'linear'
  });
    
    
  var active_video = document.querySelector(".video-item.slick-active video");
  var deactive_video = document.querySelector(".video-item");
  var video_layers = $(".video-item video");
  //var tanmoy = $(".video-item");


  active_video.play();
  active_video.muted = true;

    $(".slick-next").click(function(){

        for (var i = 0; i < video_layers.length; i++) {
            var hp = video_layers.length - 1;
            if(hp == i) {
                video_layers[0].play();
            }
            if(!video_layers[i].paused){
                video_layers[i].pause();
                video_layers[i].load();
                console.log(i);
                var p = i + 1;
                video_layers[p].play();
                break;
            }
        }
    });


    // Script for Hotspot position
    var hotsopt = document.querySelector(".slick-next");
    fish_top = parseInt($(hotsopt).css("top"));   // Get Value of top
    fish_left = parseInt($(hotsopt).css("left")); // Get Value of left


var dt = "-";
var dl = "-";

    function fish_moving() {

      if(fish_top <= 0){
        dt = "+";
      }

      if(fish_top >= 400){
        dt = "-";
      }

      if(fish_left <= 0){
        dl = "+";
      }

      if(fish_left == 1260){
        dl = "-";
      }

      if(dt == "+"){
        $(hotsopt).css('top', fish_top++);        
      }
      if(dt == "-"){
        $(hotsopt).css('top', fish_top--);        
      }
      if(dl == "+"){
        $(hotsopt).css('left', fish_left++);        
      }
      if(dl == "-"){
        $(hotsopt).css('left', fish_left--);        
      }

        document.getElementById("top-class").innerHTML = fish_top;
        document.getElementById("left-class").innerHTML = fish_left;
    }

    setInterval(fish_moving, 30);

});
