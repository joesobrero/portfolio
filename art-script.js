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
    var i = $('#8');
    var j = $('#9');
    var k = $('#10');
    var l = $('#11');
    var m = $('#12');

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
                i.delay(delay).fadeIn(fadeIn);
                view = 8;
                break;
            case 8:
                i.fadeOut(fadeOut);
                j.delay(delay).fadeIn(fadeIn);
                view = 9;
                break;
            case 9:
                j.fadeOut(fadeOut);
                k.delay(delay).fadeIn(fadeIn);
                view = 10;
                break;
            case 10:
                k.fadeOut(fadeOut);
                l.delay(delay).fadeIn(fadeIn);
                view = 11;
                break;
            case 11:
                l.fadeOut(fadeOut);
                m.delay(delay).fadeIn(fadeIn);
                view = 12;
                break;
            case 12:
                m.fadeOut(fadeOut);
                a.delay(delay).fadeIn(fadeIn);
                view = 0;
                break;
        }
    }

    function prev() {
        switch(view) {
            case 0:
                a.fadeOut(fadeOut);
                m.delay(delay).fadeIn(fadeIn);
                view = 12;
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
            case 8:
                i.fadeOut(fadeOut);
                h.delay(delay).fadeIn(fadeIn);
                view = 7;
                break;
            case 9:
                j.fadeOut(fadeOut);
                i.delay(delay).fadeIn(fadeIn);
                view = 8;
                break;
            case 10:
                k.fadeOut(fadeOut);
                j.delay(delay).fadeIn(fadeIn);
                view = 9;
                break;
            case 11:
                l.fadeOut(fadeOut);
                k.delay(delay).fadeIn(fadeIn);
                view = 10;
                break;
            case 12:
                m.fadeOut(fadeOut);
                l.delay(delay).fadeIn(fadeIn);
                view = 11;
                break;
        }
    }

    // EVENTS

    // opening page
    a.delay(delay).fadeIn(fadeIn);
    $('#back').delay(500).fadeIn(fadeIn);
    $('#foot').delay(150).fadeIn(fadeIn);

    // next or prev
    $('#next').click(function(){
        next();
    });
    $('#prev').click(function(){
        prev();
    });
});