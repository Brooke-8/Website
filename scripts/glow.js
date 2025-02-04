/* Glow around the mouse tracker */
const glowcontainer = document.getElementById('glowcontainer');
let mouseX = 0, mouseY = 0;
let animationRequest = null;

function updateGlow(){
    glowcontainer.style.setProperty("--x", mouseX);
    glowcontainer.style.setProperty("--y", mouseY);
    animationRequest = null;
}

function onMoveOrScroll(e){
    if (e.type === "mousemove"){
        mouseX = e.clientX + window.scrollX;
        mouseY = Math.min(e.clientY + window.scrollY, glowcontainer.scrollHeight);
    }
    if (e.type === "scroll"){
        console.log(glowcontainer.scrollHeight)
        if (window.scrollY >glowcontainer.scrollHeight){
            window.scrollTo(0,glowcontainer.scrollHeight)
        }
    }
    if (!animationRequest){
        animationRequest = requestAnimationFrame(updateGlow);
    }
}
document.addEventListener("mousemove",onMoveOrScroll);
window.addEventListener("scroll", onMoveOrScroll);