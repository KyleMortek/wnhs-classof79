/// <reference path="../typings/globals/jquery/index.d.ts" />
// use 'esversion: 6'
// const iconTest = document.createElement("i");
// iconTest.id = "iconTest";
////////////////////////////////////////////////
//////////////////////////////////////////////// SMOOTH SCROLLING 
$(document).ready(function () {
  // $(window).resize(function () {

  if ($(window).width() >= 820) {
    // console.log('this is where stick navigation plays a role');
    //  $('.clearfix').css("display","block");
    $('*').waypoint(function (direction) {
      // if ($(window).width() >= 820) {

      if (direction == "up") {
         /////////////////////////////
         /////////////////////////////
        //  $('nav').slideDown(200);
        
        /////////////////////////////
         /////////////////////////////
        // console.log("up");
        // $('nav').addClass('sticky').slideDown(200);
        // $('.sticky').slideDown(200);
      } else {
        if (direction == "down") {
          // $('nav').slideUp(200);

        }
        // nav.slideToggle(200);

         /////////////////////////////
         /////////////////////////////

         /////////////////////////////
         /////////////////////////////
        }
      // }
    }, {
      offset: '60px' 
    });
  }


  //////////////////// 
  //////////////////// 
  //////////////////// MENU BUTTON FOR MOBILE 
  $('.js--menu').click(function () {
    let nav = $('.js--main-nav');
    let icon = $('.js--menu div i');
    nav.slideToggle(200);
    if (icon.hasClass('fas fa-bars')) {
      icon.addClass('ion-ios-close-circle');
      icon.removeClass('fas fa-bars');
    } else {
      icon.addClass('fas fa-bars');
      icon.removeClass('ion-ios-close-circle');
    }
    });
  // $('nav').css('display','block');

  // });

  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  // SMOOTH SCROLLING 
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});