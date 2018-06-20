$(document).ready(function() {

    $(".textarea").keyup(function() {
        const counter = $(this).closest(".new-tweet").find(".counter"); 
        const charLength = $(this).val().length;
        const totalChar = 140 - charLength;

        counter.text(totalChar);

        if (totalChar < 0) {
            counter.addClass("negative");
        } else {
            counter.removeClass("negative");
        }
    })
})
