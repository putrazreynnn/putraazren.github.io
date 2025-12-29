// Live Time & Date
function updateTimeDate() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  const date = now.toLocaleDateString('en-GB');
  document.getElementById('currentTime').textContent = time;
  document.getElementById('currentDate').textContent = date;
}

// Update every second
setInterval(updateTimeDate, 1000);
updateTimeDate();
