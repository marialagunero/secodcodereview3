$(document).ready(function(){
  $("form#language").submit(function(event){
    var colorChoice = parseInt($("#colorChoice").val());
    var foodChoice = parseInt($("#foodChoice").val());
    var drinkChoice =parseInt($("#drinkChoice").val());
    var sportChoice = parseInt($("#sportChoice").val());
    var bookChoice = parseInt($("bookChoice").val());
    var result = (colorChoice + foodChoice + drinkChoice + sportChoice + bookChoice)

    if (result <= 1) {
      $("#ruby").show();
      $("#csharp, js#").hide();
    } else 

    return (result)




  });





});