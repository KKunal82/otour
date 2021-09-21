$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $(this).toggleClass('toggle');
        $('.navbar').toggleClass('toggleme');
    })
    $(window).on('load scroll',function(){
        $('.toggle-menu').removeClass('toggle');
        $('.navbar').removeClass('toggleme');

        if($(window).scrollTop() > 30){
            $('header').addClass('fullWidth');
        }
        else
        {
            $('header').removeClass('fullWidth');
        }

        $('section').each(function(){
            var id = $(this).attr('id');
            var height = $(this).height()
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active')
                $('.navbar').find('[date-scroll= "'  +id+  '" ]').addClass('active')
            }
        });
    });
});