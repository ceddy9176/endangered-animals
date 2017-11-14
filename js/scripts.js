$(document).ready(function(){
  $(".polaroid").click(function(){
    $(".hidden").show();
  });
  $(!".polaroid").click(function() {
    $("info").hide();
  });
});
