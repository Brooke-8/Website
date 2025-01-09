const glowcontainer = document.getElementById('glowcontainer');

glowcontainer.addEventListener('mousemove',(e)=>{
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    glowcontainer.style.setProperty("--x", x );
    glowcontainer.style.setProperty("--y", y );
})

window.addEventListener('scroll',function(){
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('h2.listheader');
    
    let currentSection = null;
    sections.forEach(section =>{
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight/5){
            currentSection = section.id;
        }
    });

    links.forEach(link =>{
        const targetId = link.getAttribute('href').substring(1);
        if (targetId === currentSection){
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })
})