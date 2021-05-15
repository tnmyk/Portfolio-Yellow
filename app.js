

var cursor = document.querySelector(".cursor");
var pagetransition = document.querySelector(".transition-wrapper");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
window.addEventListener('load',()=>{
  
  if(sessionStorage.getItem('loaded')!='true'){
    document.querySelector(".wrapper").style.animation =
      "wrapper 0.5s ease-out forwards 3s";
    document.querySelector(".wrapper-welcome").style.animation =
      "wrapper-welcome 1.3s ease-out forwards 0.5s";
    document.querySelector(".wrapper-text").style.animation =
      "wrapper-text 2.3s ease-out forwards 1.3s";
    setTimeout(() => {
      // pagetransition.style.animation =
      //   "transition-wrapper-loader 2s ease-in-out";
      pagetransition.classList.add('onloadpagetransition')
    }, 2400);
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
        // pagetransition.style.animation =
        //   "transition-wrapper 1.6s ease-in-out";
        pagetransition.classList.remove("onloadpagetransition");
        pagetransition.classList.add('transition-wrapper-active')
        console.log(pagetransition)
       
          menu.classList.remove("menu-open");
          menuBtn.classList.add("menu-close");
          menuOpen = false;
          menu.style.height = "0vh";
          document
            .getElementsByTagName("body")[0]
            .classList.remove("lock-scroll");
        
          setTimeout(()=>{
            window.location.href = e.target.href;
        pagetransition.classList.remove("transition-wrapper-active");
        console.log(pagetransition)

        },1600)
    })
}

var copyBtn = document.querySelector('#copy');

copyBtn.addEventListener('click', ()=>{
  
  copyBtn.classList.add('copy-active');
  
  var email=document.createElement('textarea');
    email.value="tanmaykachroo@gmail.com";
  document.body.appendChild(email);
  copyBtn.textContent="Copied!"
  email.focus();
   email.select();
   document.execCommand("copy");
   console.log("sdsa");
   document.body.removeChild(email);    
  setTimeout(() => {
  copyBtn.classList.remove("copy-active");
    
  }, 1000);

})


document.querySelector('#send').addEventListener('mouseenter',()=>{
  cursor.classList.add("active");
})
document.querySelector("#send").addEventListener("mouseenter", () => {
  cursor.classList.remove("active");
});