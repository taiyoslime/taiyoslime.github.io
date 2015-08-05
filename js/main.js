


var $speed = 400;

/*
(function() {
     $.fn.enter = function(enter,leave) {
          this.on('mouseenter mouseover', enter);
          this.on('mouseleave', leave);
     };
})();



*/

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
















/*


	//toggle 3d navigation
	$('.cd-3d-nav-trigger').on('click', function(){
		toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
	});

	//select a new item from the 3d navigation
	$('.cd-3d-nav').on('click', 'a', function(){
		var selected = $(this);
		selected.parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
		updateSelectedNav('close');
	});

	$(window).on('resize', function(){
		window.requestAnimationFrame(updateSelectedNav);
	});

	function toggle3dBlock(addOrRemove) {
		if(typeof(addOrRemove)==='undefined') addOrRemove = true;
		$('.cd-header').toggleClass('nav-is-visible', addOrRemove);
		$('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
		$('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//fix marker position when opening the menu (after a window resize)
			addOrRemove && updateSelectedNav();
		});
	}

	//this function update the .cd-marker position
	function updateSelectedNav(type) {
		var selectedItem = $('.cd-selected'),
			selectedItemPosition = selectedItem.index() + 1,
			leftPosition = selectedItem.offset().left,
			backgroundColor = selectedItem.data('color'),
			marker = $('.cd-marker');

		marker.removeClassPrefix('color').addClass('color-'+ selectedItemPosition).css({
			'left': leftPosition,
		});
		if( type == 'close') {
			marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				toggle3dBlock(false);
			});
		}
	}

	$.fn.removeClassPrefix = function(prefix) {
	    this.each(function(i, el) {
	        var classes = el.className.split(" ").filter(function(c) {
	            return c.lastIndexOf(prefix, 0) !== 0;
	        });
	        el.className = $.trim(classes.join(" "));
	    });
	    return this;
	};



	*/



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
