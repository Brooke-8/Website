const label = document.getElementById("dateupdated");
const date = new Date(Date.parse(document.lastModified));
label.innerHTML = date.toDateString();