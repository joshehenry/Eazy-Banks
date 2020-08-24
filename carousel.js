// const carousel = document.querySelector('.carousel'); 

// carousel.carousel();
// Get the video
const carousel = document.getElementById('.carousel')


// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

btn.addEventListener('click', (e) => {

    e.preventDefault();
})

// Pause and play the video, and change the button text

video.loop = true; 
                    

function myFunction()
 {
                     if (video.paused) {
                    
                        video.play();
                        btn.innerHTML = "Pause";
                        reload();
                      } else {
                        video.pause();
                        btn.innerHTML = "Play";
                      }
                    }
                    
                    
                    
                    


