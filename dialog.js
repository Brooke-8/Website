/* Opening Dialog */
const dialog = document.getElementById("projectdialog");
const projects = document.querySelectorAll("div.project");
const projectcontents = document.getElementsByClassName("projectdialogcontent");
const close = document.getElementById("closedialogbutton");

for (let i = 0; i < projects.length; i++){
    projects.item(i).onclick = function(){
        for (let j = 0; j < projectcontents.length; j++){
            if (j===i){
                projectcontents.item(j).style.display = "block"
            } else {
                projectcontents.item(j).style.display = "none";
            }
        }
        dialog.showModal();
    };
}
window.onclick = function(event){
    if (event.target == dialog){
        dialog.close();
    }   
}