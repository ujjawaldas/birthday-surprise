//------------------------------------------------
// STARS
//------------------------------------------------

const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=1+Math.random()*4+"s";

stars.appendChild(star);

}

//------------------------------------------------
// HEARTS
//------------------------------------------------

const hearts=document.getElementById("hearts");

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(8+Math.random()*6)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},15000);

}

setInterval(createHeart,300);

//------------------------------------------------
// Placeholder
//------------------------------------------------



//----------------------------------------------------
// Loading Screen
//----------------------------------------------------

window.onload=()=>{

    setTimeout(()=>{
    
    document.getElementById("loading").style.opacity="0";
    
    setTimeout(()=>{
    
    document.getElementById("loading").style.display="none";
    
    document.getElementById("hero").style.opacity="1";
    
    },1800);
    
    },3000);
    
    }
    
    //----------------------------------------------------
    // Shooting Stars
    //----------------------------------------------------
    
    function createShootingStar(){
    
    const s=document.createElement("div");
    
    s.className="shooting";
    
    s.style.left=Math.random()*window.innerWidth+"px";
    
    s.style.top=Math.random()*250+"px";
    
    document.getElementById("shootingStars").appendChild(s);
    
    setTimeout(()=>{
    
    s.remove();
    
    },2000);
    
    }
    
    setInterval(createShootingStar,3500);
    
    //----------------------------------------------------
    // Music
    //----------------------------------------------------
    
    
    
    //----------------------------------------------------
    // Placeholder Fireworks
    //----------------------------------------------------
   //----------------------------------------------------
// FIREWORK ENGINE
//----------------------------------------------------

const canvas=document.getElementById("fireworks");

let ctx;

if(canvas){

    ctx=canvas.getContext("2d");

}

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

let particles=[];

class Particle{

constructor(x,y,color){

this.x=x;
this.y=y;

this.color=color;

this.radius=Math.random()*3+2;

this.speedX=(Math.random()-0.5)*10;

this.speedY=(Math.random()-0.5)*10;

this.life=100;

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

this.speedY+=0.05;

this.life--;

}

draw(){

ctx.save();

ctx.globalAlpha=this.life/100;

ctx.beginPath();

ctx.arc(

this.x,

this.y,

this.radius,

0,

Math.PI*2

);

ctx.shadowBlur=20;

ctx.shadowColor=this.color;

ctx.fillStyle=this.color;
ctx.fill();

ctx.restore();

}

}

function createExplosion(x,y){

const colors=[

"#ff4d88",

"#00ffff",

"#ffff00",

"#ff6600",

"#ffffff",

"#00ff66",

"#ff00ff",

"#66ccff"

];

const color=

colors[Math.floor(Math.random()*colors.length)];

for(let i=0;i<120;i++){

particles.push(

new Particle(

x,

y,

color

)

);

}

}

