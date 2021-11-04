
const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(email, name, password);

    if (name && email && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/myLibrary');
        } else {
            alert(response.statusText);
        }
    }
};


document
    .querySelector('#signupbtn')
    .addEventListener('click', signupFormHandler);