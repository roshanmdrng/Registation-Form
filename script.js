document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            fetch('YOUR_APPS_SCRIPT_URL', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                alert('Message sent successfully!');
                this.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending message');
            });
        });