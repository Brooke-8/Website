const maincontainer = document.getElementById('maincontainer');

maincontainer.addEventListener('mousemove',(e)=>{
    maincontainer.style.setProperty("--x", e.clientX);
    maincontainer.style.setProperty("--y", e.clientY);
})