// **********SUDO**********
// **********FUNCTION**********
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

            var displayRecipe = $("<div class='card text-danger bg-light'>");



            var body = $("<div class='card-body'>");
            body.append(displayRecipe);



            var displayTitle = $("<h5 class='card-title'>").text(recipeTitle);

            var displayScore = $("<p>").text("Score: " + score);

            var displayImage = $("<img>");
            displayImage.attr("src", recipeImage);

            var recipeSource = $("<a>");
            recipeSource.attr("href", recipeLink).html("Click here for recipe link!").attr("target", "_blank");



            displayRecipe.append(displayImage).append(displayTitle).append(displayScore).append(recipeSource);

            $("#recipe-results").append(displayRecipe)
        }


    })
}
// **********ON CLICK**********
$(".submit").on("click", function (event) {
    event.preventDefault();
    $("#recipe-results").empty();
    findRecipes();
});









