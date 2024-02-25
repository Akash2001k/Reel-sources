// Creating a Simple Digital Clock 
// follow @akash_kaushik22 at instagram

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");

    const formattedTime = `${hours}:${minutes}:${seconds}`

    document.getElementById('clock').textContent = formattedTime;
}

setInterval(updateClock,1000);

updateClock()