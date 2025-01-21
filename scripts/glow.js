/* Glow around the mouse tracker */
const glowcontainer = document.getElementById('glowcontainer');
glowcontainer.addEventListener('mousemove',(e)=>{
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    glowcontainer.style.setProperty("--x", x );
    glowcontainer.style.setProperty("--y", y );
})

window.addEventListener('scroll', function(){
    const y = window.scrollY;
    glowcontainer.style.setProperty("--sy",y);
});