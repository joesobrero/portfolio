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
    var workPage = 0;

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
    var leftTri = $('#tri-left');
    var leftTriO = $('#tri-left-o');
    var rightTri = $('#tri-right');
    var rightTriO = $('#tri-right-o');
    var bractText = $('#work-text-0');
    var growText = $('#work-text-1');
    var polyText = $('#work-text-2');
    var freeText = $('#work-text-3');
    // bract images
    var bractLogo = $('#bract-logo');
    var bractLogoB = $('#bract-logo-b');
    var bractCard = $('#bract-card');
    var bractCardB = $('#bract-card-b');
    var bractPoster = $('#bract-poster');
    var bractPosterB = $('#bract-poster-b');
    var bractGif = $('#bract-gif');
    var bractGifB = $('#bract-gif-b');
    // grow nodes images
    var growUi = $('#grow-ui');
    var growUiB = $('#grow-ui-b');
    var growWebUi = $('#grow-web-ui');
    var growWebUiB = $('#grow-web-ui-b');
    var growLogo = $('#grow-logo');
    var growLogoB = $('#grow-logo-b');
    var growPres = $('#grow-pres');
    var growPresB = $('#grow-pres-b');
    // cp racing images
    var polyManu = $('#poly-manu');
    var polyManuB = $('#poly-manu-b');
    var polyTest = $('#poly-test');
    var polyTestB = $('#poly-test-b');

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

    // image animation main pages
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

    // work animations
    // images
    function hideWorkImg() {
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
                bractGif.fadeOut(imgTiming);
                break;
            case 5:
                break;
            case 6:
                growUi.fadeOut(imgTiming);
                break;
            case 7:
                growWebUi.fadeOut(imgTiming);
                break;
            case 8:
                growLogo.fadeOut(imgTiming);
                break;
            case 9:
                growPres.fadeOut(imgTiming);
                break;
            case 10:
                break;
            case 11:
                polyManu.fadeOut(imgTiming);
                break;
            case 12:
                polyTest.fadeOut(imgTiming);
        }
    }
    function showBractLogo() {
        hideWorkImg();
        workView = 1;
        bractLogo.delay(imgTiming).fadeIn(imgTiming);
    }
    function showBractCard() {
        hideWorkImg();
        workView = 2;
        bractCard.delay(imgTiming).fadeIn(imgTiming);
    }
    function showBractPoster() {
        hideWorkImg();
        workView = 3;
        bractPoster.delay(imgTiming).fadeIn(imgTiming);
    }
    function showBractGif() {
        hideWorkImg();
        workView = 4;
        bractGif.delay(imgTiming).fadeIn(imgTiming);
    }
    function showGrowUi() {
        hideWorkImg();
        workView = 6;
        growUi.delay(imgTiming).fadeIn(imgTiming);
    }
    function showGrowWebUi() {
        hideWorkImg();
        workView = 7;
        growWebUi.delay(imgTiming).fadeIn(imgTiming);
    }
    function showGrowLogo() {
        hideWorkImg();
        workView = 8;
        growLogo.delay(imgTiming).fadeIn(imgTiming);
    }
    function showGrowPres() {
        hideWorkImg();
        workView = 9;
        growPres.delay(imgTiming).fadeIn(imgTiming);
    }
    function showPolyManu() {
        hideWorkImg();
        workView = 11;
        polyManu.delay(imgTiming).fadeIn(imgTiming);
    }
    function showPolyTest() {
        hideWorkImg();
        workView = 12;
        polyTest.delay(imgTiming).fadeIn(imgTiming);
    }
    // sections
    function hideWorkSection() {
        switch(workPage) {
            case 0:
                hideWorkImg();
                bractText.fadeOut(fadeOut);
                break;
            case 1:
                hideWorkImg();
                growText.fadeOut(fadeOut);
                break;
            case 2:
                hideWorkImg();
                polyText.fadeOut(fadeOut);
                break;
            case 3:
                hideWorkImg();
                freeText.fadeOut(fadeOut);
                break;
        }
    }
    function showBract() {
        if(workPage == 0) {
            return;
        }
        hideWorkSection();
        workPage = 0;
        bractText.delay(delay).fadeIn(fadeIn);
        leftTri.hide();
        leftTriO.show();
    }
    function showGrow() {
        if(workPage == 1) {
            return;
        }
        hideWorkSection();
        workPage = 1;
        growText.delay(delay).fadeIn(fadeIn);
        leftTriO.hide();
        leftTri.show();
    }
    function showPoly() {
        if(workPage == 2) {
            return;
        }
        hideWorkSection();
        workPage = 2;
        polyText.delay(delay).fadeIn(fadeIn);
        rightTriO.hide();
        rightTri.show();
    }
    function showFree() {
        if(workPage == 3) {
            return;
        }
        hideWorkSection();
        workPage = 3;
        freeText.delay(delay).fadeIn(fadeIn);
        rightTri.hide();
        rightTriO.show();
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

    // work navigation
    leftTri.click(function() {
        switch(workPage) {
            case 0:
                return;
            case 1:
                showBract();
                break;
            case 2:
                showGrow();
                break;
            case 3:
                showPoly();
                break;
        }
    });
    rightTri.click(function() {
        switch(workPage) {
            case 0:
                showGrow();
                break;
            case 1:
                showPoly();
                break;
            case 2:
                showFree();
                break;
            case 3:
                return;
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
    // grow nodes
    growUiB.click(function() {
        showGrowUi();
    });
    growWebUiB.click(function() {
        showGrowWebUi();
    });
    growLogoB.click(function() {
        showGrowLogo();
    });
    growPresB.click(function() {
        showGrowPres();
    });
    // cp racing
    polyManuB.click(function() {
        showPolyManu();
    });
    polyTestB.click(function() {
        showPolyTest();
    });
});