function animateFireworks(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

particles.forEach((particle,index)=>{

particle.update();

particle.draw();

if(particle.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(

animateFireworks

);

}

animateFireworks();

//----------------------------------------------------
// START FIREWORK SHOW
//----------------------------------------------------

let fireworkInterval;

function startFireworks(){

createExplosion(

window.innerWidth/2,

window.innerHeight/2

);

fireworkInterval=setInterval(()=>{

createExplosion(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight*0.6

);

},700);

}

//----------------------------------------------------
// CONFETTI ENGINE
//----------------------------------------------------

const confettiCanvas = document.getElementById("confetti");

let confettiCtx;

if (confettiCanvas) {

    confettiCtx = confettiCanvas.getContext("2d");

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    window.addEventListener("resize", () => {

        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

    });

}



let confetti=[];

class Confetti{

constructor(){

this.x=Math.random()*confettiCanvas.width;

this.y=-20;

this.size=Math.random()*8+4;

this.speed=Math.random()*3+2;

this.angle=Math.random()*360;

this.rotation=Math.random()*8-4;

this.color=[

"#ff4d88",
"#FFD700",
"#00FFFF",
"#7CFC00",
"#FF69B4",
"#FFA500",
"#87CEFA",
"#FFFFFF"

][Math.floor(Math.random()*8)];

}

update(){

this.y+=this.speed;

this.angle+=this.rotation;

}

draw(){

confettiCtx.save();

confettiCtx.translate(this.x,this.y);

confettiCtx.rotate(this.angle*Math.PI/180);

confettiCtx.fillStyle=this.color;

confettiCtx.fillRect(

-this.size/2,

-this.size/2,

this.size,

this.size

);

confettiCtx.restore();

}

}

function createConfetti(){

    for(let i=0;i<250;i++){
    
    confetti.push(new Confetti());
    
    }
    
    }
    
    function animateConfetti(){
    
    confettiCtx.clearRect(
    
    0,
    
    0,
    
    confettiCanvas.width,
    
    confettiCanvas.height
    
    );
    
    confetti.forEach((piece,index)=>{
    
    piece.update();
    
    piece.draw();
    
    if(piece.y>confettiCanvas.height+20){
    
    confetti.splice(index,1);
    
    }
    
    });
    
    requestAnimationFrame(
    
    animateConfetti
    
    );
    
    }
    
    animateConfetti();

    //----------------------------------------------------
// GIFT BOX
//----------------------------------------------------
const envelope=document.getElementById("envelope");

const letterSection=document.getElementById("letterSection");

const letterText=document.getElementById("letterText");

const gift=document.getElementById("giftBox");

const giftContainer=document.getElementById("giftContainer");

giftContainer.onclick=()=>{

    console.log("🎁 Gift clicked");

    const music = document.getElementById("music");
    console.log(music);


    music.currentTime = 0;

    music.play()
        .then(() => {
            console.log("Music started");
        })
        .catch(err => {
            console.error("Music error:", err);
        });


gift.classList.add("shake");

setTimeout(()=>{

gift.classList.remove("shake");

gift.classList.add("open");

},700);

setTimeout(()=>{

startFireworks();

createConfetti();

setTimeout(()=>{

    letterSection.style.display="flex";
    
    },2000);

},1200);

setTimeout(()=>{

document.getElementById("hero").style.opacity="0";

},2200);

setTimeout(()=>{

alert("❤️ Your Love Letter Appears Next ❤️");

// Phase 4

},3200);

}

//--------------------------------------------------
// LOVE LETTER
//--------------------------------------------------

const letter = `Radhika, ❤️

Happy Birthday!!

Birthday k din wish pta h sach ho jti h,

isliye m wish krta hu ki hm hmesha tmhra birthday sth m celebrate krnge,

Iss saal bhi m tmhe bahut saara pyaar krunga,

Preshnn bhi krunga,

Or vada krta hu hmesha tmhra sth dunga,

Aise bahut saare birthdays m tmhre sth bitana chahta hu,

Tmhre sth sb kch experience krna chahta hu,

Tmhre sth apni puri lyf bitana chahta hu,

Hmesha hmesha k liye

Happy Birthday Meri Pyaari Bubu.

I Love You sbse zyda meri pyaari Bubu❤️`;



    // function typeLetter(){

    //     letterText.textContent="";
    
    //     let i=0;
    
    //     const timer=setInterval(()=>{
    
    //         if(i < letter.length){
    
    //             letterText.textContent += letter.charAt(i);
    
    //             i++;
    
    //         }
    //     else{

    //         clearInterval(timer);

            // setTimeout(() => {
            
                // const gallery = document.getElementById("gallerySection");
            
                // gallery.style.display = "block";
            
                // gallery.scrollIntoView({
                    // behavior: "smooth"
                // });
            
                // Show timeline after 6 seconds
                // setTimeout(() => {
            
                    // const timeline = document.getElementById("timeline");
            
                    // timeline.style.display = "block";
            
                    // timeline.scrollIntoView({
                        // behavior: "smooth"
                    // });
            
                // }, 6000);
            
            // }, 2500);
        
        // }
    
        // },35);
    
    // }

    //----------------------------------------------------
// ROSE PETALS
//----------------------------------------------------

const roseContainer=document.getElementById("roseContainer");

function createRose(){

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=(8+Math.random()*6)+"s";

rose.style.fontSize=(22+Math.random()*20)+"px";

roseContainer.appendChild(rose);

setTimeout(()=>{

rose.remove();

},15000);

}

setInterval(createRose,600);

let letterOpened = false;
let typing = false;
let typingTimer = null;

envelope.onclick = () => {

    if(letterOpened || typing) return;

    letterOpened = true;
    typing = true;

    envelope.classList.add("open");

    typeLetter();

};

function typeLetter(){

    clearInterval(typingTimer);

    letterText.textContent="";

    let i=0;

    typingTimer=setInterval(()=>{

        if(i < letter.length){

            letterText.textContent += letter.charAt(i);

            i++;

        }else{

            clearInterval(typingTimer);

            typing=false;

            unlockScrolling();

        }

    },55);        // slower typing

}



function unlockScrolling(){

    document.body.classList.add("allow-scroll");

    setTimeout(()=>{

        letterSection.classList.add("fade");

        document
        .getElementById("gallerySection")
        .classList.add("show");

        document
        .getElementById("timeline")
        .style.display="block";

    },1800);

}
