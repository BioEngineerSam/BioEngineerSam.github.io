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

//email form submission script
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span")

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.getElementsByClassName.display = "block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{ //once ajax has loaded
        if(xhr.readyState ==4 && xhr.status == 200){ //this checks if ajax response status is 200 and ready status is 4 which means there is no error
            let response = xhr.response; //storing ajax response in a response variable
            console.log(response);

        }

    }
};