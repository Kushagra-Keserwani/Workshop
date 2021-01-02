

    
    var buttonColors = ['red', 'blue', 'green', 'yellow'];
    var pattern = [];
   var userClickedPattern=[];
    var started = true;
    var level =0;
    var l = 0;
    
    document.addEventListener('keypress', function(e){
        if(started){
        started=false;
        nextSequence();
        }
       });
    
    

    

    
    

    $('div [type="button"]').on('click', function(){
        
      //  var userChosenColor = $(this).attr('class').substring(4);
        var userChosenColor = $(this).attr('id');
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        // console.log(userClickedPattern);
        animatePress(userChosenColor);
        
        checkAnswer(l);
});

function checkAnswer(currentLevel){
    if(pattern[currentLevel]==userClickedPattern[currentLevel]){
        // console.log("success");
        l=l+1;
        if(l==pattern.length){
      setTimeout(nextSequence(), 1000);
     l=0;
     userClickedPattern=[];
        }
    }else{
        $("body").addClass('game-over');
        setTimeout(function(){
            $("body").removeClass('game-over');
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart.");
    startOver();

}
}

function startOver(){
    l=0;
    level=0;
    pattern=[];
    started=true;
}


function playSound(color){
    new Audio("sounds/"+color+".mp3").play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass('pressed');
    setTimeout(function(){
        $("#"+currentColor).removeClass('pressed');
    },100);
}
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var color = buttonColors[randomNumber];
    pattern.push(color);
    // console.log(pattern);
    $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(color);
   level = level+1;
   $("#level-title").text("Level "+level);

}

