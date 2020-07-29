// we declare a new global variable containing an array that represents the ballons map
let ballonsMap = ['red', 'green' ,'blue',  'green', 'pink', 
'green', 'orange', 'yellow', 'red', 'black', 
'green', 'red', 'purple', 'brown', 'green', 
'pink', 'purple', 'red', 'black', 'red' ];
let activeBalloons = 20;

// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    ballonsMap[position]=null;
    activeBalloons--;
    
    render();
    
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        let active;
        if (ballonsMap[position]==null) {
         active="popped"
        }
        else {
         active="active"
        }
        

        return `<div style="background: ${color}" class="balloon ${active}" onClick=popBalloon(${position})></div>`; // <--- render each balloon
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- rende the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();