function date(){
    var _now = moment();
    $("#date").text(_now.format("dddd, MMMM Do"));
    $("#time").text(_now.format("HH:mm"));

};
