"use strict";


require('../index.html'); // load all images from index.html


require("reset-css/_reset.scss");
require("./styles/main.scss");


var $ = require('jquery');
require('jssorslider');
require('jquery-validation');


// --------------- hamburger --------------------------
    $(document).ready(function () {
        $('.logo__hamburger').click(function(){
            $('.nav').toggleClass('nav--hidden');
        });
    });
// --------------- end hamburger -----------------------



// --------------- hover PLANS --------------------------
    $(document).ready(function () {
        $('.plan__link').hover(function(){
            $('.plan__name', $(this)
                .closest('ul'))
                .toggleClass('plan__name--blue');
        });
    });
// --------------- end hover PLANS -----------------------




//----------------- Form validation ---------------------
    $(document).ready(function () {
        $('#contact-form').validate({
            rules: {
                field1: {
                    required: true,
                    minlength: 2
                },
                field2: {
                    required: true,
                    email: true
                },
                field3: {
                    required: true,
                    minlength: 2
                }
            }
        });
    });
//----------------- end Form validation ---------------------




// --------------------- CAROUSEL ----------------------
    $(function($){
        var jssor_1_SlideshowTransitions = [ {$Duration:1200,$Opacity:2} ];
        
        var jssor_1_options = {
          $AutoPlay: false,
          $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
          },
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 2
          }
        };
        

        var jssor_1_slider = new $JssorSlider$("slider1_container", jssor_1_options);
        
        
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1440);
                jssor_1_slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
    });
// --------------------- end CAROUSEL ----------------------
