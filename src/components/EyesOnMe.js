// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    return (
        <div>   
            <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </div>

    )
}

export default EyesOnMe

// Eyes on the ball
// Let's say you're in the club with your buddy. 
// The music's blaring, lights are flashing... It's so hard to get his attention! 
// Your job is to create a component that registers whenever he focuses on you, and when his eyes are drifting off.

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.