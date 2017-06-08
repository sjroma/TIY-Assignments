// Select the areas we'll be manipulating
const clock = document.querySelector('.clock');
const body = document.querySelector('body');

// Create a function to run every second
// we'll call it `tick`
function tick () {
  // This will use or `now` function to
  // get the current time in the right format.
  // Then we'll update the element's HTML with the time
  let time = now('time');
  clock.innerHTML = time;

  // This will use or `now` function to
  // get the current time in the right format.
  // Then we'll update the body's background with the color
  let color = now('color');
  body.style.backgroundColor = color;
}

// Function to get the current time
function now (format) {
  // This creates a date object of the current time
  let date = new Date;
  let response;

  // This gets the current hour, as well as makes 
  // sure we have a 2 digit number for display
  let hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }

  // This gets the current minutes, as well as makes 
  // sure we have a 2 digit number for display
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  // This gets the current seconds, as well as makes 
  // sure we have a 2 digit number for display
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  // Since we want the format in two different ways, we'll
  // create a conditional here
  if (format === 'time') {
    response = hours + ':' + minutes + ':' + seconds;
  } else if (format === 'color') {
    response = '#' + hours + minutes + seconds;
  }

  // Here we'll return the correct response
  return response;
}

// This method will call a method (`tick`) every 1000 ms
// or every 1 second
setInterval(tick, 1000);

// Since the above won't call `tick` until one second from now
// let's call it by itself so there is no delay
tick();