// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    let confirmLiftoff;

    const takeoff = document.getElementById("takeoff");

    takeoff.addEventListener("click", function(event){
        // do something
        confirmLiftoff = confirm("Confirm that the shuttle is ready for takeoff.");
    });
}

window.onload = init;