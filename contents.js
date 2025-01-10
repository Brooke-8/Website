/* Highlighting table of contents on scroll*/
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

