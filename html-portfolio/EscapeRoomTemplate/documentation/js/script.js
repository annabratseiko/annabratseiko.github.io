 $(document).ready(function html(s) {

    $('pre').each(function(){
       var newPre = $(this).html().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
       $(this).html(newPre);
    })
    
  });

 