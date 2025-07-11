document.getElementById('regForm').onsubmit = async e => {
  e.preventDefault();
  const form = e.target;
  const data = new URLSearchParams(new FormData(form));
  const res = await fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_ID', {
    method: 'POST', body: data
  });
  if (res.ok) {
    form.reset();
    document.getElementById('msg').textContent = 'Registration received 🙌';
  } else {
    document.getElementById('msg').textContent = 'Submission failed, please try again.';
  }
};