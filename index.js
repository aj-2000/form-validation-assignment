
const form  = document.getElementById('from-validation');
    
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Form Data is Valid.")
});

form.submit();