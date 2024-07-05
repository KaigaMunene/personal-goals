const dayDiv = document.getElementById("day");
const monthDiv = document.getElementById("month");
const dateDiv = document.getElementById("date");
const timeDiv = document.getElementById("time");

function updateTime() {
  const now = new Date();
  const day = now.getDay(); // 0 for Sunday, 6 for Saturday
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = now.getMonth() + 1; // Months are 0-indexed
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Add leading zero for single digits

  dayDiv.textContent = days[day];
  monthDiv.textContent = months[month - 1];
  dateDiv.textContent = date;
  timeDiv.textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 1000); // Update every second