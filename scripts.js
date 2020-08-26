// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){

    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleFlightScreen = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoff.addEventListener("click", function(){
        if (confirm("Confirm that the shuttle is ready for takeoff.")){

        // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight.";

        // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleFlightScreen.style.backgroundColor = "blue";

        // The shuttle height should increase by 10,000 miles.
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        };

    });

        // When the "Land" button is clicked, the following should happen:
    landing.addEventListener("click", function(){

        // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        alert("The shuttle is landing. Landing gear engaged.");

        // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = "The shuttle has landed.";

        // The background color of the shuttle flight screen should change from blue to green.
        shuttleFlightScreen.style.backgroundColor = "green";

        // The shuttle height should go down to 0.
        spaceShuttleHeight.innerHTML = 0;
    });
}

window.onload = init;