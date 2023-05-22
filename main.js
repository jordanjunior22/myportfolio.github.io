const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));



const hamburber = document.querySelector(".hamburger");
const navMenu = document.querySelector(".left-nav");

hamburber.addEventListener("click", ()=>{
    hamburber.classList.toggle("active");
    navMenu.classList.toggle("active");
    

})

document.querySelectorAll(".links").forEach(n =>n.
    addEventListener("click",()=>{
    hamburber.classList.remove("active");
    navMenu.classList.remove("active");
}))