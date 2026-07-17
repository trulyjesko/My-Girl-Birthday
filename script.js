window.addEventListener("load", () => {

    const loading = document.getElementById("loading");
    const hero = document.getElementById("hero");

    hero.style.display = "none";

    setTimeout(() => {
        loading.style.display = "none";
        hero.style.display = "flex";
    },2000);

});

const openBtn=document.getElementById("openBtn");

const hero=document.getElementById("hero");
const hearts=document.getElementById("hearts");
const sections=[
document.querySelector(".message"),
document.querySelector(".letter"),
document.querySelector(".gallery"),
document.querySelector(".ending")
];

openBtn.addEventListener("click",()=>{for(let i=0;i<25;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*18)+"px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},i*120);

    }

openBtn.disabled=true;

hero.style.opacity="0";

setTimeout(()=>{

hero.style.display="none";

sections.forEach((section,index)=>{

setTimeout(()=>{

section.classList.remove("hidden");

if(index===0){

section.scrollIntoView({
behavior:"smooth"
});

}

},index*900);

});

},700);

});
