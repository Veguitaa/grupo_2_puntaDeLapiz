(function(){

	$('dd').filter(':nth-child(n+4)').addClass('hide');
	$('dt').on('click', function() {
		$(this).next().slideDown().siblings('dd').slideUp();
	});

})();