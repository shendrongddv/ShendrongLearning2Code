const lengthSlider = document.querySelector(".pass-length input"),
  options = document.querySelectorAll(".option input"),
  copyIcon = document.querySelector(".input-box span"),
  passwordInput = document.querySelector(".input-box input"),
  passIndicator = document.querySelector(".pass-indicator"),
  generateBtn = document.querySelector(".generate-btn");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbol: "^!$%&|[](){}:;.,*+-#@<>~",
};

const generatePassword = () => {
  let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

  // looping through each option's checkbox
  options.forEach((option) => {
    // if checkbox is checked
    if (option.checked) {
      // if checkbox id isn't exc-duplicate && Spaces
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        // adding particular key value from character object to staticPassword
        staticPassword += characters[option.id];
      }
      // if checkbox id is spaces
      else if (option.id === "spaces") {
        // adding space at the beginning & end of staticPassword
        staticPassword += `  ${staticPassword}  `;
      }
      // else pass true value to excludeDuplicate
      else {
        excludeDuplicate = true;
      }
    }
  });

  for (let i = 0; i < passLength; i++) {
    // getting random character from the static password
    let randomChar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];

    // if excludeDuplicate is true
    if (excludeDuplicate) {
      // if randompassword doesn't contains the current random character or randomChar is equal
      // to space " " then add random character to randomPassword else decrement i by -1
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    }
    // else add random character to randomPassword
    else {
      randomPassword += randomChar;
    }
  }

  // passing randomPassword to passwordInput value
  passwordInput.value = randomPassword;
};

const updatePassIndicator = () => {
  // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider value is less than 16 then pass "medium" as id else pass "strong" as id
  passIndicator.id =
    lengthSlider.value <= 8
      ? "weak"
      : lengthSlider.value <= 16
      ? "medium"
      : "strong";
};

const updateSlider = () => {
  // passing slider value as counter text
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();
};
updateSlider();

const copyPassword = () => {
  // copying random password
  navigator.clipboard.writeText(passwordInput.value);
  // changing copy icon to check
  copyIcon.innerText = "check";
  // after 1500ms, changing check icon to copy
  setTimeout(() => {
    copyIcon.innerText = "copy_all";
  }, 1500);
};

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
