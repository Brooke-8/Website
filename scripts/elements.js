document.addEventListener('DOMContentLoaded',()=>{
    class Project extends HTMLElement{
        constructor(){
            super();
            const title = this.getAttribute("title") || "Default Title";
            const description = this.getAttribute("description") || "Default Description";
            const skills = this.getAttribute("skills") || "";
            const skillsArray = skills.split(',');
            let skillsHTML = '';
            skillsArray.forEach(skill =>{
                skillsHTML += `<p class="skill">${skill}</p>`;
            })
            this.innerHTML = `
                <div class="project">
                    <h3 class="projecttitle">${title}</h3>
                    <p>${description}</p>
                    <skills-element skills=${skillsArray}></skills-element>
                </div>
            `;
        }
    }
    class Skills extends HTMLElement{
        constructor(){
            super();
            const skills = this.getAttribute("skills")||"";
            const skillsArray = skills.split(',');
            let skillsHTML = '';
            skillsArray.forEach(skill =>{
                skillsHTML += `<p class="skill">${skill}</p>`;
            })
            this.innerHTML = `<div class="skillcontainer">${skillsHTML}</div>`;
        }
    }
    customElements.define('skills-element',Skills);
    customElements.define('project-element',Project);
})
