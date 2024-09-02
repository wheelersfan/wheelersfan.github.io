document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the value of the input field
    const fanId = document.getElementById('fan-id').value;
    
    // Define the correct Fan ID
    const correctFanId = "2040419"; // Replace this with the correct Fan ID

    // Check if the input matches the correct Fan ID
    if (fanId === correctFanId) {
        // Redirect to winner.html
        window.location.href = "winner.html";
    } else {
        // Show a popup for incorrect input
        alert("Invalid Fan ID, Try again.");
    }
});