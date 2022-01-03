$(document).ready(function () {
	$('.nav-toggle').click(function () {
		if ($('.header').hasClass('d-none')) {
			$('.header').removeClass('d-none')
			$('.nav-toggle').removeClass('fa-bars')
			$('.nav-toggle').addClass('fa-times')

		}
		else{
			$('.header').addClass('d-none')
			$('.nav-toggle').removeClass('fa-times')
			$('.nav-toggle').addClass('fa-bars')
		}
		
	})
})