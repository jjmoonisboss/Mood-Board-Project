$('button').click(function(){
    var input = $('#emote').val();
    if(input === "happy"){
        happyFace();
    } else if(input==="sad"){
    
        sadFace();
    }else if(input==="angry" || input==="mad"){
      angryFace();
    }else{
     alert("Please enter sad,happy or angry!");   
    }
});

function changeBackground(color){
    $('body').css("background-color", color);
}

function happyFace(){
   changeBackground("yellow");
    $(".sad").hide();
    $(".angry").hide();
    $(".happy").show();
    
}

function sadFace(){
    changeBackground("blue");
    $(".angry").hide();
    $(".happy").hide();
    $(".sad").show();
    
}

function angryFace(){
    changeBackground("red");
    $(".sad").hide();
    $(".happy").hide();
    $(".angry").show();
    
}