var buttonColor=["orange","sandal","green","blue"];

var gamePattern=[];
var userPattern=[];

var started=false;
var level=0;

$(document).keydown(function(){
    if (!started){
        nextSequence();
        $("h2").text("Level 0");
        started=true;
    }
});

$(".box").click(function() {
    var userColour = $(this).attr("id");
    userPattern.push(userColour);  
    checkAnswer(userPattern.length-1);
  });

function nextSequence(){
    level++;
    $("h2").text("Level "+level.toString());
    userPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomColor=buttonColor[randomNumber];
    gamePattern.push(randomColor);
    $("."+randomColor).fadeOut(100);
    var audio=new Audio("./sounds/"+randomColor+".mp3");
    audio.play();
    $("."+randomColor).fadeIn(100);    
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userPattern[currentLevel]){        
        if (userPattern.length===gamePattern.length){
            $("h2").text("Purrfect!!");
            setTimeout(function(){
                var audio=new Audio ("./sounds/victory.mp3");
                audio.play();
            },500);
            
            setTimeout(function(){
                nextSequence();
            },2500);
        }
    }
    else{
        $("body").addClass("lost");
        $("h1").text("Cat-astrophe!!");
        $("h2").text("press any key to restart");
        $("img").attr("src","./images/catfail.png");
        var audio=new Audio ("./sounds/fail.mp3");
        audio.play();
        $(document).keydown(startOver);
    }
}

$(".orange").click(function(){
    $(".orange").fadeOut(100);
    var audio=new Audio("./sounds/orange.mp3");
    audio.play();
    $(".orange").fadeIn(100);
});

$(".sandal").click(function(){
    $(".sandal").fadeOut(100);
    var audio=new Audio("./sounds/sandal.mp3");
    audio.play();
    $(".sandal").fadeIn(100);
});

$(".green").click(function(){
    $(".green").fadeOut(100);
    var audio=new Audio("./sounds/green.mp3");
    audio.play();
    $(".green").fadeIn(100);
});

$(".blue").click(function(){
    $(".blue").fadeOut(100);
    var audio=new Audio("./sounds/blue.mp3");
    audio.play();
    $(".blue").fadeIn(100);
});

function startOver(){
    $("body").removeClass("lost");
    $(".orangeImg").attr("src","./images/cat1.png");
    $(".sandalImg").attr("src","./images/cat2.png");
    $(".greenImg").attr("src","./images/cat3.png");
    $(".blueImg").attr("src","./images/cat4.png");
    level=0;
    gamePattern=[];
    started=false;
    $("h1").text("pawtton push");
    $("h2").text("Hello!")
    setTimeout(nextSequence(),2000);
}