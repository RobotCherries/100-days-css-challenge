let menu = $('.js-menu');

menu.click(function() {
	menu.children().removeClass('anim-inactive');
	menu.toggleClass('anim-end anim-start');
});