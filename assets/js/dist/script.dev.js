"use strict";

var arr = [{
  name: "Chile | Atacama Desert",
  id: "384372134"
}, {
  name: "Chile | Los Lagos to Atacama",
  id: "355317435"
}, {
  name: "Chile | Patagonia, Torres del Paine",
  id: "260017598"
}, {
  name: "South Pole | Antarctica",
  id: "389572529"
}];
var APP_LANG = {
  spanish: "es",
  english: "en"
};

function changeVideo() {
  var video = arr[Math.random() * arr.length | 0];
  document.getElementById('iframeID').src = "https://player.vimeo.com/video/".concat(video.id, "?quality=1080p&background=1&autoplay=1&loop=1&byline=0&title=0");
}

function changeLang() {
  $(".contenido").each(function (index) {
    $(this).text($(this).data(lang));
  });
}

$(document).on('ready', function () {
  //if (mobCheck){
  // $('.tv .screen, .cover').addClass('on');
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
  }); // $('.content').children().addClass('show');
});
$(window).on('load', function () {
  //  $('.content').children().addClass('show');
  changeVideo();
}).on('resize', function () {
  changeVideo();
});