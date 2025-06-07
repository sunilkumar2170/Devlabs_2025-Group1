let value = 0;
    const butt1 = document.querySelector("#but1");
    const butt2 = document.querySelector("#but2");
    const butt3 = document.querySelector("#but3");
    const displayCount = document.querySelector("#count");

    butt1.addEventListener("click", () => {
      value++;
      displayCount.textContent = value;
    });

    butt2.addEventListener("click", () => {
      value--;
      displayCount.textContent = value;
    });

    butt3.addEventListener("click", () => {
      value = 0;
      displayCount.textContent = value;
    });

   
    let seconds = 0;
    let timerId = null;
    const timerDisplay = document.querySelector("#timerDisplay");
    const startTimer = document.querySelector("#startTimer");
    const stopTimer = document.querySelector("#stopTimer");
    const resetTimer = document.querySelector("#resetTimer");

    startTimer.addEventListener("click", () => {
      if (timerId === null) {
        timerId = setInterval(() => {
          seconds++;
          const minutes = Math.floor(seconds / 60);
          const secs = seconds % 60;
          timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }, 1000);
      }
    });

    stopTimer.addEventListener("click", () => {
      clearInterval(timerId);
      timerId = null;
    });

    resetTimer.addEventListener("click", () => {
      clearInterval(timerId);
      timerId = null;
      seconds = 0;
      timerDisplay.textContent = "00:00";
    });

 
    let isDarkMode = false;
    const modeToggle = document.getElementById("modeToggle");
    const modeIcon = document.getElementById("modeIcon");

    modeToggle.addEventListener("click", () => {
      isDarkMode = !isDarkMode;
      document.body.classList.toggle("dark-mode");

      if (isDarkMode) {
        modeIcon.src = "https://img.icons8.com/ios-filled/50/sun--v1.png"; 

      } else {
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png"; 
      }
    });