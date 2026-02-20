const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Update the date and time once on page load
updateDateTime();

// Set an interval to update the date and time every second
setInterval(updateDateTime, 1000);
