function validateForm() {
  const x= document.getElementById("fname").value;

  if (x == ""){
    alert("Name field must be filled");
    return false;
  }
}