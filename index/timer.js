const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
});

const timeFormatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
});

function updateClock() {
    const clock = document.getElementById("Realtime");

    if (!clock) {
        return;
    }

    const now = new Date();
    const date = document.createElement("span");
    date.className = "rtime-date";
    date.textContent = dateFormatter.format(now);

    const time = document.createElement("span");
    time.className = "rtime-clock";
    time.textContent = timeFormatter.format(now);

    clock.replaceChildren(date, time);
    clock.dateTime = now.toISOString();
}

updateClock();
setInterval(updateClock, 1000);
