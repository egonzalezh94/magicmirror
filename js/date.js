function date(){
    var _now = moment();
    $("#date").text(_now.format("MMMM Do YYYY"));
    $("#time").text(_now.format("HH:mm:ss"));

};