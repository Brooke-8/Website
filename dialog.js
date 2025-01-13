/* Opening Dialog */
const dialog = document.getElementById("projectdialog");
const projects = document.querySelectorAll("div.project");
const projectcontents = document.getElementsByClassName("projectdialogcontent");

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
/* Image Dialog */
const photoDialog = document.getElementById("photodialog");
const imageForDialog = document.getElementById("photodialogimage");
const images = document.getElementsByClassName("openableimage");

for (let i = 0; i < images.length; i++){
    images.item(i).onclick = function(){
        imageForDialog.src = images.item(i).src;
        photoDialog.showModal();
    }
}

window.onclick = function(event){
    if (event.target == dialog){
        dialog.close();
    }   
    if (event.target == photoDialog){
        photoDialog.close();
    }
}
