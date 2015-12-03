var knopf = $("#dasKnopf");

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
        
    }
});

});
