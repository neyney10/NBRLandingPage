
//the buttons that auto-smooth scroll to section
function scroll(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' ,block: 'start',inline: "start"});

}

//the onclick listener
document.getElementsByTagName('li')[0].addEventListener("click", function() {scroll('#gallery')});
document.getElementsByTagName('li')[1].addEventListener("click", function() {scroll('#opinions')});
document.getElementsByTagName('li')[2].addEventListener("click", function() {scroll('#about ')});
document.getElementsByTagName('li')[3].addEventListener("click", function() {scroll('footer')});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {barfunction()};

var bar =  document.getElementById("myBar"); //the bar
var original_color = bar.style.backgroundColor; //the original color of the bar

function barfunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; 
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  bar.style.width = scrolled + "%";
  if(scrolled >= 100) {
    bar.style.backgroundColor = "gray";
  } else {
    bar.style.backgroundColor = original_color;  
  }

} 


var opinions = document.getElementsByClassName("opinion");
var dots = document.getElementsByClassName("dot");
var curr_op = 0;
opinions[curr_op].classList.add("opinion-show");
dots[curr_op].classList.add("dot-active");

function currentSlide(index) {
    opinions[curr_op].classList.remove("opinion-show");
    dots[curr_op].classList.remove("dot-active");
    curr_op = index;
    opinions[index].classList.add("opinion-show");
    dots[curr_op].classList.add("dot-active");
}

function moveSlide(amount) {
    opinions[curr_op].classList.remove("opinion-show");
    dots[curr_op].classList.remove("dot-active");
    curr_op += amount;
    curr_op = curr_op % 5;
    if(curr_op == -1)
        curr_op = 4;
    opinions[curr_op].classList.add("opinion-show");
    dots[curr_op].classList.add("dot-active");
}