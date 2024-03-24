// Check if dark mode preference is stored in local storage
const darkMode = localStorage.getItem('darkMode');

// Apply dark mode if it's set to true
if (darkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Update dark mode preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.setItem('darkMode', 'false');
    }
}

// Event listener for the dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
