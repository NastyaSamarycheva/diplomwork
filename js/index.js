function openNav() {
document.getElementById("mySidebar").style.width = "450px";
document.getElementById("main").style.marginLeft = "450px";
document.getElementById("bar").style.marginLeft = "-400px";
document.getElementById("court").style.transform = "translate(200px,0)";
}
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
document.getElementById("bar").style.marginLeft = "0";
document.getElementById("court").style.transform = "translate(0,0)";
}
