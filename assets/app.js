// **********SUDO**********
// **********VARIABLES**********
// empty array for ingredients 

// **********FUNCTIONS**********
function findRecipes() {
    console.log("test")
    var ingredients = $("#recipe-search").val();

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

        for (var i = 0; i < response.recipes.length; i++) {

            recipeTitle = response.recipes[i].title;
            console.log(recipeTitle);
            recipeScore = response.recipes[i].social_rank;
            var score = Math.round(recipeScore);
            console.log(recipeScore);
            recipeImage = response.recipes[i].image_url;
            var recipeLink = response.recipes[i].f2f_url;
            console.log(recipeLink);

            var displayRecipe = $("<div>");

            var displayTitle = $("<p>").text("Recipe: " + recipeTitle);

            var displayScore = $("<p>").text("Social Ranking: " + score);

            var displayImage = $("<img>");
            displayImage.attr("src", recipeImage);

            var recipeSource = $("<a>");
            recipeSource.attr("href", recipeLink).html("Click here for recipe link!");

            var card = $("<div class='card'>");
            
            card.append(displayTitle);
            card.append(displayScore);
            card.append(displayImage);
            card.append(recipeSource);

            displayRecipe.append(displayTitle).append(displayScore).append(displayImage).append(recipeSource);

            $("#recipe-results").append(displayRecipe)
        }


    })
}
// **********ON CLICK**********
$(".submit").on("click", function (event) {
    event.preventDefault();
    console.log("on click");
    findRecipes();
});





