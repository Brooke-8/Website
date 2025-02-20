/* Glow around the mouse tracker */
const glowcontainer = document.getElementById('glowcontainer');
let mouseX = 0, mouseY = 0;
let animationRequest = null;

function updateGlow(){
    if (mouseY+500 < parseInt(window.getComputedStyle(glowcontainer).height)){
        glowcontainer.style.setProperty("--y", mouseY);
    }
    glowcontainer.style.setProperty("--x", mouseX);
    animationRequest = null;
}

function onMove(e){
    if (e.type === "mousemove"){
        mouseX = e.clientX + window.scrollX;
        mouseY = e.clientY + window.scrollY;
    }
    if (!animationRequest){
        animationRequest = requestAnimationFrame(updateGlow);
    }
}
document.addEventListener("mousemove",onMove);