document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            fetch('https://script.google.com/macros/s/AKfycbw3fZapoC-4ABO5l8htTg-OlYuia5CASYJ9mSAk44dKOuHHmbYkgElH48pexkkXFJK0/exec', {
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                alert('Message sent successfully, Thank You! ඔයාගේ තොරතුරු අපිට ලැබුනා, ස්තූතියි!');
                this.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending 2 message');
            });
        });