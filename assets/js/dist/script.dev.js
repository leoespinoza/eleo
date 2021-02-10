"use strict";

var arr = [{
  name: "Chile | Atacama Desert",
  id: "384372134",
  time: "15s"
}, {
  name: "Chile | Los Lagos to Atacama",
  id: "355317435",
  time: "0s"
}, {
  name: "Chile | Patagonia, Torres del Paine",
  id: "260017598",
  time: "15s"
}, {
  name: "South Pole | Antarctica",
  id: "389572529",
  time: "11s"
}];
var APP_LANG = {
  spanish: "es",
  english: "en"
};

function changeVideo() {
  var video = arr[Math.random() * arr.length | 0];
  document.getElementById('iframeID').src = "https://player.vimeo.com/video/".concat(video.id, "?dnt=1&quality=1080p&background=1&autoplay=1&loop=1&byline=0&title=0#t=").concat(video.time);
}

function changeLang() {
  $(".contenido").each(function (index) {
    $(this).text($(this).data(lang));
  });
}

$(document).on('ready', function () {
  //if (mobCheck){
  // 
  //}
  $('button').on('click', function (e) {
    e.stopPropagation();
    $('button').removeClass('on');
    $(this).toggleClass('on');
    $('.content, .info, .tv').addClass('on');
  });
  $('button:first-of-type').on('click', function () {
    $('.info > div').removeClass('on');
    $('.about-us').addClass('on');
  });
  $('button:last-of-type').on('click', function () {
    $('.info > div').removeClass('on');
    $('.contact-us').addClass('on');
  });
  $('.info').on('click', function (e) {
    e.stopPropagation();
  });
  $('html, .info > i').on('click', function () {
    $('button, .content, .info, .tv, .about-us, .contact-us').removeClass('on');
  }); //$('.tv .screen, .cover').addClass('on');

  $('.content').children().addClass('show');
  removeElement($('.tv'));
  $('.tv').animate({
    opacity: 0
  }, 4000);
  $('iframe').animate({
    opacity: 1
  }, 3000);
});
$(window).on('load', function () {
  //  $('.content').children().addClass('show');
  changeVideo();
}).on('resize', function () {
  changeVideo();
});