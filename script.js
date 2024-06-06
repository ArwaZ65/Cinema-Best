
function Submit() {
    let Finish = confirm("Are You Finish");
    if (Finish === true) {
        document.getElementById("cong").innerHTML = "<h4 style='background-color: darkslategrey;color:beige'>Thank You For Regestration In our Website!</h4>";
    }
    else {
        document.getElementById("cong").innerHTML = " ";
    }
}
function Userfun() {
    alert("Warning!! Data will be deleted");
    document.getElementById("cong").innerHTML = " ";

}

function click() {
    document.getElementById("new").css("opacity", "0.5").animate({
        left: '250px',
        opacity: '0.5',
        height: '200px',
        width: '200px'
    })
}
