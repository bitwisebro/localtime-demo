function updateTime() {
    const now = new Date();

    // Update 24-hour format
    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes24 = now.getMinutes().toString().padStart(2, '0');
    const seconds24 = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time-24').textContent = `${hours24}:${minutes24}:${seconds24}`;

    // Update 12-hour format
    document.getElementById('time-12').textContent = new Date().toLocaleTimeString();;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);