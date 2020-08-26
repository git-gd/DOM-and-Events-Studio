// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){

    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleFlightScreen = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    let upButton;
    let downButton;
    let rightButton;
    let leftButton;
    
    const totalButtons = document.getElementsByTagName("button").length;

    // find buttons by their innerHTML
    for(let i=0;i<totalButtons;i++){
        switch (document.getElementsByTagName("button")[i].innerHTML){
            case 'Up':
                upButton = document.getElementsByTagName("button")[i];
                break;
            case 'Down':
                downButton = document.getElementsByTagName("button")[i];
                break;
            case 'Left':
                leftButton = document.getElementsByTagName("button")[i];
                break;
            case 'Right':
                rightButton = document.getElementsByTagName("button")[i];
                break;
        }
    }

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


        // When the "Abort Mission" button is clicked, the following should happen:
    missionAbort.addEventListener("click", function(){

        // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        if (confirm("Confirm that you want to abort the mission.")){

        // The flight status should change to "Mission aborted."
            flightStatus.innerHTML = "Mission aborted.";

        // The background color of the shuttle flight screen should change from blue to green.
            shuttleFlightScreen.style.backgroundColor = "green";

        // The shuttle height should go to 0.
            spaceShuttleHeight.innerHTML = 0;
        };
    });

        // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
        // The rocket image should move 10 px in the direction of the button that was clicked.
        // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

    upButton.addEventListener("click", function(){
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });
    downButton.addEventListener("click", function(){
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });
    leftButton.addEventListener("click", function(){
        
    });
    rightButton.addEventListener("click", function(){
        
    });
}

window.onload = init;