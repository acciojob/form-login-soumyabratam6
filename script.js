function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	var fastname = document.getElementById("Fname").value;
	var lastname = document.getElementById("Lname").value;
	 var fullName = fastname + " " + lastname;
	alert(fullName);

}
