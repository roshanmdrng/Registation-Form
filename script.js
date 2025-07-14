document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            fetch('https://script.google.com/macros/s/AKfycbx5y4D07sJiO_Uqt68SBHEsyGRsX-2UaYrUn2dZpyDn8MWEmdJZeJKhLXdr9EgvvW6u/execRL', {
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