// Using setInterval to change the background color at regular intervals
let change;

// Adding a click event listener to the element with id 'start'
document.querySelector('#start').addEventListener('click', function() {
    // Assigning the result of setInterval to the 'change' variable
    change = setInterval(function colorChange() {
        // Generating a random color by creating a hex value
        const color = Math.floor(Math.random() * 10000);
        const randomColor = `#${color}`;
        
        // Setting the background color of the body to the random color
        document.body.style.background = randomColor;
    }, 1000); // Changing the color every 1000 milliseconds (1 second)
});

// Adding a click event listener to the element with id 'stop'
document.querySelector('#stop').addEventListener('click', function () {
    // Clearing the interval to stop the color-changing effect
    clearInterval(change);
});

// Function to generate a random color using hexadecimal values
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Variable to store the interval ID
let intervalId;

// Function to start changing the background color at regular intervals
const startChangingColor = function () {
    // Checking if there is no existing interval
    if (!intervalId) {
        // Setting an interval to change the background color every 1000 milliseconds (1 second)
        intervalId = setInterval(changeBgColor, 1000);
    }

    // Function to change the background color to a random color
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

// Function to stop changing the background color
const stopChangingColor = function () {
    // Clearing the interval and resetting the intervalId to null
    clearInterval(intervalId);
    intervalId = null;
};

// Adding click event listeners to start and stop changing the background color
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);



// let interval;
// const start = document.querySelector('#start')
// start.addEventListener('click', function(){
//     interval =  setInterval(function(){
//     const hex = '0123456789abcdef'
//       let color = '#'
//         for(i=0; i < 6; i++){
//           color += hex[Math.round(Math.random()*16)] 
//         }
//   document.querySelector('body').style.backgroundColor = color;
//   },1000)
// })

// document.querySelector('#stop').addEventListener('click', ()=>{
//   clearInterval(interval)
// })