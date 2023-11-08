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
        strings: ["Software Engineer", "Biomedical Engineer", "Electrical Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Engineer", "Biomedical Engineer", "Electrical Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});

//email form submission script
const form = document.querySelector("form");
const statusTxt = form.querySelector(".status-msg"); // Select the status message span

form.onsubmit = (e) => {
    e.preventDefault();

    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.response;
            console.log(response);

            if (response === "success") {
                // Update statusTxt with a success message
                statusTxt.innerText = "Message sent successfully!";
                statusTxt.style.color = "green"; // You can style it as you like
            } else {
                // Handle other responses, e.g., show an error message
                statusTxt.innerText = "Failed to send message. Please try again.";
                statusTxt.style.color = "red"; // You can style it as you like
            }
        }
    };

    let formData = new FormData(form);
    xhr.send(formData);
};
