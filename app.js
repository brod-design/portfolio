(function($){

	$('.owl-carousel').owlCarousel({
		loop:true,
		items:1,
		nav:true,
		pagination:true,
		dots:false,
		responsiveRefreshRate:10,
        onInitialized : function(){
                var activeImg = $('.owl-carousel').find('.active').find('img');
                var comment = activeImg.attr('alt');
                var href = activeImg.attr('href');
                var title = activeImg.attr('title');
            if(comment) $('.image-caption').html('<a '+'href="'+href+'">'+title+'</a>');
        }
	});

        owl = $('.owl-carousel').owlCarousel();
        owl.on('translated.owl.carousel', function(event) {       
                var href = $(this).find('active').find('img').attr('href');
                var title = $(this).find('.active').find('img').attr('title');
                var comment = $(this).find('.active').find('img').attr('alt');
            if(comment) $('.image-caption').html('<a '+'href="'+href+'">'+title+'</a>');
        });
	
})(jQuery);