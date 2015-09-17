$(document).ready(function(){

    setInterval(function(){
        $.get("/api/temperature", function(data){
            $("#current-temperature").text(data.currentTemperature + String.fromCharCode(176) + "C");
        })
    }, 3000);
});
