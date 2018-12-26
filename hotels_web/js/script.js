$(document).ready(function () {
    $("#srch").on("click", function (event) {
        $(".main_search_other").slideDown(1200);
        
    });
    $(".close").on("click", function (event) {
        $(".main_search_other").slideUp(1200);
        
    });
});
