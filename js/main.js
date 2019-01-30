$('.header-friopacking').css({'height': $(window).height()});
$('.header-mask').css({'height': $(window).height()});
$('#video').css({'height': $(window).height()});


$(window).scroll(function(){
    if( $(this).scrollTop() > 60 ){
        //$('nav').css({'background-color': 'rgba(25,27,86,.85)', 'transition' : 'all .3s ease-in-out'});
        $('nav').css({'background-color': 'rgba(255,255,255,1)', 'transition' : 'all .3s ease-in-out', 'box-shadow' : 'none'});
        $('nav .brand-logo img').prop('src', 'images/logo_friopacking_azul.png');
        //$('nav .brand-logo img').addClass('animated flipInX');
        $('nav ul li a').css({ 'color' : 'rgb(25,27,86)' });
    } else {
        $('nav').css({'background-color': 'transparent', 'transition' : 'all .3s ease-in-out', 'box-shadow' : 'none'});
        $('nav .brand-logo img').prop('src', 'images/logo_friopacking.png');
        $('nav ul li a').css({ 'color' : '#dadcfa' });
        //$('nav .brand-logo img').removeClass('animated flipInX');
    }
});

$('.scrollspy-mood').scrollSpy({ scrollOffset: 0 });
$('.scrollspy').scrollSpy({ scrollOffset: 0 });

$('#design-mask').mouseenter(function(){ $('#design').trigger('play'); });
$('#design-mask').mouseout(function(){ $('#design').trigger('pause'); });
$('#ingenieria-mask').mouseenter(function(){ $('#ingenieria').trigger('play'); });
$('#ingenieria-mask').mouseout(function(){ $('#ingenieria').trigger('pause'); });
$('#build-mask').mouseenter(function(){ $('#build').trigger('play'); });
$('#build-mask').mouseout(function(){ $('#build').trigger('pause'); });

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$('.proyectos').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    dots: false,
    prevArrow: '.prevArrow',
    nextArrow: '.nextArrow',
    variableWidth: true
});

$('.elementos-mask').each(function(){
    $(this).hover(function(){
        var index = $(this).data('index');
    });
})

$('.elementos-play').click(function(){
    var video = $(this).data('video');

    $('.video-lightbox').prop('src', video);
    $('.lightbox-video').css({'display' : 'flex'});
    $('body').css({'overflow' : 'hidden'});
})

$('.lightbox-close').click(function(){
    $('.video-lightbox').prop('src', '');
    $('.lightbox-video').css({'display' : 'none'});
    $('body').css({'overflow' : 'auto'});
});

$('div.items').bxSlider({
    ticker: true,
    slideMargin: 40,
    minSlides: 2,
    maxSlides: 8,
    slideWidth: 78,
    speed:35000
});


$('.button-corporativo').click(function(ev){
    
    $('.lightbox-youtube').css({'display' : 'flex'});
    $('body').css({'overflow' : 'hidden'});
});

$('.youtube-close').click(function(){
    $('.youtube-lightbox').prop('src', video);
    $('.lightbox-youtube').css({'display' : 'none'});
    $('body').css({'overflow' : 'auto'});
});

limitar();
function limitar() {
    $('.projects-item-content').each(function () {
        var showChar = 120;
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + "...";

            $(this).html(html);
        } else {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c;

            $(this).html(html);
        }
    });
}

$('.contacto-location').click(function(){
    $('.contacto').find('.contacto-maps').css({ display: 'block' }).velocity("stop", false).velocity({ bottom: '0' }, { duration: 300, queue: false, easing: 'easeInOutQuad' });
})
