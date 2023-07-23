const anchors = document.querySelectorAll(".anchor");
anchors.forEach(elem => elem.addEventListener("click", smoothing));

function smoothing(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}

const conf = document.querySelector(".confirmation");
const overlay = document.querySelector(".overlay");
const popUpMessage = document.querySelector(".popUpMessage");

conf.addEventListener("click", takingInformations);

function takingInformations(){
    let mail = document.querySelector("#mail");
    let acceptNewsletter;
    let frequency = document.querySelector("#frequence");
    let message = document.querySelector("#comments");
    overlay.style.display="block";
    function closePopUp() {
        overlay.style.display = "none";
    }
    setTimeout(closePopUp, 2500);
}

let logoBat = document.querySelector("#logoBat");
document.onmousemove = follow;
    function follow(e){
        var x =  e.pageX;
        var y =  e.pageY;
                        
        logoBat.style.left = (x+1)+'px';
        logoBat.style.top  = (y+1)+'px';
    }