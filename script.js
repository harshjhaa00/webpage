let about = document.getElementById("about");
let you = document.getElementById("you")
let learning = document.getElementById("learning");
let goals = document.getElementById("goals");
let resolutions = document.getElementById("resolutions");
let me = document.getElementById("me")
let current = document.getElementById("current");
let five = document.getElementById("five");
// let new = document.getElementById("new");
me.addEventListener("click", function(){
    about.style.visibility = "visible"
      learning.style.visibility = "hidden"
    goals.style.visibility = "hidden"
    resolutions.style.visibility = "hidden"
     you.style.visibility = "hidden"
})
let hello = document.getElementById("hello")
current.addEventListener("click",function(){
    about.style.visibility = "hidden"
    learning.style.visibility = "visible"
  goals.style.visibility = "hidden"
  resolutions.style.visibility = "hidden"
  you.style.visibility = "hidden"

})
five.addEventListener("click",function(){
    about.style.visibility = "hidden"
    learning.style.visibility = "hidden"
  goals.style.visibility = "visible"
  resolutions.style.visibility = "hidden"
  you.style.visibility = "hidden"
})
hello.addEventListener("click",function(){
    about.style.visibility = "hidden"
    learning.style.visibility = "hidden"
  goals.style.visibility = "hidden"
  resolutions.style.visibility = "visible"
  you.style.visibility = "visible"
})
