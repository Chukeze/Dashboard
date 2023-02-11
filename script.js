
let slideIndex = 1;
showSlides(slideIndex);
//next prev control
function nextSlide(n) {
    showSlides(slideIndex += n);
}
//thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    if(document.querySelector('button').click == 'false'){
        setTimeout(showSlides(i++), 200);
    }else{
        
        let slides = document.querySelectorAll('.img__track');
        let indicators = document.querySelector('.dot');
        if( n  > slides.length){
            slideIndex = 1;
        }
        if (n < 1) { slideIndex = slides.length}
        for ( i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            
        }
        for (i = 0; i < indicators.length; i++) {
            indicators[i].className = indicators[i].className.replace(" active", "");        
        }
        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex - 1].className += " active";
    }    
}