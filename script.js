// Function to display a welcome message with a gaming theme
function displayWelcomeMessage() {
    alert("Welcome to AJ Website - Your Ultimate Gaming Destination! Get ready to level up your gaming experience!");
}

// Function to handle form submission with a gaming twist
function handleFormSubmission(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    // Perform form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields in the quest scroll.");
    } else {
        // Simulate quest completion (you can replace this with actual form submission logic)
        console.log("Quest completed successfully!");
        console.log("Adventurer: " + name);
        console.log("Email Scroll: " + email);
        console.log("Message Scroll: " + message);
        alert("Congratulations, Adventurer! Your message has been sent. Await a response in your inbox!");

        // Clear form fields after quest completion
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}

// Event listener for form submission with a gaming touch
document.getElementById("contactForm").addEventListener("submit", handleFormSubmission);
