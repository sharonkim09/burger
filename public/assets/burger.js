$(function () {
    //on add a burger, we are giving that value of not devoured for it to display in not devoured section 
  $(".create-form").on("submit", function (event) {
    //    need to prevent default in form
    event.preventDefault();
    var createdBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };
    // by using post method, can create a new burger
    $.ajax("api/burgers", {
        type:"POST",
        data: createdBurger
    }).then(function(){
        console.log("Successfully added burger@")
        location.reload()
    })

  });
//Once user clicks "DEVOUR IT", the burger will be changed to devoured true
  $("#devourButton").on("click", function(event) {
    //need to prevent default in form
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
// by using put method, burger is updated 
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });
});
