function userInfo() {
    const userYearInput = prompt('Enter your year of birth');
    const currentYear = new Date().getFullYear();
    let userYear;
    if (userYearInput === null) {
        alert('You canceled entering your year of birth.');
        return;
    } else {
        userYear = Number(userYearInput.trim());
        console.log(currentYear);
        if (!userYear || userYear === null || !/^(19|20)\d{2}$/.test(userYear) || Number(userYear) >= currentYear) {
            alert('You did not enter a valid year of birth.');
            return;
        }
    }

    const userCityInput = prompt('Enter your city');
    let userCity;
    if (userCityInput === null) {
        alert('You canceled entering your city.');
        return;
    } else {
        userCity = userCityInput.trim().toLowerCase();
        if (!userCity) {
            alert('You did not enter your city.');
            return;
        }
    }

    const userSportInput = prompt('Enter your favorite sport');
    let userSport;
    if (userSportInput === null) {
        alert('You canceled entering your favorite sport.');
        return;
    } else {
        userSport = userSportInput.trim().toLowerCase();
        if (!userSport) {
            alert('You did not enter your favorite sport.');
            return;
        }
    }

    let userAge = currentYear - userYear;

    let cityList = {
        "kyiv": "Ukraine",
        "london": "Great Britain",
        "washington": "the USA"
    };
    let userCityAnswer = userCity in cityList
        ? `You are from the capital of ${cityList[userCity]}`
        : `You are from ${userCity.charAt(0).toUpperCase() + userCity.slice(1)}`;

    let sportsList = {
        "tennis": "Roger Federer",
        "racing": "Ayrton Senna",
        "basketball": "Michael Jordan"
    };

    let userSportAnswer = userSport in sportsList
        ? `Cool! You want to be like ${sportsList[userSport]}`
        : `You likes ${userSport}`;

    alert(`Your age is ${userAge}.\n${userCityAnswer}.\n${userSportAnswer}.`);
};

userInfo();
