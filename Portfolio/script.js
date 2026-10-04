// Show a message when the page loads
window.onload = function() {
    console.log("Portfolio loaded successfully!");
};

// Add a simple effect to project cards
const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {
    project.addEventListener("click", function() {
        alert("You clicked on a project!");
    });
});