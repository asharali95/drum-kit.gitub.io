
function playsound(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio){return;}
    key.classList.add("animation");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform"){return;}
    e.target.classList.remove("animation");
  }

window.addEventListener("keydown",playsound)

var keys = Array.from(document.querySelectorAll(".keys"));
keys.forEach(function(el){
    el.addEventListener("transitionend",removeTransition);
})
