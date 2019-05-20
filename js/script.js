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

    //게임 화면으로 이동
    $('.r1').on("click", function(){
        window.location = 'game1.html';
    });
    $('.r2').on("click", function(){
        window.location = 'game2.html';
    });

    //개발중
    $('.ing').on("click", function(){
        alert("더 많은 공부 후에 추가하겠습니다 ╰(*´︶`*)╯♡");
    });
});