const maincontainer = document.getElementById('maincontainer');

maincontainer.addEventListener('mousemove',(e)=>{
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    maincontainer.style.setProperty("--x", x );
    maincontainer.style.setProperty("--y", y );
})