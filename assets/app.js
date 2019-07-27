// **********SUDO**********
// **********VARIABLES**********
// empty array for ingredients 
var ingredients = $("#recipe-search").val();
// **********FUNCTIONS**********
function findRecipes() {

    var ingredient = $(this).attr('data-name');
    // **********API LINK AND KEY **********
    var queryURL = "https://www.food2fork.com/api/search?key=ec2a901446ff774ffa1f8beed26a127f&count=5&q=" + ingredients;
    // **********AJAX**********
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (resp) {
        // response comes back as string, that is why we have to JSON.parse the response
        var response = JSON.parse(resp)
        console.log(response);

        for (var i = 0; i < resp.length; i++) {
        
        recipeTitle = response.recipes[i].title;
            console.log(recipeTitle);
        recipeScore = response.recipes[i].social_rank;
            console.log(recipeScore);
        recipeImage = response.recipes[i].image_url;

        var displayRecipe = $("<div>");

        var displayTitle = $("<p>").text("Recipe: " + recipeTitle);

        var displayScore = $("<p>").text("Social Ranking: " + recipeScore);

        var displayImage = $("<img>");
        displayImage.attr("src", recipeImage);

        displayRecipe.append(displayTitle).append(displayScore).append(displayImage);

        $("#recipe-results").append(displayRecipe)
        }


    })
}
// **********ON CLICK**********
$("#submit").on("click", function (event) {
    event.preventDefault();

    findRecipes();
});





