
window.oncontextmenu = function () {
    return false;
};

document.addEventListener("keydown", function(event){
    var key = event.key;

    if (key == 123) {
        
        return false;
    } else if ((key == 17 && key == 16 && key == 73) || (key == 17 && key == 16 && key == 74)) {
       
        return false;
        
    }
}, false,);

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    if(options.enableAlert) {
      alert(options.alertText);
    }
  });
  
  var options = {
    enableAlert: true, // Set this false to deactivate alert
    alertText: "AAGAYA MERA BETA CODE COPY KARNE 😣😒 !!"} // Customize this to change alert text


const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle);




function sign(){
    alert("Abhi isme time lagega ");
}
 