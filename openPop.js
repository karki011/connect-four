$( document ).ready(function() {
  $('.modalDialog').fadeIn();
   
   $('.close').on('click', function(event) {
     event.preventDefault();
     /* Act on the event */
       
       $('.modalDialog').fadeOut();
       
   });
});
