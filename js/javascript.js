$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banner-homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='img/arrow-banner.png' alt='slider arrow' class='banner-prev'>","<img src='img/arrow-banner.png' alt='slider arrow' class='banner-next'>"],
        margin:1,
        nav:true,
        dots:false
    });

});