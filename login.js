document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process (replace with actual API call or backend validation)
    if (username === 'example' && password === 'password') {
        // Login successful
        document.getElementById('login-feedback').innerText = `Welcome back, ${username}! Redirecting...`;

        // Simulate redirect to dashboard (replace with actual redirect logic)
        setTimeout(() => {
            window.location.href = '/dashboard.html'; // Redirect to dashboard page
        }, 1000);
    } else {
        // Login failed
        document.getElementById('login-feedback').innerText = 'Invalid username or password. Please try again.';
    }
});
