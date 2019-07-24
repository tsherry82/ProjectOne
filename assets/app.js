// **********SUDO**********
// **********VARIABLES**********
// empty array for ingredients 
var ingredients = [];
// **********FUNCTIONS**********
function findRecipes() {

    var ingredient = $(this).attr('data-name');
    // **********API LINK AND KEY **********
    var queryURL = "https://www.food2fork.com/api/search?key=ec2a901446ff774ffa1f8beed26a127f&q=" + ingredients;
// **********AJAX**********
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (resp) {
        console.log(resp)
    })
}
// **********ON CLICK**********
$("#submit").on("click", function () {
    findRecipes();
});