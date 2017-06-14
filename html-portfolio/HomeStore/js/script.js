$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 3000,
      stopOnHover : true, 
  });

  $("#mobile-menu-icon").on("click", function(){
    $(".nav-mobile").css("display", "block");
    $(".nav-mobile").css("visibility", "visible");
    $(".nav-mobile").css("opacity", "1");
  })
 
});