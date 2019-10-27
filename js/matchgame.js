$(function(){
    for(let i=0; i<11; i++){
        $(".card:first-child").clone().appendTo("#cards");
    }
    $("#cards").children().each(function(index){
        let x = ($(this).width() + 20) * (index % 4);
        let y = ($(this).height() + 20) * Math.floor(index / 4);
        $(this).css("transform", "translateX(" + x + "px) translateY(" + y + "px)");
    });
});