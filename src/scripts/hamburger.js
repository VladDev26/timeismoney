import jQuery from 'jquery';


jQuery(document).ready(function() {
    jQuery('.logo__hamburger').click(function(){
        jQuery('.nav').toggleClass('nav--hidden');
    });

    jQuery('.nav__link').click(function(){
    	jQuery('.nav__link').removeClass('active');
    	jQuery(this).addClass('active');
    });
});
