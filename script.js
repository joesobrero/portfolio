$(document).ready(function() {
    // variables
    var view = 0;
    var fadeIn = 1000;
    var fadeOut = 650;
    var delay = 800;

    var about = $('#about');
    var edu = $('#edu');
    var work = $('#work');
    var contact = $('#contact');
    var aboutB = $('#about-b');
    var eduB = $('#edu-b');
    var workB = $('#work-b');
    var contactB = $('#contact-b');

    // functions
    function showAbout() {
        about.delay(delay).fadeIn(fadeIn);
    }
    function hideAbout() {
        about.fadeOut(fadeOut);
    }
    function showEdu() {
        edu.delay(delay).fadeIn(fadeIn);
    }
    function hideEdu() {
        edu.fadeOut(fadeOut);
    }
    function showWork() {
        work.delay(delay).fadeIn(fadeIn);
    }
    function hideWork() {
        work.fadeOut(fadeOut);
    }
    function showContact() {
        contact.delay(delay).fadeIn(fadeIn);
    }
    function hideContact() {
        contact.fadeOut(fadeOut);
    }

    // events
    aboutB.click(function() {
        switch(view) {
            case 0:
                return;
            case 1:
                hideEdu();
                break;
            case 2:
                hideWork();
                break;
            case 3:
                hideContact();
                break;
        }
        showAbout();
        view = 0;
    });
    eduB.click(function() {
        switch(view) {
            case 0:
                hideAbout();
                break;
            case 1:
                return;
            case 2:
                hideWork();
                break;
            case 3:
                hideContact();
                break;
        }
        showEdu();
        view = 1;
    });
    workB.click(function() {
        switch(view) {
            case 0:
                hideAbout()
                break;
            case 1:
                hideEdu();
                break;
            case 2:
                return;
            case 3:
                hideContact();
                break;
        }
        showWork();
        view = 2;
    });
    contactB.click(function() {
        switch(view) {
            case 0:
                hideAbout();
                break;
            case 1:
                hideEdu();
                break;
            case 2:
                hideWork();
                break;
            case 3:
                return;
        }
        showContact();
        view = 3;
    });
});