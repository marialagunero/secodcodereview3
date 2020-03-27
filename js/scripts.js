$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var colorChoice = parseInt($("#colorChoice").val());
    var foodChoice = parseInt($("#foodChoice").val());
    var drinkChoice =parseInt($("#drinkChoice").val());
    var sportChoice = parseInt($("#sportChoice").val());
    var bookChoice = parseInt($("bookChoice").val());
    var result = (colorChoice + foodChoice + drinkChoice + sportChoice + bookChoice)
    console.log();
    if (result <= 5) {
      $("#ruby").show();
      $("#csharp,#js").hide();

    } else if (result <= 15) {  
      $("#csharp)").show();
      $("ruby,#js").hide();

    } else if (result <= 25) {
      $("#js").show();
      $("#ruby, #csharp").hide();


    return (result)




  );





});