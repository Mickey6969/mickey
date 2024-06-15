let taskbar = document.querySelector(".taskbar");
let stratnamu = document.querySelector(".stratnamu");

taskbar.addEventListener('click', () => {
    console.log("Taskbar clicked");
    if (stratnamu.style.bottom === '75px') {
        stratnamu.style.bottom = '-500px';
    } else {
        stratnamu.style.bottom = '75px';
    }
});
