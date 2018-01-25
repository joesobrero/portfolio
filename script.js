$(document).ready(function() {

    // VARIABLES

    // views and timing
    var view = 0;
    var fadeIn = 1000;
    var fadeOut = 650;
    var delay = 800;

    // html elements
    var about = $('#about');
    var edu = $('#edu');
    var work = $('#work');
    var contact = $('#contact');
    var aboutB = $('#about-b');
    var eduB = $('#edu-b');
    var workB = $('#work-b');
    var contactB = $('#contact-b');


    // FUNCTIONS

    // show and hide
    function showAbout() {
        about.delay(delay).fadeIn(fadeIn);
        aboutB.css("text-decoration", "line-through");
    }
    function hideAbout() {
        about.fadeOut(fadeOut);
        aboutB.css("text-decoration", "none");
    }
    function showEdu() {
        edu.delay(delay).fadeIn(fadeIn);
        eduB.css("text-decoration", "line-through");
    }
    function hideEdu() {
        edu.fadeOut(fadeOut);
        eduB.css("text-decoration", "none");
    }
    function showWork() {
        work.delay(delay).fadeIn(fadeIn);
        workB.css("text-decoration", "line-through");
    }
    function hideWork() {
        work.fadeOut(fadeOut);
        workB.css("text-decoration", "none");
    }
    function showContact() {
        contact.delay(delay).fadeIn(fadeIn);
        contactB.css("text-decoration", "line-through");
    }
    function hideContact() {
        contact.fadeOut(fadeOut);
        contactB.css("text-decoration", "none");
    }


    // EVENTS

    // navigation
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
                hideAbout();
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