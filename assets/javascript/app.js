var topics = [
    "It's a wonderful life",
    "Casablanca",
    "Citizen Kane",
    "I love Lucy",
    "Gone with the Wind",
    "Miracle on 34th St",
    "All about Eve",
    "A Philadelphia Story"
];

function createButton(text) {
    $("#buttonsList").append(
        "<button type='button' class='btn btn-primary buttonList'>" +
        text +
        "</button>"
    );
}

//function that shows the keywords from array in the buttons

function wordToButton() {
    for (i = 0; i < topics.length; i++) {
        createButton(topics[i]);
    }
}

//function that moves the gif from the opposite state that it is in (still to animated and vice versa)
function gifSwitch() {
    $(".giphyBox").on("click", '.giffy', function () {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
}
//function to generate the gifs when the keywordButton is clicked
function generateGif(text) {
    $(".giphyBox").empty();
    var buttonKeyword = $(this).text();
    var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        text +
        "&api_key=kK2dFOB77wwnUfetNfWD5qKQUHx8UBp7&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(buttonKeyword);
        for (i = 0; i < 10; i++) {
            var srcOfGif = response.data[i].images.fixed_height_still.url;
            var altSrcGif = response.data[i].images.fixed_height.url;
            var gifRating = response.data[i].rating;
            $(".giphyBox").append(
                "<div class='col-md-6'><img class='giffy' src=" +
                srcOfGif +
                " data-still=" +
                altSrcGif +
                "><p class='rating'>Rating: " +
                gifRating +
                "</p></div"
            );
        }
    });
}

function NewButton() {
    $(".addButton").click(function () {
        event.preventDefault();
        var newMovie = $("input")
            .val()
            .trim();
        if (newMovie === "") {
            return;
        }
        topics.push(newMovie);
        $("#buttonsList").empty();
        wordToButton();
        generateGif();
        $("form")[0].reset();
    });
}

function initGetGifsListener() {
    $("#buttonsList").on("click", ".buttonList", function () {
        generateGif($(this).text());
    });
}

$(document).ready(function () {
    console.log("Old Movies");
    wordToButton();
    // generateGif();

    // Get the first button
    // simulate a click
    //$('.buttonList:first-child').click()
    // console.log($('.buttonList:first-child'))
    // debugger
    gifSwitch();
    NewButton();

    initGetGifsListener();
});



// var topics = [
//     "It's a wonderful life",
//     "Casablanca",
//     "Citizen Kane",
//     "I love Lucy",
//     "Gone with the Wind",
//     "Miracle on 34th St",
//     "All about Eve",
//     "A Philadelphia Story"
// ];

// function createButton(text) {
//     $("#buttonsList").append(
//         "<button type='button' class='btn btn-primary buttonList'>" +
//         text +
//         "</button>"
//     );
// }
// //function that shows the keywords from array in the buttons
// function wordToButton() {
//     for (i = 0; i < topics.length; i++) {
//         createButton(topics[i]);
//     }
// }
// //function that moves the gif from the opposite state that it is in (still to animated and vice versa)

// function gifSwitch() {
//     $(".giphyBox").on("click", '.giffy', function () {

//         var state = $(this).attr("data-state");

//         if (state === "still") {
//             $(this).attr("src", $(this).attr("data-animate"));
//             $(this).attr("data-state", "animate");
//         } else {
//             $(this).attr("src", $(this).attr("data-still"));
//             $(this).attr("data-state", "still");
//         }
//     });
// }
// // function gifSwitch() {
// //     $(".gif").on("click", function () {
// //         var state = $(this).attr("data-state");
// //         if (state === "still") {
// //             $(this).attr("src", $(this.attr("data-animate")));
// //             $(this).attr("data-state", "animate");
// //         } else {
// //             $(this).attr("src", $(this).attr("data-still"));
// //             $(this).attr("data-state", "still");
// //         }
// //     });

// //function to generate the gifs when the keywordButton is clicked
// function generateGif(text) {
//     $(".giphyBox").empty();
//     var buttonKeyword = $(this).text();
//     var queryURL =
//         "https://api.giphy.com/v1/gifs/search?q=" +
//         text +
//         "&api_key=kK2dFOB77wwnUfetNfWD5qKQUHx8UBp7&limit=10";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function (response) {
//         console.log(buttonKeyword);
//         for (i = 0; i < 10; i++) {
//             var srcOfGif = response.data[i].images.fixed_height_still.url;
//             var altSrcGif = response.data[i].images.fixed_height.url;
//             var gifRating = response.data[i].rating;
//             $(".giphyBox").append(
//                 "<div class='col-md-6'><img class='giffy' src=" +
//                 srcOfGif +
//                 " data-still" +
//                 altSrcGif +
//                 "><p class='rating'>Rating: " +
//                 gifRating +
//                 "</p></div"
//             );
//         }
//     });
// }

// function NewButton() {
//     $(".addButton").click(function () {
//         event.preventDefault();
//         var newMovie = $("input")
//             .val()
//             .trim();
//         if (newMovie === "") {
//             return;
//         }
//         topics.push(newMovie);
//         $("#buttonsList").empty();
//         wordToButton();
//         generateGif();
//         $("form")[0].reset();
//     });
// }

// function initGetGifsListener() {
//     $('#buttonsList').on('click', '.buttonList', function () {
//         generateGif($(this).text());
//     });
// }
// $(document).ready(function () {
//     console.log("Old Movies");
//     wordToButton();
//     // generateGif();
//     gifSwitch();
//     NewButton();
//     initGetGifsListener();
// });