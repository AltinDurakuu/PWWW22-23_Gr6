window.addEventListener("load", function(){
    var date = new Date();

    var time = date.getHours();
    var elem = document.querySelector(".DnD-container");

    if(6 <= time && time < 10){ 
        elem.style.background = "aliceblue";
    }
    else if(10 <= time && time < 16){
        elem.style.background = "#404040";
    }
    else if(16 <= time && time < 20){
        elem.style.background = "#D2A298";
    }
    else if(20 <= time && time < 24){
        elem.style.background = "#A8B9D4";
    }
    else if(0 <= time && time < 6){
        elem.style.background = "#D7D3F1";
    }
});
