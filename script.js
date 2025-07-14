document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            fetch('https://script.google.com/macros/s/AKfycbzrDHWEBk1cYANo7ocZp4F5vl8VnKl5aCnn7eK6aGKMrXBf8Ksbk9V7GMGmqmj6udwB/exec', {
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
                alert('Error sending 2 message');
            });
        });