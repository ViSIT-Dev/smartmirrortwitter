$(document).ready(function () {
    setInterval(updateFeed, 10000);
    updateFeed();
});

//Tweet limit ist in getFeed.php definiert
//var showTweets = 10;
function updateFeed() {
    $.ajax({
        dataType: "json",
        url: '../modules/smartmirrortwitter/assets/getFeed.php'
    }).done(function(data) {
        $("#tweets li").remove();
        $.each(data["statuses"], function(k, e){
            $('#tweets').append('<li>' + e["text"] + '</li>');
            
//            console.log(e["text"]);
//            var dateOfRow = new Date(k);
//            if(dateOfRow.getDay() >= now.getDay() && currentCount > 0){
//                $.each(e, function(k1, e1){
//                    $("#day-" + dateOfRow.getDay()).show();
//                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .description").text(e1["description"])
//                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .allergens").text(e1["description"])
//                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .price").text(e1["price"])
//                });
//                currentCount--;
//            }
        });
        
    });
        
}
