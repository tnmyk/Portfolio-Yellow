

var cursor = document.querySelector(".cursor");
var pagetransition = document.querySelector(".transition-wrapper");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
window.addEventListener('load',()=>{
  console.log(sessionStorage.getItem("loaded"));
  
  if(sessionStorage.getItem('loaded')!='true'){
    document.querySelector(".wrapper").style.animation =
      "wrapper 0.5s ease-out forwards 3s";
    document.querySelector(".wrapper-welcome").style.animation =
      "wrapper-welcome 1.3s ease-out forwards 0.5s";
    document.querySelector(".wrapper-text").style.animation =
      "wrapper-text 2.3s ease-out forwards 1.3s";
    setTimeout(() => {
      pagetransition.style.animation =
        "transition-wrapper-loader 2s ease-in-out";
    }, 2600);
  }
  else{
    document.querySelector(".wrapper").style.display =
      "none";
  }
  
  sessionStorage.setItem("loaded", 'true');

})
var menuBtn = document.querySelector(".menu-div");
menuBtn.addEventListener("mouseenter", () => {
  cursor.classList.add("active");
});
menuBtn.addEventListener("mouseleave", () => {
  cursor.classList.remove("active");
});

var menu = document.querySelector(".menu");
var menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.remove("menu-close");
    menuBtn.classList.add("menu-open");
    menuOpen = true;
    menu.style.height ="100vh";
    document.getElementsByTagName("body")[0].classList.add('lock-scroll');
    
  } else {
    menu.classList.remove("menu-open");
    menuBtn.classList.add("menu-close");
    menuOpen = false;
    menu.style.height = "0vh";
    document.getElementsByTagName("body")[0].classList.remove("lock-scroll");
    
}
});



var navLinks=document.querySelectorAll(".nav-link");

for(var i=0;i<navLinks.length;i++){
    var link = navLinks[i];
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        pagetransition.textContent = e.target.textContent;
        pagetransition.style.animation =
          "transition-wrapper 1.6s ease-in-out forwards";
          menu.classList.remove("menu-open");
          menuBtn.classList.add("menu-close");
          menuOpen = false;
          menu.style.height = "0vh";
          document
            .getElementsByTagName("body")[0]
            .classList.remove("lock-scroll");
        setTimeout(()=>{
            window.location.href = e.target.href;
        },1600)
    })
}