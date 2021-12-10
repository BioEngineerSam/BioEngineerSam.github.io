$(document).ready(function(){
    $(window).scroll(function(){
        //sticky navbar when scrolling
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Biomedical Engineer", "Electrical Engineer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Biomedical Engineer", "Electrical Engineer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});