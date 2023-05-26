const textarea = document.querySelector("textarea"),
  fileNameInput = document.querySelector(".file-name input"),
  selectMenu = document.querySelector(".save-as select"),
  saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
  // getting selected option text
  let selectedOptions = selectMenu.options[selectMenu.selectedIndex].text;
  saveBtn.innerText = `Save as ${selectedOptions.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  // URL.createObjectURL, creates a url that represent passed object
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a"); // creating <a> tag
  link.download = fileNameInput.value; // passing filename as download value of link
  link.href = fileUrl; // passing fileUrl as href value of link
  link.click(); // clicking link so the file download
});
