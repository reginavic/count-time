    function christmasCountdown() {
    const christmasDate = new Date("December 31, 2025 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000; 
    const msInMinute = 60 * 1000; 
    const msInHour = 60 * 60 * 1000; 
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay =  Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merryChristmas();
    }
}

let timerID = setInterval(christmasCountdown, 1000);
function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy New Yar!!!";
    heading.classList.add("NY");
    document.body.style.background = 'url(NY7.jpg)';
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})
const buttonTwo = document.querySelector("#myButtonTwo");
buttonTwo.addEventListener("click", function () {
    document.querySelector("#myAudio").pause();
})

particlesJS("particles-js", {
    "particles": {
    "number": {
        "value": 400,
        "density": {
        "enable": true,
        "value_area": 800
        }
    },
    "color": {
        "value": "#ffffff"
    },
    /*"shape": {
        "type": "image",
        "stroke": {
        "width": 3,
        "color": "#fff"
        },
        "polygon": {
        "nb_sides": 5
        },
        "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
        }
    },*/
    "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
        }
    },
    "size": {
        "value": 6,
        "random": true,
        "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
        }
    },
    "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
        }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
        "enable": false,
        "mode":  "bubble"
        },
        "onclick": {
        "enable": false,
        "mode": "repulse"
        },
        "resize": false
    },
    "modes": {
        "grab": {
        "distance": 150,
        "line_linked": {
            "opacity": 1
        }
        },
        "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
        },
        "repulse": {
        "distance": 200,
        "duration": 0.2
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
    }
    },
    "retina_detect": true
});
