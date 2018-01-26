/**
 * Created by josephsobrero on 1/11/18.
 */
$(document).ready(function(){
    // variables
    // views
    var view = 0;
    var pageview = 0;
    var processview = 0;
    // font weight
    var bold = '700';
    var normal = '400';
    // example photos
    var pa = $('#0');
    var pb = $('#1');
    var pc = $('#2');
    var pd = $('#3');
    var pe = $('#4');
    var pf = $('#5');
    var pg = $('#6');
    var ph = $('#7');
    // process animations
    var pFadeIn = 800;
    var pDelay = 800;
    var pFadeOut = 600;

    //functions
    function next() {
        switch(view) {
            case 0:
                pa.fadeOut(800);
                pb.delay(500).fadeIn(400);
                view = 1;
                break;
            case 1:
                pb.fadeOut(800);
                pc.delay(500).fadeIn(400);
                view = 2;
                break;
            case 2:
                pc.fadeOut(800);
                pd.delay(500).fadeIn(400);
                view = 3;
                break;
            case 3:
                pd.fadeOut(800);
                pe.delay(500).fadeIn(400);
                view = 4;
                break;
            case 4:
                pe.fadeOut(800);
                pf.delay(500).fadeIn(400);
                view = 5;
                break;
            case 5:
                pf.fadeOut(800);
                pg.delay(500).fadeIn(400);
                view = 6;
                break;
            case 6:
                pg.fadeOut(800);
                ph.delay(500).fadeIn(400);
                view = 7;
                break;
            case 7:
                ph.fadeOut(800);
                pa.delay(500).fadeIn(400);
                view = 0;
                break;
        }
    }

    function prev() {
        switch(view) {
            case 0:
                pa.fadeOut(800);
                ph.delay(500).fadeIn(400);
                view = 7;
                break;
            case 1:
                pb.fadeOut(800);
                pa.delay(500).fadeIn(400);
                view = 0;
                break;
            case 2:
                pc.fadeOut(800);
                pb.delay(500).fadeIn(400);
                view = 1;
                break;
            case 3:
                pd.fadeOut(800);
                pc.delay(500).fadeIn(400);
                view = 2;
                break;
            case 4:
                pe.fadeOut(800);
                pd.delay(500).fadeIn(400);
                view = 3;
                break;
            case 5:
                pf.fadeOut(800);
                pe.delay(500).fadeIn(400);
                view = 4;
                break;
            case 6:
                pg.fadeOut(800);
                pf.delay(500).fadeIn(400);
                view = 5;
                break;
            case 7:
                ph.fadeOut(800);
                pg.delay(500).fadeIn(400);
                view = 6;
                break;
        }
    }

    function examples() {
        switch(pageview) {
            case 0:
                return;
            case 1:
                $('#process-box').animate({
                    height: '-=100vh'
                }, 1000);
                $('#process').css('font-weight', normal);
                break;
            case 2:
                $('#contact-box').fadeOut(800);
                $('#contact').css('font-weight', normal);
                break;
        }
        $('#photo-box').delay(800).animate({
            height: '+=100vh'
        }, 1000);
        $('#foot').fadeIn(800);
        $('#examples').css('font-weight', bold);
        pageview = 0;
    }

    function process() {
        switch(pageview) {
            case 0:
                $('#photo-box').animate({
                    height: '-=100vh'
                }, 1000);
                $('#foot').fadeOut(800);
                $('#examples').css('font-weight', 'normal');
                break;
            case 1:
                return;
            case 2:
                $('#contact-box').fadeOut(800);
                $('#contact').css('font-weight', 'normal');
                break;
        }
        $('#process-box').delay(800).animate({
            height: '+=100vh'
        }, 800);
        $('#process').css('font-weight', bold);
        $('#process-selector').animate({
            right: '+=145px'
        }, 2000);
        pageview = 1;
    }
    /*
     function processView() {
     switch(processview) {
     case 0:
     }
     }
     */
    function processSelect1() {
        switch(processview) {
            case 0:
                return;
            case 1:
                $('#pc1').fadeOut(pFadeOut);
                $('#ps1').css('font-weight', normal);
                break;
            case 2:
                $('#pc2').fadeOut(pFadeOut);
                $('#ps2').css('font-weight', normal);
                break;
            case 3:
                $('#pc3').fadeOut(pFadeOut);
                $('#ps3').css('font-weight', normal);
                break;
            case 4:
                $('#pc4').fadeOut(pFadeOut);
                $('#ps4').css('font-weight', normal);
                break;
        }
        $('#ps0').css('font-weight', bold);
        $('#pc0').delay(pDelay).fadeIn(pFadeIn);
        processview = 0;
    }
    function processSelect2() {
        switch(processview) {
            case 0:
                $('#pc0').fadeOut(pFadeOut);
                $('#ps0').css('font-weight', normal);
                break;
            case 1:
                return;
            case 2:
                $('#pc2').fadeOut(pFadeOut);
                $('#ps2').css('font-weight', normal);
                break;
            case 3:
                $('#pc3').fadeOut(pFadeOut);
                $('#ps3').css('font-weight', normal);
                break;
            case 4:
                $('#pc4').fadeOut(pFadeOut);
                $('#ps4').css('font-weight', normal);
                break;
        }
        $('#ps1').css('font-weight', bold);
        $('#pc1').delay(pDelay).fadeIn(pFadeIn);
        processview = 1;
    }
    function processSelect3() {
        switch(processview) {
            case 0:
                $('#pc0').fadeOut(pFadeOut);
                $('#ps0').css('font-weight', normal);
                break;
            case 1:
                $('#pc1').fadeOut(pFadeOut);
                $('#ps1').css('font-weight', normal);
                break;
            case 2:
                return;
            case 3:
                $('#pc3').fadeOut(pFadeOut);
                $('#ps3').css('font-weight', normal);
                break;
            case 4:
                $('#pc4').fadeOut(pFadeOut);
                $('#ps4').css('font-weight', normal);
                break;
        }
        $('#ps2').css('font-weight', bold);
        $('#pc2').delay(pDelay).fadeIn(pFadeIn);
        processview = 2;
    }
    function processSelect4() {
        switch(processview) {
            case 0:
                $('#pc0').fadeOut(pFadeOut);
                $('#ps0').css('font-weight', normal);
                break;
            case 1:
                $('#pc1').fadeOut(pFadeOut);
                $('#ps1').css('font-weight', normal);
                break;
            case 2:
                $('#pc2').fadeOut(pFadeOut);
                $('#ps2').css('font-weight', normal);
                break;
            case 3:
                return;
            case 4:
                $('#pc4').fadeOut(pFadeOut);
                $('#ps4').css('font-weight', normal);
                break;
        }
        $('#ps3').css('font-weight', bold);
        $('#pc3').delay(pDelay).fadeIn(pFadeIn);
        processview = 3;
    }
    function processSelect5() {
        switch(processview) {
            case 0:
                $('#pc0').fadeOut(pFadeOut);
                $('#ps0').css('font-weight', normal);
                break;
            case 1:
                $('#pc1').fadeOut(pFadeOut);
                $('#ps1').css('font-weight', normal);
                break;
            case 2:
                $('#pc2').fadeOut(pFadeOut);
                $('#ps2').css('font-weight', normal);
                break;
            case 3:
                $('#pc3').fadeOut(pFadeOut);
                $('#ps3').css('font-weight', normal);
                break;
            case 4:
                return;
        }
        $('#ps4').css('font-weight', bold);
        $('#pc4').delay(pDelay).fadeIn(pFadeIn);
        processview = 4;
    }

    function contact() {
        switch(pageview) {
            case 0:
                $('#photo-box').animate({
                    height: '-=100vh'
                }, 1000);
                $('#foot').fadeOut(800);
                $('#examples').css('font-weight', normal);
                break;
            case 1:
                $('#process-box').animate({
                    height: '-=100vh'
                }, 1000);
                $('#process').css('font-weight', normal);
                break;
            case 2:
                return;
        }
        $('#contact-box').delay(800).fadeIn(800);
        $('#contact').css('font-weight', bold);
        pageview = 2;
    }

    //events
    //examples
    $('#next').click(function(){
        next();
    });
    $('#prev').click(function(){
        prev();
    });
    //nav
    $('#examples').click(function() {
        examples();
    });
    $('#process').click(function() {
        process();
    });
    $('#contact').click(function() {
        contact();
    });
    //process
    $('#ps0').click(function() {
        processSelect1();
    });
    $('#ps1').click(function() {
        processSelect2();
    });
    $('#ps2').click(function() {
        processSelect3();
    });
    $('#ps3').click(function() {
        processSelect4();
    });
    $('#ps4').click(function() {
        processSelect5();
    });
});