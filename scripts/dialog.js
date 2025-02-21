/* Opening Dialog */
const dialog = document.getElementById("projectdialog");
const page = document.getElementById("projectdialogpage");
const projects = document.querySelectorAll("project-element");

for (let i = 0; i < projects.length; i++){
    projects.item(i).addEventListener("click",showDialog);
    function showDialog(){
        page.src = projects.item(i).url;
        dialog.showModal();
    };
}

/* Image Dialog */
const photoDialog = document.getElementById("photodialog");
const imageForDialog = document.getElementById("photodialogimage");
async function loadImages(){
    const list = await fetch('images/pixelart/pixelartimages.json');
    const images = await list.json();
    const imagecontainer = document.getElementById("pixelimagecontainer");
    let imgHTML = '';
    images.forEach(imagePath =>{
        imgHTML += `<img class="pixelimage openableimage" src="${imagePath}">`;
    })
    imagecontainer.innerHTML = `${imgHTML}`;
    imageListeners();
}   
function imageListeners(){
    const images = document.getElementsByClassName("openableimage");
    for (let i = 0; i < images.length; i++){
        images.item(i).onclick = function(){
            imageForDialog.src = images.item(i).src;
            photoDialog.showModal();
        }
    }
}
loadImages();
imageListeners();


/* Closing Dialogs */
window.addEventListener("click",closeDialog);
function closeDialog(event){
    if (event.target == dialog){
        dialog.close();
        page.src = "";
    }   
    if (event.target == photoDialog){
        photoDialog.close();
        imageForDialog.src="";
    }
}


