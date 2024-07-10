console.log("Welcome to the Js-programs");

document.addEventListener("visibilitychange", () => {
  document.hidden
    ? (document.title = "Please dont go💔")
    : (document.title = "JS programs");
});

// ========== how to add time in web pages ===============
let time = document.getElementById("time");
console.log(time);

function getTime() {
  setInterval(() => {
    let currentTime = new Date(); // Get the current time
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    time.innerHTML = `Time ${hours}:${minutes}:${seconds}`;
  }, 1000); 
}

document.addEventListener("DOMContentLoaded", getTime)
