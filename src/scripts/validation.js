import jQuery from 'jquery';
import 'jquery-validation';

jQuery(document).ready(function() {
    jQuery('#contact-form').validate({
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
