document.addEventListener("DOMContentLoaded", function () {
    function smoothScrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top;
            const duration = 300;
            const start = performance.now();
    
            requestAnimationFrame(function step(currentTime) {
                const time = currentTime - start;
                const percent = Math.min(time / duration, 1);
    
                window.scrollTo(0, offset * percent);
    
                if (percent < 1) {
                    requestAnimationFrame(step);
                }
            });
        }
    }
    
    document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollToTarget(targetId);
        });
    });
    
    document.querySelectorAll('.hero__link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollToTarget(targetId);
        });
    });
    

    document.querySelectorAll('footer [href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });  
    
    /*burger*/
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })

    document.getElementById("rus").addEventListener("click", function () {
        var belElement = document.getElementById("bel");
        if (belElement.style.display !== "block") {
            belElement.style.display = "block";
        } else {
            belElement.style.display = "none";
        }
    })

    /*pop-ap charter*/
    const openCharterButton = document.getElementById("openCharter");
    const closeCharterButton = document.getElementById("closeCharter");
    const charter = document.getElementById("charter");
    const contentCharter = document.getElementById("contentCharter");

    openCharterButton.addEventListener("click", function () {
        charter.style.display = "block";
    });

    closeCharterButton.addEventListener("click", function () {
        charter.style.display = "none";
    });

    charter.addEventListener("click", function (event) {
        if ((event.target !== contentCharter) && !contentCharter.contains(event.target)) {
            charter.style.display = "none";
        }
    });

    /*presentation*/
    const screenButton = document.getElementById("screenButton");
    const present = document.getElementById("present");
    const presentContainer = document.getElementById("presentContainer");

    screenButton.addEventListener("click", function () {
        present.classList.toggle("present")
        presentContainer.classList.toggle("present__container--after")
    })

    present.addEventListener("click", function (event) {
        if ((event.target !== presentContainer) && !presentContainer.contains(event.target)) {
            present.classList.remove("present")
            presentContainer.classList.remove("present__container--after")
        }
    });

    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.querySelectorAll("#slideshow .slide");
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "block";
    }

    const leftArrow = document.querySelector(".prev");
    const rightArrow = document.querySelector(".next");

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            const direction = event.key === "ArrowLeft" ? -1 : 1;
            plusSlides(direction);
        }
    });

    leftArrow.addEventListener("click", function () {
        plusSlides(-1);
    });

    rightArrow.addEventListener("click", function () {
        plusSlides(1);
    });

    /*pop-up almanac*/
    const openAlm1Button = document.getElementById("openAlm1");
    const closeAlm1Button = document.getElementById("closeAlm1");
    const alm1 = document.getElementById("alm1");
    const alm1Content = document.getElementById("alm1Content");

    openAlm1Button.addEventListener("click", function () {
        alm1.style.display = "block";
    });

    closeAlm1Button.addEventListener("click", function () {
        alm1.style.display = "none";
    });

    alm1.addEventListener("click", function (event) {
        if ((event.target !== alm1Content) && !alm1Content.contains(event.target)) {
            alm1.style.display = "none";
        }
    });

    const openAlm2Button = document.getElementById("openAlm2");
    const closeAlm2Button = document.getElementById("closeAlm2");
    const alm2 = document.getElementById("alm2");
    const alm2Content = document.getElementById("alm2Content");

    openAlm2Button.addEventListener("click", function () {
        alm2.style.display = "block";
    });

    closeAlm2Button.addEventListener("click", function () {
        alm2.style.display = "none";
    });

    alm2.addEventListener("click", function (event) {
        if ((event.target !== alm2Content) && !alm2Content.contains(event.target)) {
            alm2.style.display = "none";
        }
    });

    

})