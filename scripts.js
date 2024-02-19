function display(num){
    let buttons = document.getElementsByClassName("infoButton");
    for(let i=0 ; i<buttons.length; ++i){
        let classes = buttons[i].className;
        classes = classes.replace(new RegExp("active","g"),"");
        buttons[i].className = classes;
    }
    
    let classes = buttons[num-1].className;
    if(classes.indexOf("active") == -1){
        buttons[num-1].className += " active";
    }
    let printText, imageSource;
    if(num == 1){
        printText = "Welcome to Community Healthcare. Looking back at those years, when many a times, due \
        to scarcity of specialist doctors, we (my family) would have to go long distances\
        from Summerville (our hometown) to bigger cities to get trusted and affordable health \
        treatment, since then I incepted the idea of becoming a doctor and serving my own\
        people in their own hometown so that no one would have to suffer again from \
        travelling long distances just to visit a specialist. After doing my Post graduation \
        from Summerville, me and my wife, Dr. Jane Doe started with a small practice\
        in Summerville. Over the years, many people joined us in this dream of ours in serving \
        the society better.";
        imageSource="Images/photo-1596541223130-5d31a73fb6c6.jfif";
    } else if(num == 2){
        printText = "<h2 style=\"color: blueviolet;\">Our Mission</h2>To provide comprehensive and compassionate\
        patient care at affordable cost with clinical excellance and state of the art technology.";
        imageSource="Images/our_mission.jpg";
    } else if(num == 3){
        printText = "<h2 style=\"color: blueviolet;\">Our Vision</h2>To be an epitome of trusted health care.";
        imageSource="Images/our_vision.jfif";
    } else {
        printText = "Free Medical Health Checkup Camps are organised regularly at Hospital & Periphery.\
        Hospital is associated with <b>MEDLIFE - a NGO</b> and Health Is Wealth(East End) to help poor students.\
        <b>Smile Train Services</b>, in collabration with Bill Gates Foundation are provided free of cost for Cleft Lip and Cleft Palate\
        On Occasion of completing 14 years, <b>Free Hand Deformity Camp</b> was organised at Medicare\
         Hospital, Summer Hill on 6-Oct-2017, in which world famous surgeons Dr. Astrid Morrison \
         (Sports Medicine Specialist) & Dr. Oriel Carroll (New York, USA) sucessfully operated 35 \
         patients. They have treated famous sports icons including Michael Jordan. Treatment/ Surgery \
         including operative medicines and stay of patients was free of cost.\
        On the occasion of 15th Anniversary, <b>Basic Life Support Training</b> of Police Personnel, \
        Ambulance and hospital staff was done by Hospital Doctors.";
        imageSource= "Images/social_activities.jfif";
    }

    let element = document.getElementById("info2");
    let id = null;
    element.style.opacity = 0;
    document.getElementById("message").innerHTML = printText;
    document.getElementById("image").src = imageSource;
    clearInterval(id);
    id = setInterval(fade,50);             
    function fade(){
        if (Number(element.style.opacity) < 1){
            element.style.opacity = Number(element.style.opacity) + 0.1;
        } else{
            clearInterval(id);
        }
    }
}
 

function toggleMobileMenu(){
    document.getElementById('hamburger-icon').classList.toggle('open');
    let element = document.getElementById('mobile-menu');
    if(element.style.display != 'flex'){
        element.style.display = 'flex';
    }else{
        element.style.display = 'none';
    }
}

let slideIndex = -1;

let slideShowInterval = setInterval(showSlides,5000);
showSlides();
function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let boxArray = document.getElementsByClassName("box");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        boxArray[i].classList.remove("active");
      }
    if(slideIndex === slides.length-1){
        slideIndex=0;
    } else {
        slideIndex++;
    }
    slides[slideIndex].style.display="block";
    boxArray[slideIndex].classList.add("active");
    
}

