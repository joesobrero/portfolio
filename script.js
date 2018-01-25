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

    // functions
    function showAbout() {
        about.delay(delay).fadeIn(fadeIn);
    }
    function closeAbout() {
        about.fadeOut(fadeOut);
    }
    function showEdu() {
        edu.delay(delay).fadeIn(fadeIn);
    }
    function closeEdu() {
        edu.fadeOut(fadeOut);
    }
    function showWork() {
        work.delay(delay).fadeIn(fadeIn);
    }
    function closeWork() {
        work.fadeOut(fadeOut);
    }
    function showContact() {
        contact.delay(delay).fadeIn(fadeIn);
    }
    function closeContact() {
        contact.fadeOut(fadeOut);
    }

    // events
});