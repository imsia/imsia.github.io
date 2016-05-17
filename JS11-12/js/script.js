$(function () {
  $('.myCarousel').myCarousel({
    description: true,
    easing: 'easeOutCirc',
  })

  var data = {
    name: "Склярова Ирина Андреевна",
    photoURL: "'https://github.com/imsia/imsia.github.io/blob/master/JS11-12/img/photo.JPG'",
    profession: "Студентка курса GoFrontend GoForIt Online",
    reason1: "Хочу научиться новому и полезному",
    reason2: "Хочу сменить профессию на более востребованную и прибыльную",
    reason3: "Это реальная возможность изменить свою жизнь",
    telephone: "+380502944442",
    profileURL: "http://vk.com/id8833619"
  }

  var $html = $('#test').html();
  var content = tmpl($html, data);

  $('body').append(content);

})
