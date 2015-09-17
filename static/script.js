$(document).ready(function(){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '/audio/alarm.mp3');

    $.get();

    setInterval(function(){
        $.get("/api/temperature", function(data){
            $("#current-temperature").text(data.currentTemperature + String.fromCharCode(176) + "C");
            var desirableTemperature = $('#desirableTemperature').val();
            var tolerance = $('#tolerance').val();
            if (tolerance == ''){
                tolerance = 0;
            }

            if (desirableTemperature != ''){
                if (data.currentTemperature > parseFloat(desirableTemperature)+parseFloat(tolerance) || 
                    data.currentTemperature < parseFloat(desirableTemperature)-parseFloat(tolerance)){
                    audioElement.play();
                    console.log('playing sound');
                    $("#current-temperature").addClass("label-danger").removeClass("label-success");
                } else {
                    $("#current-temperature").addClass("label-success").removeClass("label-danger");
                }
            }
        }).fail(function(){
            $("#current-temperature").removeClass("label-danger").removeClass("label-success").addClass("label-default").text("Unknown");
            audioElement.play();
        })
    }, 3000);
});
