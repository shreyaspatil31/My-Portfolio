// Rotate designations
const jobTitles = [
    "Java developer",
    "Spring Boot developer",
    "SQL developer",
    "Machine Learning developer",
];

let currentIndex = 0;
const designationElement = document.getElementById('designation');
const jobTitleElement = document.getElementById('job-title');

function changeJobTitle() {
    designationElement.textContent = `Shreyas Patil`;
    jobTitleElement.textContent = jobTitles[currentIndex];
    currentIndex = (currentIndex + 1) % jobTitles.length;
}

// Initial call to display the first job title
changeJobTitle();

// Change job title every 3 seconds
setInterval(changeJobTitle, 3000);

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        // Smooth scroll to the target section
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for handling Hire Me button click
document.getElementById('hire-me-btn').addEventListener('click', function() {
    alert('Thank you for considering me! Please contact me via email at shreyaspatil554@gmail.com to discuss further.');
});
