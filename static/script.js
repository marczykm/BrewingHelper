$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '/audio/alarm.mp3');
    // audioElement.setAttribute('autoplay', 'false');

    $.get();

    audioElement.addEventListener("load", function() {
        // audioElement.play();
    }, true);

    setInterval(function(){
        $.get("/api/temperature", function(data){
            $("#current-temperature").text(data.currentTemperature + String.fromCharCode(176) + "C");
            var desirableTemperature = $('#desirableTemperature').val();
            console.log(desirableTemperature);

            if (desirableTemperature != '' && data.currentTemperature > desirableTemperature) {
                audioElement.play();
                console.log('plaing sound');
            }
        })
    }, 3000);
});
