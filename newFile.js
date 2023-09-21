$(document).ready(function () {
    $("#signup-form").validate9({
        rules: {
            fname: {
                required: true,
                minlength: 4
            }
        }
    });
});
