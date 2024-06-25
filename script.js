function updateTime() {
    document.getElementById('time').textContent =
        new Date().toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);
