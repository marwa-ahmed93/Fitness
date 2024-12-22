
$(document).ready(function() {
    $(window).scroll(function() {
        let wScroll = $(window).scrollTop();  // Get the updated scroll position
        if (wScroll > 100) {
            $("#navItem").css('backgroundColor', 'white');  // Change background color when scrolled
            // $("nav li a").css('color', 'black !important');  // Force black color with priority
            $('nav li a').css('color', 'black');
            $('#navImg').attr('src', './images/fitness-dark.png');  // Change image source
            $("#btn").css("backgroundColor","rgb(211, 37, 37)")
        } else {
            $("#navItem").css('backgroundColor', 'transparent');  // Reset color when scrolled back up
            $('#navImg').attr('src', './images/fitness-light.png'); 
            $("nav ul li a").css('color', 'white');  // Change nav link color to black when scrolled
            $("#btn").css("backgroundColor","white")
    
        }
    });


    $(".btnIcon").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500)
      });

    





});