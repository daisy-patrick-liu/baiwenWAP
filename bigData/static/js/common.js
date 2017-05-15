$(function(){
   var documentH=(document.documentElement.scrollHeight > document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight,windowH=$(window).height();
    if(documentH<=windowH){
        $("body").css("height",windowH+"px");
        $("footer").css("bottom","0px");
    }else{
        $("footer").css("bottom","-2px");
    }
    $(window).resize(function(){
        documentH=(document.documentElement.scrollHeight > document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight;
        windowH=$(window).height();
        if(documentH<=windowH){
            $("body").css("height",windowH+"px");
            $("footer").css("bottom","0px");
        }else{
            $("footer").css("bottom","-2px");
        }
    });
});
