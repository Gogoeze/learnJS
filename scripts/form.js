function saveFormData() {
//get form data
const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const gender = document.getElementById("gender").value;
const email = document.getElementById("email").value;

//format the data as desired
const formData = `Name: ${name}\nAge: ${age}\nGender: ${gender}\nEmail: ${email}`;

//create a blob from the data
const blob = new Blob([formData], {type: "text/plain"});

//create a URL for the blob
const url = window.URL.createObjectURL(blob);

//create a link element to trigger the download
const link = document.createElement("a");
link.href = url;
link.download = "formHandelingData.txt"; //sets the file name

//simulate a click on the link to trigger the download
link.click();

//clean up the URL object
window.URL.revokeObjectURL(url);
}