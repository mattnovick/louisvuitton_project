$(document).ready( function() {
  $('.square').stop().mousemove(function(e) {
    $('.mainbag').offset({
      left: e.pageX,
      top: e.pageY + 20   
    });
  });

  $('.bar').mouseover( function() {  
    $(this).stop().animate( {width: "80%"} )   
  });   

  $('.bar').mouseout( function() {
  	$(this).stop().animate( {width: "30%"} )
  });
  

  $('#shoes img').mouseover( function() {
    $(this).css( {opacity: "1"}) 
  });     

  $('#shoes img').mouseout( function() {
    $(this).css( {opacity: "0.8"})
  });
  
});