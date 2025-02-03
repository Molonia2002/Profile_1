// Function to update the UTC time
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utcTime').textContent = utcTime;
  }
  
  // Update the UTC time every second
  setInterval(updateUTCTime, 1000);
  
  // Initialize the UTC time on page load
  updateUTCTime();