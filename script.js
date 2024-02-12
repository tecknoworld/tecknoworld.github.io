$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Applying smooth scroll again on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing, .typing-2", {
        strings: ["YouTuber", "Software Developer", "Videographer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Button animation script
    let button = document.querySelector(".column.right");
    button.addEventListener("click", () => {
        const span = document.querySelector("a span");
        button.style.paddingRight = '10px';
        span.style.visibility = "visible";
        setTimeout(() => {
            span.style.visibility = "hidden";
            button.style.transition = ".3s ease-in-out";
            button.style.paddingRight = "0px";
        }, 3000);
    });

    // Contact form script
    const contactForm = document.getElementById('myForm');
    const contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ma91f0e', 'template_cyv67uy', '#myForm', '_1tPtdoa-uulJ4ZuT')
            .then(() => {
                // Show sent message
                contactMessage.textContent = 'Message sent successfully ✅';

                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);

                contactForm.reset();
            }, () => {
                // Show error message
                contactMessage.textContent = 'Message not sent (service error) ❌';

                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);

                contactForm.reset();
            });
    };

    contactForm.addEventListener('submit', sendEmail);
});
