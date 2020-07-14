$(function () {
  $("#create-form").on(submit, function (event) {
    //    need to prevent default in form
    event.preventDefault();
    var createdBurger = {
      burger_name: $("newBurger").val().trim(),
      devoured: 0,
    };
    $.ajax("api/burgers", {
        type:"POST",
        data: createdBurger
    }).then(function(){
        console.log("Successfully added burger@")
        location.reload()
    })

  });
});
