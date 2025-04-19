document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    const nameError = document.getElementById('nameError');
    const messageError = document.getElementById('messageError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');

    let valid = true;
    let formData = {};

    nameError.textContent = '';
    messageError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    nameError.classList.remove('active');
    messageError.classList.remove('active');
    phoneError.classList.remove('active');
    emailError.classList.remove('active');

    if (!name) {
        nameError.textContent = 'Name is required';
        nameError.classList.add('active');
        valid = false;
    }

    if (message.length < 5) {
        messageError.textContent = 'Message must be at least 5 characters';
        messageError.classList.add('active');
        valid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Phone number must be in the format +380XXXXXXXXX';
        phoneError.classList.add('active');
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Enter a valid email address';
        emailError.classList.add('active');
        valid = false;
    }

    if (valid) {
        formData = {
            name: name,
            message: message,
            phone: phone,
            email: email
        };
        console.log(formData);
        alert("Message sent successfully!");
        this.reset();
    }
});