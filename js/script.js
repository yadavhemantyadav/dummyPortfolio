
$(window).on("load",function(){


	$(".loader .inner").fadeOut(750, function(){
		$(".loader").fadeOut(100);
	});


	$(".items").isotope({
		filter:'*',
		animationOptions:{
			duration:1500,
			easing:'linear',
			queue: false
		}
	});
});

$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});
	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "hello from heman", "badminton player"],
		typeSpeed:70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	 

	 var skillTopOffSet = $(".skillsSection").offset().top;
	 console.log(skillTopOffSet);

	 $(window).scroll(function(){
	 	if(window.pageYOffset > skillTopOffSet - $(window).height() + 200){
	 		 $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth:4,
            size:152,
            onStep: function(from, to, percent){
            	$(this.el).find('.percent').text(Math.round(percent));
            }
    	});
	 	}
	 });

	 // $(".counter").each(function(){
	 // 	var element = $(this);
	 // 	var endVal = parseInt(element.text());

	 // 	element.countup();
	 // });


	 const nav = $("#navigation");
	 const navTop = nav.offset().top;

	 $(window).on("scroll", stickyNavigation);

	 function stickyNavigation(){
	 	var body = $("body");

	 	if($(window).scrollTop() >= navTop){
	 		body.css("padding-top", nav.outerHeight() + "px");
	 		body.addClass("fixedNav");
	 	}
	 	else{
	 		body.css("padding-top", 0);
	 		body.removeClass("fixedNav");
	 	}
	 }

	 $("#navigation li a").click(function(e){
	 	e.preventDefault();
	 	var targetElement = $(this).attr("href");
	 	var targetPosition = $(targetElement).offset().top;
	 	$("html, body").animate({
	 		scrollTop: targetPosition - 50
	 	}, "slow");
	 });

	$("[data-fancybpox]").fancybox();

	

	$("#filters a").click(function(){
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions:{
				duration:1500,
				easing:'linear',
				queue: false
			}
		});

		return false;

	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:3
        },
        768:{
            items:4
        },
        938:{
            items:4
        }
    }
})
});