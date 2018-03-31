$(function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
			$page.animate({
					scrollTop: $($.attr(this, 'href')).offset().top
			}, 400);
			return false;
	});
	function inWindow(s){
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var currentEls = $(s);
		var result = [];
		currentEls.each(function(){
			var el = $(this);
			var offset = el.offset();
			if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
				result.push(this);
		});
		return $(result);
	}
	var ss= $(".cards-list__item");
	$(document).on('scroll', function(){
		var boxesInWindow = inWindow(".cards-list__item");
		boxesInWindow.addClass("active");
	});
});
