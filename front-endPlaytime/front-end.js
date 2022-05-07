
/* types of fireworks:
    <> sphere * (straight lines of random colour originate in center
        of explosion and then go outwards creating a sphere)
    How to implement the gradual movement of lines and their fading?
    Am I doing the wrong thing in the wrong place? Maybe, but it's fun!

    Intervals, we re-fucking draw every element on the screen, bruh.
    We can store alld coordinates and manipulate them when needed,
    and so we can redraw all the elemnts that were shown on the screen
    and not be enslaved by their current possition.

    <> slow and heavy lines
    <> random balls of light with sparkles
    <> 

source: https://www.youtube.com/watch?v=CWYKpwlVGso
*/

// first index describes the sizes of the scene (idk why, I just did it for the future)
const theGlobalWisdom = [[800, 300], {from:[400,150], to:[400,300], colour:"red"}];

// so we devide length into 5-10 segments (should be modifiable including time)
// set coordinates and give them to the drawing machine.
// drawing machine draws first segment. We update coordinates after some time.
// drawing machine redraws everything again. 
// Now drawing machine question. I guess we probably will use Path.


const ref = document.getElementById("moment");

function lookWhatIDo(objRef, given, colour){
// given is the amount of lines drawn

    const ctx = objRef.getContext("2d");

    console.log(objRef.width, objRef.height)
    ctx.clearRect(0, 0, objRef.width, objRef.height);
    ctx.beginPath();

    for(let i=0; i<given; i++){

        const from = [400,150];

        // length = x^2 + y^2
        const length = 75;

        // because i starts from 0 I have to adjust the formula;
        const degrs = 360/given + 360/given * i;

        // sinusus
        
        // Math.sin(90 * Math.PI / 180 (radian));  
        
        // finding the length the x and y of point to move the line

        let x = from[0] + length * Math.sin(degrs * Math.PI / 180);
        let y = from[1] + length * Math.cos(degrs * Math.PI / 180);

        const to = [x,y];

        theLine(colour, from, to, ctx);
    }
};


function theLine(colour, from, to, ctx){
    ctx.strokeStyle = colour;
    ctx.moveTo(from[0], from[1]);
    ctx.lineTo(to[0], to[1]);
    ctx.stroke();
};

const gave = 20;
const color = "red";

const linesAmount = document.getElementById("theNum");
const colorName = document.getElementById("theCol");
const btn = document.getElementById("m");

btn.addEventListener("click", resetFunction);
linesAmount.addEventListener("change", changeFunction);
colorName.addEventListener("change", changeFunction);

function changeFunction(){
    const given = linesAmount.value;
    const colored = colorName.value;
    lookWhatIDo(ref, given, colored);
}

function resetFunction(){
    const ctx = ref.getContext("2d");
    ctx.clearRect(0, 0, ref.width, ref.height);
}

lookWhatIDo(ref, gave, color);

// the rewritten gradual sphere fireworks
// the rewritten gradual sphere fireworks

// the rewritten gradual sphere fireworks
// the rewritten gradual sphere fireworks




// The drawing machine





