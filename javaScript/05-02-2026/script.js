document.getElementById("p1").innerHTML = "Noic1.1";
document.getElementById("p2").style.color = "white";

function myFunction() {
    document.getElementById("dateTimeButtonDiv").innerHTML = Date();
}


const dateNdTimeElement = document.getElementById("dateTimeButtonRiyal");
dateNdTimeElement.addEventListener("mouseover", myFunction2);
dateNdTimeElement.addEventListener("click", myFunction22);
function myFunction2() {
    document.getElementById("dateTimeButtonRiyal").innerHTML = "Mouse over";
}
function myFunction22() {
    document.body.style.backgroundColor = "whitesmoke"
}

const daRiyalText = document.getElementById("daRiyalText")
daRiyalText.addEventListener("mouseover", riyalFun1);
daRiyalText.addEventListener("mouseout", riyalFun2);
function riyalFun1() {
    document.getElementById("daRiyalText").innerText = "Coursor is inside div";
}
function riyalFun2() {
    document.getElementById("daRiyalText").innerText = "Coursor is outside div";
}