const form = document.getElementById("contactForm");

let elementsData = {
    name: {
        name: document.getElementById("name"),
        error: document.getElementById("nameError"),
        regex: /[a-z]{3,}/i,
        errorMsg: "Name is required",
    },
    message: {
        name: document.getElementById("message"),
        error: document.getElementById("messageError"),
        regex: /[a-z]{5,}/i,
        errorMsg: "Message must be at least 5 characters",
    },
    phone: {
        name: document.getElementById("phone"),
        error: document.getElementById("phoneError"),
        regex: /^\+380\d{9}$/,
        errorMsg: "Phone number must be in the format +380XXXXXXXXX",
    },
    email: {
        name: document.getElementById("email"),
        error: document.getElementById("emailError"),
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMsg: "Enter a valid email address",
    },
};

let isFormValid = {
    name: false,
    message: false,
    phone: false,
    email: false,
};

function inputValidation(regex, input, inputError, errorMsg) {
    const isValid = regex.test(input.value.trim());
    if (!isValid) {
        inputError.textContent = errorMsg;
        inputError.classList.add("active");
    }
    if (isValid) {
        inputError.textContent = "";
        inputError.classList.remove("active");
    }
    return isValid;
}

for (const key in elementsData) {
    const element = elementsData[key];
    element.name.addEventListener("input", function () {
        isFormValid[key] = inputValidation(
            element.regex,
            element.name,
            element.error,
            element.errorMsg
        );
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    for (const el in isFormValid) {
        if (isFormValid[el] === false) {
            isFormValid[el] = inputValidation(
                elementsData[el].regex,
                elementsData[el].name,
                elementsData[el].error,
                elementsData[el].errorMsg
            );
        }
    }

    if (Object.values(isFormValid).every((value) => value === true)) {
        formData = {
            name: elementsData.name.name.value.trim(),
            message: elementsData.message.name.value.trim(),
            phone: elementsData.phone.name.value.trim(),
            email: elementsData.email.name.value.trim(),
        };

        console.log(formData);
        alert("Message sent successfully!");
        this.reset();

        isFormValid = {
            name: false,
            message: false,
            phone: false,
            email: false,
        };
    }
});
