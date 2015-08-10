/*
(function() {
     $.fn.enter = function(enter,leave) {
          this.on('mouseenter mouseover', enter);
          this.on('mouseleave', leave);
     };
})();
*/
var $speed = 400;
$(document).ready(function() {
    $('body').velocity('fadeIn', { duration: 1500});
});
/*タグににデータ属性もたせて関数化しようと思ったけど、発火が遅れるっぽいからいちいちかく*/
$(function() {
$('.b0').hover(function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:'1',
            borderColorAlpha:'1',
            color:'#0f0f0f'
        },$speed,"easeinout"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#0f0f0f'
        },$speed,"easeinout"
    );
},function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:"0",
            borderColorAlpha:"0",
            color:'#FFFFFF'
        },$speed,"easeOutExpo"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#FFFFFF'
        },$speed,"easeinout"
    );

    });

});




$(function() {
$('.b1').hover(function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:'1',
            borderColorAlpha:'1',
            color:'#3b5998'
        },$speed,"easeinout"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#3b5998'
        },$speed,"easeinout"
    );
},function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:"0",
            borderColorAlpha:"0",
            color:'#FFFFFF'
        },$speed,"easeOutExpo"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#FFFFFF'
        },$speed,"easeinout"
    );

    });

});



$(function() {
$('.b2').hover(function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:'1',
            borderColorAlpha:'1',
            color:'#55acee'
        },$speed,"easeinout"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#55acee'
        },$speed,"easeinout"
    );
},function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:"0",
            borderColorAlpha:"0",
            color:'#FFFFFF'
        },$speed,"easeOutExpo"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#FFFFFF'
        },$speed,"easeinout"
    );

    });

});



$(function() {
$('.b3').hover(function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:'1',
            borderColorAlpha:'1',
            color:'#0077b5'
        },$speed,"easeinout"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#0077b5'
        },$speed,"easeinout"
    );
},function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:"0",
            borderColorAlpha:"0",
            color:'#FFFFFF'
        },$speed,"easeOutExpo"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#FFFFFF'
        },$speed,"easeinout"
    );

    });

});

$(function() {
$('.b4').hover(function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:'1',
            borderColorAlpha:'1',
            color:'#333333'
        },$speed,"easeinout"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#333333'
        },$speed,"easeinout"
    );
},function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:"0",
            borderColorAlpha:"0",
            color:'#FFFFFF'
        },$speed,"easeOutExpo"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#FFFFFF'
        },$speed,"easeinout"
    );

    });

});


$(function() {
$('.b5').hover(function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:'1',
            borderColorAlpha:'1',
            color:'#cd201f'
        },$speed,"easeinout"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#cd201f'
        },$speed,"easeinout"
    );
},function(){
    $(this).velocity("stop").velocity(
        {
            backgroundColorAlpha:"0",
            borderColorAlpha:"0",
            color:'#FFFFFF'
        },$speed,"easeOutExpo"
    );
    $(this).find('.fa').velocity("stop").velocity(
        {
            color:'#FFFFFF'
        },$speed,"easeinout"
    );

    });

});
particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 110,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 6,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
