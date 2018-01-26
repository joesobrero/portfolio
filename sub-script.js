$(document).ready(function(){

    // VARIABLES

    // views
    var view = 0;

    // photos
    var a = $('#0');
    var b = $('#1');
    var c = $('#2');
    var d = $('#3');
    var e = $('#4');
    var f = $('#5');
    var g = $('#6');
    var h = $('#7');

    // durations
    var fadeIn = 1000;
    var delay = 800;
    var fadeOut = 400;

    //functions
    function next() {
        switch(view) {
            case 0:
                a.fadeOut(fadeOut);
                b.delay(delay).fadeIn(fadeIn);
                view = 1;
                break;
            case 1:
                b.fadeOut(fadeOut);
                c.delay(delay).fadeIn(fadeIn);
                view = 2;
                break;
            case 2:
                c.fadeOut(fadeOut);
                d.delay(delay).fadeIn(fadeIn);
                view = 3;
                break;
            case 3:
                d.fadeOut(fadeOut);
                e.delay(delay).fadeIn(fadeIn);
                view = 4;
                break;
            case 4:
                e.fadeOut(fadeOut);
                f.delay(delay).fadeIn(fadeIn);
                view = 5;
                break;
            case 5:
                f.fadeOut(fadeOut);
                g.delay(delay).fadeIn(fadeIn);
                view = 6;
                break;
            case 6:
                g.fadeOut(fadeOut);
                h.delay(delay).fadeIn(fadeIn);
                view = 7;
                break;
            case 7:
                h.fadeOut(fadeOut);
                a.delay(delay).fadeIn(fadeIn);
                view = 0;
                break;
        }
    }

    function prev() {
        switch(view) {
            case 0:
                a.fadeOut(fadeOut);
                h.delay(delay).fadeIn(fadeIn);
                view = 7;
                break;
            case 1:
                b.fadeOut(fadeOut);
                a.delay(delay).fadeIn(fadeIn);
                view = 0;
                break;
            case 2:
                c.fadeOut(fadeOut);
                b.delay(delay).fadeIn(fadeIn);
                view = 1;
                break;
            case 3:
                d.fadeOut(fadeOut);
                c.delay(delay).fadeIn(fadeIn);
                view = 2;
                break;
            case 4:
                e.fadeOut(fadeOut);
                d.delay(delay).fadeIn(fadeIn);
                view = 3;
                break;
            case 5:
                f.fadeOut(fadeOut);
                e.delay(delay).fadeIn(fadeIn);
                view = 4;
                break;
            case 6:
                g.fadeOut(fadeOut);
                f.delay(delay).fadeIn(fadeIn);
                view = 5;
                break;
            case 7:
                h.fadeOut(fadeOut);
                g.delay(delay).fadeIn(fadeIn);
                view = 6;
                break;
        }
    }

    // EVENTS
    $('#next').click(function(){
        next();
    });
    $('#prev').click(function(){
        prev();
    });
});