// Handle adding reservations
document.getElementById('add-reservation').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;

    if (!name || !destination) {
        document.getElementById('response').textContent = "Please enter both name and destination.";
        return;
    }

    try {
        const response = await fetch('/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, destination }),
        });

        const data = await response.json();
        document.getElementById('response').textContent = data.message;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').textContent = "An error occurred. Please try again.";
    }
});

// Handle clearing fields
document.getElementById('clear-fields').addEventListener('click', () => {
    document.getElementById('name').value = '';
    document.getElementById('destination').value = '';
    document.getElementById('response').textContent = '';
});

// Handle viewing reservations (placeholder for now)
document.getElementById('view-reservations').addEventListener('click', () => {
    document.getElementById('response').textContent = "This feature is coming soon!";
});
