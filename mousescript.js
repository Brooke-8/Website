const glowcontainer = document.getElementById('glowcontainer');

glowcontainer.addEventListener('mousemove',(e)=>{
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    glowcontainer.style.setProperty("--x", x );
    glowcontainer.style.setProperty("--y", y );
})