$(document).ready(function(){
    //범위 선택
    $('#range').on("click", function(){
        $('.range').slideDown();
        $('#help').hide();
    });

    //도움말
    $('#help').on("click", function(){
        $('.help').slideDown();
        $('#range').hide();
    });

    //뒤로가기
    $('.back').on("click", function(){
        $('.invisible').hide();
        $('section button').show();
    });

    $('.ed').on("click", function(){
        window.location = 'game.html';
    });

    //개발중
    $('.ing').on("click", function(){
        alert("개발 중입니다!");
    });
});