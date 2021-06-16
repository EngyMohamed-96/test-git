// $(document).ready(function(){
//    $(document).mousemove(function(event)
//    {
//       $("span").text("X : " + event.pageX + ", Y : "+ event.pageY );
//    });
//   });



  $(document).mousemove(function(event) {
    $(".circle").css({
        left: event.pageX,
        top: event.pageY
    });
})