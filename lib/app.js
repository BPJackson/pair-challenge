var fuckPic = $("#fuckPic");
var keepPic = $("#keepPic");
var killPic = $("#killPic");
var fuckText = $("#fuckText");
var keepText = $("#keepText");
var killText = $("#killText");
var knopf = $("#testKnopf");
var showMe = $("#voila");
//Keep the streak alive 1
knopf.click(function() {
var fuckMe = $.ajax( {
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(data) {
        var firstNameFuck = data.results[0].user.name.first;
        var lastNameFuck = data.results[0].user.name.last;
        var cityFuck = data.results[0].user.location.city;
        var stateFuck = data.results[0].user.location.state;
        var pictureFuck = data.results[0].user.picture.thumbnail;
        showMe.css("display", "block");
        fuckPic.attr("src", pictureFuck);
        fuckText.html(firstNameFuck.toUpperCase() + " " + lastNameFuck.toUpperCase() + " is a devout fundamentalist Christian who has pledged to be celibate until marriage. " + firstNameFuck.toUpperCase() + " has been madly in love with a dear friend since the mid-nineties when they attended school in " + cityFuck.toUpperCase() + ", " + stateFuck.toUpperCase() + ". Unless " + firstNameFuck.toUpperCase() + " " + lastNameFuck.toUpperCase() + " has transformed into a wanton animal through your ministrations within 36 hours you will go blind and never be able to masturbate again.");
    }
});
var killMe = $.ajax( {
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(data) {
        var firstNameKill = data.results[0].user.name.first;
        var lastNameKill = data.results[0].user.name.last;
        var cityKill = data.results[0].user.location.city;
        var stateKill = data.results[0].user.location.state;
        var pictureKill = data.results[0].user.picture.thumbnail;
        killPic.attr("src", pictureKill);
        killText.html(firstNameKill.toUpperCase() + " " + lastNameKill.toUpperCase() + " is a kind, sweet person who spends available freetime volunteering at the local homeless shelter. " + firstNameKill.toUpperCase() + " has had a long a fulfilling career teaching underpriviledged children in a tough, inner-city school in " + cityKill.toUpperCase() + ", " + stateKill.toUpperCase() + ". Unless " + firstNameKill.toUpperCase() + " " + lastNameKill.toUpperCase() + " is dead within 36 hours, your family will starve.");
    }
});

var keepMe = $.ajax( {
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function(data) {
        var firstNameKeep = data.results[0].user.name.first;
        var lastNameKeep = data.results[0].user.name.last;
        var cityKeep = data.results[0].user.location.city;
        var stateKeep = data.results[0].user.location.state;
        var pictureKeep = data.results[0].user.picture.thumbnail;
        keepPic.attr("src", pictureKeep);
        keepText.html(firstNameKeep.toUpperCase() + " " + lastNameKeep.toUpperCase() + " is a pathological liar who has never manage to hold down a job or keep a relationship for longer than six months. " + firstNameKeep.toUpperCase() + " has been last seen near" + cityKeep.toUpperCase() + " in the state of " + stateKeep.toUpperCase() + ". Unless " + firstNameKeep.toUpperCase() + " " + lastNameKeep.toUpperCase() + " is your legal spouse within 36 hours, you will never work in development.");

    }
});

});
