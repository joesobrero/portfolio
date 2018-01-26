$(document).ready(function() {

    // VARIABLES

    // views and timing
    var view = 0;
    var fadeIn = 1000;
    var fadeOut = 650;
    var delay = 800;
    var imageTiming = 600;

    // clicks
    var aboutImgClicks = 0;
    var eduImgClicks = 0;

    // html elements
    var about = $('#about');
    var edu = $('#edu');
    var work = $('#work');
    var contact = $('#contact');
    var aboutB = $('#about-b');
    var eduB = $('#edu-b');
    var workB = $('#work-b');
    var contactB = $('#contact-b');
    var aboutImg = $('#about-img');
    var aboutImgBox = $('#about-img-box');
    var eduImg = $('#edu-img');
    var eduImgBox = $('#edu-img-box');

    // FUNCTIONS

    // show and hide
    function showAbout() {
        about.delay(delay).fadeIn(fadeIn);
        aboutB.css("text-decoration", "line-through");
        view = 0
    }
    function hideAbout() {
        about.fadeOut(fadeOut);
        aboutB.css("text-decoration", "none");
    }
    function showEdu() {
        edu.delay(delay).fadeIn(fadeIn);
        eduB.css("text-decoration", "line-through");
        view = 1
    }
    function hideEdu() {
        edu.fadeOut(fadeOut);
        eduB.css("text-decoration", "none");
    }
    function showWork() {
        work.delay(delay).fadeIn(fadeIn);
        workB.css("text-decoration", "line-through");
        view = 2
    }
    function hideWork() {
        work.fadeOut(fadeOut);
        workB.css("text-decoration", "none");
    }
    function showContact() {
        contact.delay(delay).fadeIn(fadeIn);
        contactB.css("text-decoration", "line-through");
        view = 3
    }
    function hideContact() {
        contact.fadeOut(fadeOut);
        contactB.css("text-decoration", "none");
    }

    // image animation
    function showAboutImg() {
        aboutImg.animate({
            'border-radius': '-=500px'
        }, imageTiming);
        aboutImgBox.animate({
            right: '+=100px',
            bottom: '+=100px'
        }, imageTiming);
    }
    function hideAboutImg() {
        aboutImg.animate({
            'border-radius': '+=500px'
        }, imageTiming);
        aboutImgBox.animate({
            right: '-=100px',
            bottom: '-=100px'
        }, imageTiming);
    }
    function showEduImg() {
        eduImg.animate({
            'border-radius': '-=500px'
        }, imageTiming);
        eduImgBox.animate({
            right: '+=100px',
            bottom: '+=100px'
        }, imageTiming);
    }
    function hideEduImg() {
        eduImg.animate({
            'border-radius': '+=500px'
        }, imageTiming);
        eduImgBox.animate({
            right: '-=100px',
            bottom: '-=100px'
        }, imageTiming);
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

    // image hover
    aboutImg.click(function() {
        switch(aboutImgClicks) {
            case 0:
                showAboutImg();
                aboutImgClicks = 1;
                break;
            case 1:
                hideAboutImg();
                aboutImgClicks = 0;
                break;
        }
    });
    eduImg.click(function() {
        switch(eduImgClicks) {
            case 0:
                showEduImg();
                eduImgClicks = 1;
                break;
            case 1:
                hideEduImg();
                eduImgClicks = 0;
                break;
        }
    });
});