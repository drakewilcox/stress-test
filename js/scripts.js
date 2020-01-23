$(document).ready(function()  {
  $("form#stress-test").submit(function(event){
    event.preventDefault();


    $("input:checkbox[name=warning]:checked").each(function(){
      var warningSigns = $(this).val();
      
    });
  
  // var newArray = [$("input:checkbox[name=warning]:checked").val()];
  //  alert(newArray);
  });
});