function currentSlide(newIndex){
    clearInterval(slideShowInterval);
    let slides = document.getElementsByClassName("mySlides");
    let boxArray = document.getElementsByClassName("box");
    for(let i=0; i<slides.length; ++i){
        slides[i].style.display="none";
        boxArray[i].classList.remove("active");
    }
    slides[newIndex-1].style.display = "block";
    boxArray[newIndex-1].classList.add("active");
    slideIndex = newIndex-1;
    slideShowInterval = setInterval(showSlides,5000);
}

function nextSlide(next){
    let slides = document.getElementsByClassName('mySlides');
    if((next && slideIndex == (slides.length-1)) || (!next && slideIndex == 0)){
        return;
    }
    clearInterval(slideShowInterval);
    let boxArray = document.getElementsByClassName('box');
    if(next && slideIndex !== (slides.length-1)){
        for(let i=0; i<slides.length; ++i){
            slides[i].style.display="none";
            boxArray[i].classList.remove("active");
        }
        slides[++slideIndex].style.display = 'block';
        boxArray[slideIndex].classList.add('active');
    } else if(!next && slideIndex !== 0) {
        for(let i=0; i<slides.length; ++i){
            slides[i].style.display="none";
            boxArray[i].classList.remove("active");
        }
        slides[--slideIndex].style.display = 'block';
        boxArray[slideIndex].classList.add('active');
    }
    slideShowInterval = setInterval(showSlides,5000);
}

let counter = 0;
let slideTestimonialInterval = setInterval(slideTestimonial,8000);
let moveInterval = null;
let skipRightInterval = null;
let skipLeftInterval = null;
function slideTestimonial(){
    clearInterval(slideTestimonialInterval);
    let dotArray = document.getElementsByClassName('dot');
    moveInterval = setInterval(move, 3);
    function move(){
        let targetElement = document.getElementById('text-container');
        targetElement.style.right = (++counter).toString() + 'vw';
        if(counter%100 == 0){
            if(counter != 1000){
                clearInterval(moveInterval);
                for(let i = 0; i < dotArray.length; ++i){
                    dotArray[i].classList.remove('active');
                }
                dotArray[Math.floor(counter/100)].classList.add('active');
                slideTestimonialInterval = setInterval(slideTestimonial,8000);
            } else{
                targetElement.style.right = '-100vw';
                counter = -100;
            }
            
        }
    }
}


function currentTestimonial(testimonialNumber){
    clearInterval(slideTestimonialInterval);
    clearInterval(moveInterval);
    clearInterval(skipLeftInterval);
    clearInterval(skipRightInterval);
    let targetElement = document.getElementById('text-container');
    let dotArray = document.getElementsByClassName("dot");
    for(let i = 0; i < dotArray.length; ++i){
        dotArray[i].classList.remove('active');
    }
    dotArray[testimonialNumber-1].classList.add('active');
    if((testimonialNumber-1) < counter/100){
        skipLeftInterval = setInterval(skipLeft, 0.1);
        function skipLeft(){
            targetElement.style.right = (--counter).toString()+'vw';
            if(counter == (testimonialNumber-1)*100){
                clearInterval(skipLeftInterval);
                slideTestimonialInterval = setInterval(slideTestimonial,8000);
            }
        }
    } else if((testimonialNumber-1) > counter/100){
        skipRightInterval = setInterval(skipRight, 0.1);
        function skipRight(){
            targetElement.style.right = (++counter).toString()+'vw';
            if(counter == (testimonialNumber-1)*100){
                clearInterval(skipRightInterval);
                slideTestimonialInterval = setInterval(slideTestimonial,8000);
            }
        }
    } else {
        slideTestimonialInterval = setInterval(slideTestimonial, 8000);
    }
}

document.querySelector('#hamburger-icon').addEventListener('click',toggleMobileMenu);
    
    

function hideMenu(event){
    const element = document.getElementById('mobile-menu');
    if(element.style.display != 'none'){
        element.style.display="none";
        this.classList.toggle('open');
    }
    
}

document.querySelector('#hamburger-icon').addEventListener('focusout',hideMenu);