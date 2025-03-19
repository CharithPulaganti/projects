document.getElementById('normalUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const normalUser = { name, email, password };
    
    // Store data in localStorage
    localStorage.setItem('normalUser', JSON.stringify(normalUser));
    
    alert('Normal User Signed Up!');
    window.location.href = 'index.html'; // Redirect to homepage or dashboard
  });
  