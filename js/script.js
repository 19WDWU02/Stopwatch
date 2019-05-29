$(document).ready(function(){

    // setInterval()
    // setTimeout()

    // setTimeout(function(){
    //     console.log('this has happened after 5 seconds');
    // }, 5000);
    // console.log("this should happen first");
    //
    // setTimeout(function(){
    //     console.log('this has happened after 11 seconds');
    // }, 6000);

    // var int = setInterval(function(){
    //     console.log('this is happening every 2 seconds');
    // }, 2000)
    //
    // setTimeout(function(){
    //     clearTimeout(int);
    //     console.log('timeout has been cleared');
    // }, 10000)

    var timer;
    var seconds = 0;
    var minutes = 0;

    $('#start').click(function(){
        $(this).hide();
        $('#pause').removeClass('d-none').show();
        setTimerInterval();
    });

    $('#pause').click(function(){
        $(this).hide();
        $('#continue').removeClass('d-none').show();
        $('#reset').removeClass('d-none').show();
        clearInterval(timer);
    });

    $('#continue').click(function(){
        $(this).hide();
        $('#reset').hide();
        $('#pause').show();
        setTimerInterval();
    });

    $('#reset').click(function(){
        $(this).hide();
        $('#start').show();
        $('#continue').hide();
        $('#minutes').text('0');
        $('#seconds').text('00');
        seconds = 0;
        minutes = 0;
    })

    function setTimerInterval(){
        timer = setInterval(function(){
            // console.log('this is happening every second');
            seconds++;
            if(seconds == 60){
                minutes++;
                seconds = 0;
                $('#minutes').text(minutes);
            }
            if(seconds < 10){
                $('#seconds').text('0'+seconds);
            } else {
                $('#seconds').text(seconds);
            }

        }, 1000);
    }

});
