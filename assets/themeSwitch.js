let img = document.getElementById("logo")

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        document.getElementById("themeIcon").textContent="dark_mode";

        setTheme('theme-light');
        img.src = "assets/logo-alt.png"
    } else {
        document.getElementById("themeIcon").textContent="light_mode";

        setTheme('theme-dark');
        img.src = "assets/logo.png"
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        document.getElementById("themeIcon").textContent="light_mode";
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
        img.src = "assets/logo.png"
    } else {
        document.getElementById("themeIcon").textContent="dark_mode";
        setTheme('theme-light');
        img.src = "assets/logo-alt.png"
        document.getElementById('slider').checked = true;
    }
})();
