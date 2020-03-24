$("document").ready(function(){

  //$("h1").css("text-align","center");
  //$("h1").css("padding",".5rem 0");
  //$("h1").css("background-color","#659dbd");
  //$("h2:first").css("margin-top","1.5rem");
  //$("h2:first").css("color","#565656");
  //$("h2").css("margin-left","3rem");

});

$("document").ready(function(){

  $(".banier-image").click(function(){
    $(this).find("img:last").fadeToggle(1500);
  })

});