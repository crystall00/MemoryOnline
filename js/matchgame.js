$(function () {
    matchingGame.deck.sort(shuffle);
    for (let i = 0; i < 11; i++) {
        $(".card:first-child").clone().appendTo("#cards");
    }
    $("#cards").children().each(function (index) {
        let x = ($(this).width() + 20) * (index % 4);
        let y = ($(this).height() + 20) * Math.floor(index / 4);
        $(this).css("transform", "translateX(" + x + "px) translateY(" + y + "px)");
        let pattern = matchingGame.deck.pop();
        $(this).find(".back").addClass(pattern);
        $(this).attr("data-pattern", pattern);
        $(this).click(selectCard);
    });
});

var matchingGame = {};
matchingGame.deck = [
    'cardAK', 'cardAK',
    'cardAQ', 'cardAQ',
    'cardAJ', 'cardAJ',
    'cardBK', 'cardBK',
    'cardBQ', 'cardBQ',
    'cardBJ', 'cardBJ',
];

function shuffle(){
    return 0.5 - Math.random();
}

function selectCard() {
    if($(".card-flipped").length > 1){
        return;
    }
    $(this).addClass("card-flipped");
    if($(".card-flipped").length === 2){
        setTimeout (checkPattern, 700);
    }
}

function checkPattern(){
    if(isMatchPattern()){
        $(".card-flipped").removeClass("card-flipped").addClass("card-removed");
        $(".card-removed").bind("transitioned", removeTookCards);
    }else{
        $(".card-flipped").removeClass("card-flipped");
    }
}

function isMatchPattern(){
    let cards = $(".card-flipped");
    let pattern = $(cards[0]).data("pattern");
    let anotherPattern = $(cards[1]).data("pattern");
    return (pattern === anotherPattern);
}

function removeTookCards(){
    $(".card-removed").remove();
}