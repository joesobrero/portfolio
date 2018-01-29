$(document).ready(function() {

    // VARIABLES

    // views and timing
    // for main page
    var view = 0;
    var fadeIn = 1000;
    var fadeOut = 650;
    var delay = 800;
    // for main page
    var imgTiming = 600;
    // for work
    var workView = 0;

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

    // elements for work section
    var bractLogo = $('#bract-logo');
    var bractLogoB = $('#bract-logo-b');
    var bractCard = $('#bract-card');
    var bractCardB = $('#bract-card-b');
    var bractPoster = $('#bract-poster');
    var bractPosterB = $('#bract-poster-b');
    var bractGif = $('#bract-gif');
    var bractGifB = $('#bract-gif-b');

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
        }, imgTiming);
        aboutImgBox.animate({
            right: '+=100px',
            bottom: '+=100px'
        }, imgTiming);
    }
    function hideAboutImg() {
        aboutImg.animate({
            'border-radius': '+=500px'
        }, imgTiming);
        aboutImgBox.animate({
            right: '-=100px',
            bottom: '-=100px'
        }, imgTiming);
    }
    function showEduImg() {
        eduImg.animate({
            'border-radius': '-=500px'
        }, imgTiming);
        eduImgBox.animate({
            right: '+=100px',
            bottom: '+=100px'
        }, imgTiming);
    }
    function hideEduImg() {
        eduImg.animate({
            'border-radius': '+=500px'
        }, imgTiming);
        eduImgBox.animate({
            right: '-=100px',
            bottom: '-=100px'
        }, imgTiming);
    }
    function showBractLogo() {
        switch(workView) {
            case 0:
                break;
            case 1:
                return;
            case 2:
                bractCard.fadeOut(imgTiming);
                break;
            case 3:
                bractPoster.fadeOut(imgTiming);
                break;
            case 4:
                bractGif.fadeOut(imgTiming);
                break;
        }
        workView = 1;
        bractLogo.delay(imgTiming).fadeIn(imgTiming);
    }
    function showBractCard() {
        switch(workView) {
            case 0:
                break;
            case 1:
                bractLogo.fadeOut(imgTiming);
                break;
            case 2:
                return;
            case 3:
                bractPoster.fadeOut(imgTiming);
                break;
            case 4:
                bractGif.fadeOut(imgTiming);
                break;
        }
        workView = 2;
        bractCard.delay(imgTiming).fadeIn(imgTiming);
    }
    function showBractPoster() {
        switch(workView) {
            case 0:
                break;
            case 1:
                bractLogo.fadeOut(imgTiming);
                break;
            case 2:
                bractCard.fadeOut(imgTiming);
                break;
            case 3:
                return;
            case 4:
                bractGif.fadeOut(imgTiming);
                break;
        }
        workView = 3;
        bractPoster.delay(imgTiming).fadeIn(imgTiming);
    }
    function showBractGif() {
        switch(workView) {
            case 0:
                break;
            case 1:
                bractLogo.fadeOut(imgTiming);
                break;
            case 2:
                bractCard.fadeOut(imgTiming);
                break;
            case 3:
                bractPoster.fadeOut(imgTiming);
                break;
            case 4:
                return;
        }
        workView = 4;
        bractGif.delay(imgTiming).fadeIn(imgTiming);
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

    // image click
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

    // bract
    bractLogoB.click(function() {
        showBractLogo();
    });
    bractCardB.click(function() {
        showBractCard();
    });
    bractPosterB.click(function() {
        showBractPoster();
    });
    bractGifB.click(function() {
        showBractGif();
    });
});