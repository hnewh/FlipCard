var pics = new Array();
for (i = 0; i <= 18; i++) 
{
    pics[i] = new Image();
    pics[i].src = 'image' + i + '.gif';
}
var map=new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18);
var user = new Array();
var temparray = new Array();
var clickarray = new Array(0, 0);
var ticker, sec, min, ctr, id, oktoclick, finished;

function init() 
{  //초기화함수
    clearTimeout(id);
    for (i = 0; i <= 35 ;i++)
    { 
        user[i] = 0;
        document.f[('img'+i)].src = "./image0.gif";
    }

    ticker = 0;
    min = 0;
    sec = 0;
    ctr = 0;
    oktoclick = true;
    finished = 0;
    document.f.b.value = "";

    scramble();
    runclk();
}


function runclk() 
{  //타이머
    min = Math.floor(ticker/60);
    sec = (ticker-(min*60))+'';

    if(sec.length == 1) 
        sec = "0"+sec;
    ticker++;

    document.f.b.value = min+":"+sec;
    id = setTimeout('runclk()', 1000);
}

function scramble() 
{ //맵정하기
    for (z = 0; z < 5; z++) 
    {
        for (x = 0; x <= 35; x++) 
        {
            temparray[0] = Math.floor(Math.random()*36);
            temparray[1] = map[temparray[0]];
            temparray[2] = map[x];
            map[x] = temparray[1];
            map[temparray[0]] = temparray[2];
        }
    }
}

function showimage(but) 
{ //클릭시 이미지 출력
    if (oktoclick) 
    {
        oktoclick = false; 
        document.f[('img'+but)].src = './image'+map[but]+'.gif';

        if (ctr == 0) 
        {
            ctr++;
            clickarray[0] = but;
            oktoclick = true;
        }
        else 
        {
            clickarray[1] = but;
            ctr = 0;
            setTimeout('returntoold()', 600);
        }
    }
}

function returntoold() 
{ 
    if ((clickarray[0] == clickarray[1]) && (!user[clickarray[0]])) 
    {
        document.f[('img'+clickarray[0])].src = "./image0.gif";
        oktoclick = true;
    }
    else
    {
        if (map[clickarray[0]] != map[clickarray[1]]) 
        {
            if (user[clickarray[0]] == 0)
                document.f[('img'+clickarray[0])].src = "./image0.gif";
            if (user[clickarray[1]] == 0)
                document.f[('img'+clickarray[1])].src = "./image0.gif";
        }

        if (map[clickarray[0]] == map[clickarray[1]]) 
        {
            if (user[clickarray[0]] == 0&&user[clickarray[1]] == 0) 
                finished++;
            user[clickarray[0]] = 1;
            user[clickarray[1]] = 1;
        }

        if (finished >= 18) 
        {  
            alert('같은 그림 찾기 성공 ==> 걸린 시간 '+document.f.b.value+' !');
            init();
        } 
        else
            oktoclick = true;
    }
}