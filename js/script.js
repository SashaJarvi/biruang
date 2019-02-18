$(document).ready(function() {
    $('.my_slider').unslider({
        autoplay:true,
        arrows: false
    });

    function setEqualHeight(columns) {
        let tallestcolumn = 0;
        columns.each( function() {
           let currentHeight = $(this).height();
           if(currentHeight > tallestcolumn) {
               tallestcolumn = currentHeight;
           }
        });
        columns.height(tallestcolumn);
    }
    setEqualHeight($(".block4_main-content"));
});