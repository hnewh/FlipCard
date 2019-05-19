var index = 0;
var selectedCard = []; //선택카드
var selectedNum; //선택번호

$(document).ready(function(){
    //드래그 금지
    $(document).bind('selectstart', function() {return false;});

    var numArr = [];
    var cardNum = $('.card-front');
    var cardImage = $('.card-back');

    //랜덤 번호 부여
    while(1)
    {
        if(index == 16)
            break;
            
        var random = Math.floor(Math.random()*16) + 1;
        //중복 확인
        if(numArr.includes(random))
            continue;
        numArr[index] = random;

        //숫자 추가
        cardNum[index].innerHTML = numArr[index];
        //이미지 추가
        var image = "<img src='src/card" + numArr[index] + ".jpg'>";
        cardImage[index].innerHTML = image;

        index++;
    }

    //카드 클릭시
    $('.card').on("click", function(event){
        //2개 이상 선택 금지
        if(selectedCard.length > 1)
            throw new Error("두 개 이상 선택함");

        //중복금지
        $(this).css('pointer-events', 'none');

        //카드 뒷번호
        var back = $(this).children().children();
        var backNum = back.text();

        //카드 번호 보여주기
        showCardNum(back, $(this))

        //선택카드 배열 삽입
        if(!selectedCard.length)
            selectedCard[0] = $(this);
        else
            selectedCard[1] = $(this);

        if(selectedCard.length == 2)
            $(this).css('point-events', 'none');

        //선택번호 삽입
        if(!selectedNum)
            selectedNum = backNum;
        else
        {
            //번호 확인
            if(selectedNum%8 == backNum%8)
                hideCard();
            else
                returnCard();
        }
    });
});

//카드 숨기기
function hideCard()
{
    setTimeout(function(){
        for(var i = 0; i < 2; i++)
        {    
            selectedCard[i].css('visibility', 'hidden');
            index--;
        }
        resetSelected();
    }, 1500);

    if(index == 0)
    {
        console.log('??');
        endGame();
    }
}

//카드 다시 뒤집기
function returnCard()
{
    setTimeout(function(){
        for(var i = 0; i < 2; i++)
        {
            selectedCard[i].children().children().children().hide();
            selectedCard[i].css('pointer-events', 'all');
        }
        resetSelected();
    }, 1500);
}

//카드 숫자 보여주기
function showCardNum(back, card)
{
    card.css('transform', 'rotateY(0deg)');
    card.css('transition', 'transform 0.2s');
    back.children().show();
}

//selected 초기화
function resetSelected()
{
    var arr = [];
    selectedCard = arr;
    selectedNum = 0;
}

//게임이 끝났을때
function endGame()
{
    var answer = confirm('메뉴로 돌아갈까요? (취소 시 다시 게임 시작)');
    if(answer == true)
        window.location = './index.html';
    else
        window.location = './game.html';
}  