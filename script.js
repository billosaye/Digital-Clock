// Define the calculateTime function as an arrow function
const calculateTime = () => {
    // Create a new Date object representing the current date and time
    var date = new Date();
  
    // Get the current day of the week as a number (0-6)
    var dayNumber = date.getDay();
  
    // Get the current hour (0-23)
    var hour = date.getHours();
  
    // Get the current minute (0-59)
    var minute = date.getMinutes();
  
    // Determine if the current time is AM or PM
    var ampm = hour >= 12 ? 'PM' : 'AM';
  
    // Array containing abbreviated names of the days of the week
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
    // Convert hour to 12-hour format
    hour = hour % 12;
    // If hour is 0, set it to 12 (midnight or noon)
    hour = hour ? hour : '12';
    // Add leading zero to hour if it is less than 10
    hour = hour < 10 ? '0' + hour : hour;
  
    // Add leading zero to minute if it is less than 10
    minute = minute < 10 ? '0' + minute : minute;
  
    // Update the content of the element with id "day" to the current day name
    document.querySelector("#day").textContent = dayNames[dayNumber];
    // Update the content of the element with id "hour" to the current hour
    document.querySelector("#hour").textContent = hour;
    // Update the content of the element with id "minute" to the current minute
    document.querySelector("#minute").textContent = minute;
    // Update the content of the element with id "ampm" to the current period (AM/PM)
    document.querySelector("#ampm").textContent = ampm;
  
    // Call calculateTime again after 200 milliseconds to update the time continuously
    setTimeout(calculateTime, 200);
  }
  
  // Add an event listener to call calculateTime when the window finishes loading
  window.addEventListener('load', calculateTime);
  