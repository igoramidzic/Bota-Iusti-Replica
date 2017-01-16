$(document).ready(function(){
    // Change navbar on scroll
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20){
            $('.navbar').css('height','76px');
            $('.navbar').css('background-color','rgba(48,167,183,0.6)');
            $('.navbar').css('border','none');
        }
        if ($(window).scrollTop() < 20){
            $('.navbar').css('height','100px');
            $('.navbar').css('background-color','transparent');
            $('.navbar').css('border','none');
        }
        // Bug here - border glitches
        if ($(window).scrollTop() > 310){
            $('.navbar').css('background-color','#30a7b7');
            $('.navbar').css('border','1px solid rgb(45, 156, 171');
        }
    });
});
