// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){

    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");

    takeoff.addEventListener("click", function(event){
        // do something
        if (confirm("Confirm that the shuttle is ready for takeoff.")){

        // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight.";

        // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
        // The shuttle height should increase by 10,000 miles.
        };

    });
}

window.onload = init;