let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

// function heartRed(){
//   let heart=document.getElementsByClassName('red-heart');
//   heart.src='images/like.png';
// }


// LIKE


let men = document.getElementById('men');


men.onclick = function (event) {
    let target = event.target;
    if (!event.target.classList.contains('like')) return;
    imgsrc(target);
};


function imgsrc(image) {

    if (image.src.indexOf("gray-like.png") > 0) {

        image.src = "images/red-like.png"
    } else {
        image.src = "images/gray-like.png"
    }

}


// FORM


let formElement = document.forms['INFO'];
formElement.onsubmit = validateInfoForm;

function validateInfoForm() {
    let formElement = document.forms['INFO'];

    let fioElement = formElement.elements['FIO'];
    let pswElement = formElement.elements['PASSWORD'];

    let fioValue = fioElement.value;
    let pswValue = parseInt(pswElement.value);

    if (fioValue.length > 30) {
        alert('Введите пожалуйста Username не длиннее 30 символов!');
        fioElement.focus();
        return false;
    }

    if (isNaN(pswValue)) {
        alert('Введите пожалуйста в поле PASSWORD корректную цифру!');
        pswElement.focus();
        return false;
    }
}


let formEl = document.forms['SUBSCRIBE'];
formEl.onsubmit = validateInfoForm1;

function validateInfoForm1() {
    let formElement = document.forms['SUBSCRIBE'];

    let fioElement = formElement.elements['MAIL'];

    let fioValue = fioElement.value;

    if (fioValue.length > 30) {
        alert('Введите пожалуйста Username не длиннее 30 символов!');
        fioElement.focus();
        return false;
    }
}